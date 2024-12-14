"use server";

import { createClient } from "@/lib/supabase/server";

interface AuthResponse {
  error: null | string;
  success: boolean;
  data: unknown | null;
}

export async function signup(formdata: FormData): Promise<AuthResponse> {
  const supabase = await createClient();

  const data = {
    fullName: formdata.get("fullName") as string,
    email: formdata.get("email") as string,
    password: formdata.get("password") as string,
  };

  const { data: signUpData, error } = await supabase.auth.signUp(data);

  return {
    error: error?.message || "There was an error signing up!",
    success: !error,
    data: signUpData || null,
  };
}
