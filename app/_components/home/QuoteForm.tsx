"use client";

import Popover from "../ui/Popover";

export default function QuoteForm() {
  return (
    <section className="relative select-none bg-zinc-900 bg-gradient-to-r dark:bg-zinc-100 dark:from-zinc-200 dark:to-zinc-100">
      <div className="grid grid-cols-1 gap-12 px-12 py-24 max-lg:gap-44 max-lg:pb-44 lg:grid-cols-2 lg:px-44">
        <div className="flex flex-col gap-12">
          <h2 className="text-2xl font-bold text-zinc-100 dark:text-zinc-800 lg:text-4xl">
            REQUEST A QUICK QUOTE
          </h2>
          <p className="text-zinc-400">
            At Pack N Move Co., we offer high-quality services at competitive
            prices, delivering excellent value to our clients. Our aim is to
            exceed expectations and provide personalized solutions to meet all
            logistics needs.
          </p>
        </div>
        <Popover />
      </div>
    </section>
  );
}
