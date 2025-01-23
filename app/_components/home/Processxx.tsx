"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "1. Packaging",
    description: "Let us handle your packing needs with our reliable services.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/transport1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "2. STORAGE",
    description: "Maximize your space with Pack N Move Co.'s storage services.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/hero1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "3. SHIPPING",
    description: "Trust Pack N Move Co. to handle all of your shipping needs.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/transport1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "4. TRACKING",
    description: "Track your items every step of the way with Pack N Move Co.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/hero1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "5. DELIVERY",
    description:
      "Experience fast and reliable delivery services with Pack N Move Co.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/transport1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function Process() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-900 p-10">
      <h2 className="py-6 text-center text-4xl font-bold text-white">
        PROFESSIONAL & QUICK PROCESS
      </h2>
      <StickyScroll content={content} />
    </div>
  );
}
