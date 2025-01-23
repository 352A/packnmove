"use client";

import { SplineScene } from "@/app/_components/ui/splite";
import { Card } from "@/app/_components/ui/card";
import { Spotlight } from "./ui/Spotlight";

export default function Robo({ title }: { title: string }) {
  return (
    <section className="bg-gradient-to-r px-24 dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800">
      <Card className="relative h-[30rem] w-full overflow-hidden border-none bg-neutral-950 bg-gradient-to-r px-6 dark:bg-zinc-900 dark:from-zinc-950 dark:to-zinc-900">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          // fill="white"
        />

        <div className="flex h-full">
          {/* Left content */}
          <div className="relative z-10 flex flex-1 flex-col justify-center ps-24">
            <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-4xl font-bold text-transparent md:text-5xl">
              {title}
            </h1>
            <p className="mt-12 max-w-lg rounded border-l-4 border-primary px-6 text-2xl font-medium leading-snug text-zinc-500">
              Page is under construction.
              <br />
              We’ll be back soon with exciting updates!
            </p>
          </div>

          {/* Right content */}
          <div className="relative flex-1">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
