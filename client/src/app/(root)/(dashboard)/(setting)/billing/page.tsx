import PlanSummary from "@/components/billing/PlanSummary";
import Pricing from "@/components/billing/Pricing";
import { getCredits } from "@/lib/actions/credit-actions";
import { getProducts, getSubscription, getUser } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const BillingPage = async () => {
  const supabase = await createClient();

  const [user, products, subscription] = await Promise.all([
    getUser(supabase), // Get the current authenticated user
    getProducts(supabase), // Get all active products with their prices
    getSubscription(supabase), // Get the current subscription
  ]);

  if (!user) {
    return redirect("/login");
  }

  const { data: credits } = await getCredits();

  return (
    <section className="container mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Plans & Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription and billing information
        </p>
      </div>

      <div className="grid gap-10">
        <PlanSummary
          subscription={subscription}
          user={user}
          products={products || []}
          credits={credits || null}
        />

        {subscription.status === "active" && (
          <Pricing
            user={user}
            products={products ?? []}
            subscription={subscription}
            showInterval={false}
            className="!p-0 max-w-full"
            activeProduct={
              subscription?.prices?.products?.name.toLowerCase() || "pro"
            }
          />
        )}
      </div>
    </section>
  );
};

export default BillingPage;
