"use client";
import useClickOutside from "@/app/_hooks/useClickOutside";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { ArrowLeftIcon } from "lucide-react";
import { useRef, useState, useEffect, useId } from "react";

const TRANSITION = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
};

export default function Popover() {
  const uniqueId = useId();
  const formContainerRef = useRef<HTMLDivElement>(
    document.createElement("div"),
  );
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useClickOutside(formContainerRef, () => {
    closeMenu();
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <MotionConfig transition={TRANSITION}>
      <div className="flex items-center justify-center">
        <motion.button
          key="button"
          layoutId={`popover-${uniqueId}`}
          className="flex h-9 items-center bg-primary px-3 text-white dark:bg-primary dark:text-white"
          style={{
            borderRadius: 8,
          }}
          onClick={openMenu}
        >
          <motion.span
            layoutId={`popover-label-${uniqueId}`}
            className="text-sm"
          >
            Request Quote
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={formContainerRef}
              layoutId={`popover-${uniqueId}`}
              className="absolute h-72 overflow-hidden bg-zinc-800"
              style={{
                borderRadius: 12,
              }}
            >
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
                    type="button"
                    className="flex items-center"
                    onClick={closeMenu}
                    aria-label="Close popover"
                  >
                    <ArrowLeftIcon
                      size={16}
                      className="text-zinc-50 dark:text-zinc-100"
                    />
                  </button>
                  <button
                    className="relative ml-1 flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-sm bg-primary px-2 text-sm text-zinc-100 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
                    type="submit"
                    aria-label="Submit note"
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
