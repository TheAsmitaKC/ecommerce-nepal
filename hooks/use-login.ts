import { useMutation, useQueryClient } from "@tanstack/react-query";

type Login = {
  email: string;
  password: string;
};

export async function postLogin(data: Login) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error || "Login failed");
  }

  return json;
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: postLogin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "me"] });
    },
  });
}
