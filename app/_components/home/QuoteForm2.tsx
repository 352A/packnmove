"use client";

import { useExpandable } from "@/app/_hooks/use-expandable";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export function QuoteForm2() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable(false);

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.offsetHeight : 0);
    }
  }, [isExpanded, animatedHeight]);

  return (
    <div className="py-12 dark:bg-zinc-100">
      <Card className="mx-auto w-[400px] max-w-md p-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-8">
            <p className="text-zinc-400">
              At Pack N Move Co., we offer high-quality services at competitive
              prices, delivering excellent value to our clients. Our aim is to
              exceed expectations and provide personalized solutions to meet all
              logistics needs.
            </p>
            <div className="flex w-full items-center justify-between gap-2">
              <Button size="sm" onClick={toggleExpand}>
                {isExpanded ? "Hide" : "REQUEST A QUICK QUOTE"}
              </Button>
            </div>
          </div>

          <motion.div
            style={{ height: animatedHeight }}
            className="overflow-hidden rounded-lg bg-muted"
          >
            <div ref={contentRef} className="p-4">
              <h4 className="mb-2 font-medium">Features Overview</h4>
              <form
                className="flex h-full flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid grid-cols-2 gap-6 px-4 py-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="name"
                    className="rounded-sm px-2 py-2"
                  />

                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="subject"
                    className="rounded-sm px-2 py-2"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    className="rounded-sm px-2 py-2"
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    className="rounded-sm px-2 py-2"
                  />
                  <textarea
                    className="col-span-2 resize-none rounded-md bg-white px-4 py-3 text-sm outline-none"
                    autoFocus
                    placeholder="your message?"
                  />
                </div>
                <div key="close" className="flex justify-between px-4">
                  <button
                    className="relative ml-1 flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-sm bg-primary px-2 text-sm text-zinc-100 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
                    type="submit"
                    aria-label="Submit note"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
}
