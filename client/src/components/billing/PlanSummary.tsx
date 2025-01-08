import { Tables } from "@datatypes.types";
import { User } from "@supabase/supabase-js";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

type Product = Tables<"products">;
type Price = Tables<"prices">;
type Subscription = Tables<"subscriptions">;

interface ProductWithPrices extends Product {
  prices: Price[];
}

interface PriceWithProduct extends Price {
  products: Product | null;
}

interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface PlanSummaryProps {
  subscription: SubscriptionWithProduct | null;
  user: User | null;
  products: ProductWithPrices[] | null;
}

const PlanSummary = ({ subscription, user, products }: PlanSummaryProps) => {
  if (!subscription || subscription.status !== "active") {
    return (
      <Card className="max-w-5xl">
        <CardContent className="px-5 py-4">
          <h3 className="pb-4 text-base font-semibold flex flex-wrap items-center gap-x-2">
            <span>Plan Summary</span>
            <Badge variant={"secondary"} className="bg-primary/10">
              No Plan
            </Badge>
          </h3>

          <div className="">
            
          </div>
        </CardContent>
      </Card>
    );
  }

  return <div>PlanSummary</div>;
};

export default PlanSummary;
