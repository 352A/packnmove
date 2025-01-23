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
    <section className="relative w-full bg-gradient-to-r dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800">
      <div className="w-full rounded-b-[8rem] border-b-[0.3rem] border-zinc-100 bg-white bg-gradient-to-r py-16 dark:border-white dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800">
        <h2 className="text-center text-4xl font-bold text-zinc-800 dark:text-zinc-100">
          PROFESSIONAL & QUICK PROCESS
        </h2>
        <div className="mx-auto px-36">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
}
