"use client";

import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "./UserButton";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </div>
  );
}
