"use client";

import { cn } from "@/lib/utils";
import { Brain, Settings, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { aiServicesRoutes, mainRoutes } from "./SideBarRoutes";

const Sidebar = () => {
  const pathName = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(true);

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-primary text-secondary">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <Brain className="h-8 w-8 text-secondary" />
          <h1 className="text-2xl font-bold ml-2">AI Agency</h1>
        </Link>

        <div className="space-y-1">
          {mainRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-foreground hover:bg-white/10 rounded-lg transition",
                pathName === route.href
                  ? "text-secondary bg-white/10"
                  : "text-zinc-700"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}

          <div className="pt-2">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-secondary hover:bg-white/10 rounded-lg transition",
                "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                {isServicesOpen ? (
                  <ChevronDown className="h-5 w-5 mr-3" />
                ) : (
                  <ChevronRight className="h-5 w-5 mr-3" />
                )}
                AI Services
              </div>
            </button>

            {isServicesOpen && (
              <div className="pl-4 max-h-[400px] overflow-y-auto">
                {aiServicesRoutes.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={cn(
                      "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                      pathName === service.href
                        ? "text-secondary bg-white/10"
                        : "text-zinc-400"
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <service.icon className={cn("h-5 w-5 mr-3")} />
                      {service.label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-3 py-2">
        <Link
          href="/settings"
          className={cn(
            "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
            pathName === "/settings"
              ? "text-white bg-white/10"
              : "text-zinc-400"
          )}
        >
          <div className="flex items-center flex-1">
            <Settings className={cn("h-5 w-5 mr-3")} />
            Settings
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
