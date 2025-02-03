"use client";

import {
  IconCurrentLocation,
  IconForklift,
  IconPackage,
  IconTruck,
  IconPlaneTilt,
} from "@tabler/icons-react";
import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "Packaging",
    description: "Let us handle your packing needs with our reliable services.",
    Icon: IconPackage,
  },
  {
    title: "STORAGE",
    description: "Maximize your space with Pack N Move Co.'s storage services.",
    Icon: IconForklift,
  },
  {
    title: "SHIPPING",
    description: "Trust Pack N Move Co. to handle all of your shipping needs.",
    Icon: IconPlaneTilt,
  },
  {
    title: "TRACKING",
    description: "Track your items every step of the way with Pack N Move Co.",
    Icon: IconCurrentLocation,
  },
  {
    title: "DELIVERY",
    description:
      "Experience fast and reliable delivery services with Pack N Move Co.",
    Icon: IconTruck,
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-gradient-to-r dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800 max-lg:px-6 max-lg:py-20">
      <div className="w-full bg-zinc-50 bg-gradient-to-r dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800 lg:rounded-b-[8rem] lg:border-b-[0.3rem] lg:border-zinc-800 lg:py-8 lg:dark:border-white">
        <h2 className="text-center text-2xl font-bold leading-relaxed text-zinc-800 dark:text-zinc-100 lg:text-4xl">
          PROFESSIONAL & QUICK PROCESS
        </h2>
        <div className="mx-auto lg:px-36">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}
