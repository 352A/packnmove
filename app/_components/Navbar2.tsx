"use client";

import Link from "next/link";
import React from "react";

import {
  IconBlockquote,
  IconBriefcase,
  IconBuildingStore,
  IconHome,
  IconPackageExport,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";

import { buttonVariants } from "@/app/_components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { cn } from "@/app/_lib/utils";
import { Dock, DockIcon } from "@/app/_components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: IconHome, label: "Home" },
    { href: "/services", icon: IconBriefcase, label: "Our Services" },
    { href: "/store", icon: IconBuildingStore, label: "Store" },
    { href: "/blog", icon: IconBlockquote, label: "Blog" },
    { href: "/about", icon: IconUser, label: "About Us" },
    { href: "/contact", icon: IconPhone, label: "Contact Us" },
    { href: "/track", icon: IconPackageExport, label: "Track Shipment" },
  ],
};

export function Navbar2() {
  return (
    <div>
      <TooltipProvider>
        <Dock direction="middle" className="my-8">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip delayDuration={0.2}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full",
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
