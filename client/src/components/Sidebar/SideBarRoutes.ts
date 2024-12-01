import {
  Code,
  ChefHat,
  MessageSquare,
  Home,
  Pencil,
} from "lucide-react";

export const mainRoutes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
  },
];

export const aiServicesRoutes = [
  {
    label: "Ecode",
    icon: Code,
    href: "/ecode",
  },
  {
    label: "Echef",
    icon: ChefHat,
    href: "/echef",
  },
  {
    label: "Echat",
    icon: MessageSquare,
    href: "/echat",
  },
  {
    label: "Ewrite",
    icon: Pencil,
    href: "/ewrite",
  },
];