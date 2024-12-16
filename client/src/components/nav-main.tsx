"use client";

import {
  BadgeCheck,
  ChevronRight,
  CreditCard,
  ImagePlay,
  ImagesIcon,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Frame, Image, Settings2, SquareTerminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Dashboard",
    icon: SquareTerminal,
    items: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: SquareTerminal,
      },
    ],
  },
  {
    title: "Image Tools",
    icon: Image,
    items: [
      { title: "Generate Image", url: "/image-generation", icon: ImagePlay },
      { title: "Gallery", url: "/gallery", icon: ImagesIcon },
    ],
  },
  {
    title: "Models",
    icon: Frame,
    items: [
      {
        title: "My Models",
        url: "/my-models",
        icon: Frame,
      },
      {
        title: "Model Training",
        url: "/model-training",
        icon: Frame,
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings2,
    items: [
      {
        title: "Account Settings",
        url: "/account-settings",
        icon: BadgeCheck,
      },
      {
        title: "Billing",
        url: "/billing",
        icon: CreditCard,
      },
    ],
  },
];

export function NavMain() {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navItems.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.url}
                      className={cn(
                        "rounded-none",
                        pathName === subItem.url
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground"
                      )}
                    >
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          {subItem.icon && <subItem.icon />}
                          <span>{subItem.title}</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </Link>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
