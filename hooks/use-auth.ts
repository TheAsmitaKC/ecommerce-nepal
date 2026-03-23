import { useQuery } from "@tanstack/react-query";

async function fetchMe() {
  const res = await fetch("/api/auth/me");
  if (!res.ok) return null;
  const json = await res.json();
  return json.user as { id: string; email: string; name: string };
}

export function useAuth() {
  const { data: user, isLoading, refetch } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchMe,
    retry: false,
  });

  return { user: user ?? null, isLoading, refetch };
}
