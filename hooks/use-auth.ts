import { useQuery } from "@tanstack/react-query";

async function fetchMe() {
  const res = await fetch("/api/auth/me");
  if (!res.ok) return null;
  const json = await res.json();
  return json.user as { id: string; email: string; name: string };
}

export function useAuth() {
  const { data: user, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchMe,
    retry: false,
  });

  // Treat initial load OR background refetch with no cached user as loading
  return { user: user ?? null, isLoading: isLoading || (isFetching && !user), refetch };
}
