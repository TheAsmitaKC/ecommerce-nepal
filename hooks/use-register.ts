import { useMutation } from "@tanstack/react-query";

type Register = {
  email: string;
  name: string;
  password: string;
};

export async function postRegister(data: Register) {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error || "Registration failed");
  }

  return json;
}

export function useRegister() {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: postRegister,
  });
}
