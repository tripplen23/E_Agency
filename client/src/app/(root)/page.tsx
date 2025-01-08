import Pricing from "@/components/landing-page/Pricing";
import { getProducts, getUser } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const supabase = await createClient();

  const [user, products] = await Promise.all([
    getUser(supabase), // Get the current authenticated user
    getProducts(supabase), // Get all active products with their prices
  ]);

  // if (user) {
  //  return redirect("/dashboard");
  // }

  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Pricing products={products ?? []} />
    </main>
  );
};

export default Home;
