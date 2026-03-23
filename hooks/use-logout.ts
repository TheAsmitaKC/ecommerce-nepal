import { useMutation, useQueryClient } from "@tanstack/react-query";

async function postLogout() {
  const res = await fetch("/api/auth/logout", { method: "POST" });
  if (!res.ok) throw new Error("Logout failed");
  return res.json();
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      queryClient.setQueryData(["auth", "me"], null);
    },
  });
}
