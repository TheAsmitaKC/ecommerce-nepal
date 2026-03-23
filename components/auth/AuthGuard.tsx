"use client";

import { useAuth } from "@/hooks/use-auth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const publicPaths = ["/login"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const isPublic = publicPaths.includes(pathname);

  useEffect(() => {
    if (isLoading) return;
    if (!user && !isPublic) {
      router.replace("/login");
    }
  }, [user, isLoading, isPublic, router]);

  // Always render public pages immediately
  if (isPublic) return <>{children}</>;

  // Protected pages: wait for auth check
  if (isLoading) return null;
  if (!user) return null;

  return <>{children}</>;
}
