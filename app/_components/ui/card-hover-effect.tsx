"use client";

import { cn } from "@/app/_lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ForwardRefExoticComponent, useState } from "react";
import { CardFooter } from "./card";
import { IconProps } from "@tabler/icons-react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    Icon: ForwardRefExoticComponent<IconProps>;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-5",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-zinc-200/25 dark:bg-zinc-200"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="group transition-all duration-300 ease-linear hover:scale-110">
            <CardTitle className="text-lg text-zinc-800">
              {item.title}
            </CardTitle>
            <CardDescription className="text-zinc-700 dark:text-zinc-300">
              {item.description}
            </CardDescription>
            <CardFooter>
              {/* <item.Icon className="absolute -bottom-8 -left-7 -z-10 mt-6 size-52 text-zinc-600 opacity-5 transition-all duration-200 ease-linear group-hover:left-0 dark:text-zinc-900 dark:opacity-25" /> */}
              <item.Icon className="group-hover: absolute right-4 top-0 -z-10 mt-6 size-9 text-primary transition-all duration-200 ease-linear dark:text-zinc-100" />
            </CardFooter>
            <span className="absolute -right-5 -top-20 -z-20 select-none text-[17rem] font-bold text-zinc-400/25 opacity-35 drop-shadow-2xl dark:text-zinc-900/35">
              {idx + 1}
            </span>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl bg-zinc-50 bg-gradient-to-b from-zinc-100 to-zinc-300 p-4 group-hover:border-zinc-200 dark:bg-zinc-800 dark:from-zinc-800 dark:to-zinc-800",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "mt-4 font-bold text-zinc-800 dark:text-zinc-100",
        className,
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-sm leading-relaxed tracking-wide text-zinc-400",
        className,
      )}
    >
      {children}
    </p>
  );
};
