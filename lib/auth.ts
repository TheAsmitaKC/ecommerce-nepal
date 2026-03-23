import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
}

// In-memory store — replace with a database later
const users: User[] = [
  {
    id: "admin-001",
    email: "admin@gmail.com",
    name: "Admin",
    password: "$2b$10$SCgNqyof.gnNCOT75wuXfe4a8FoWsDOxxcmE73U9vBKy7i8shDaVa", // admin
  },
];

export async function findUserByEmail(email: string): Promise<User | undefined> {
  return users.find((u) => u.email === email);
}

export async function createUser(email: string, name: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user: User = {
    id: crypto.randomUUID(),
    email,
    name,
    password: hashedPassword,
  };
  users.push(user);
  return user;
}

export async function verifyPassword(plain: string, hashed: string): Promise<boolean> {
  return bcrypt.compare(plain, hashed);
}

export function generateAccessToken(user: User): string {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: "15m" }
  );
}

export function generateRefreshToken(user: User): string {
  return jwt.sign(
    { id: user.id },
    REFRESH_SECRET,
    { expiresIn: "7d" }
  );
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { id: string; email: string; name: string };
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_SECRET) as { id: string };
}

export function findUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}
