"use client";

import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "motion/react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";

import { IconTruckFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Store",
    href: "/store",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar3() {
  const path = usePathname();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="z-10 mx-auto flex h-20 w-5/6 items-center justify-evenly rounded-full border-b bg-white py-1 shadow-sm shadow-zinc-100 dark:bg-zinc-950/20 dark:bg-gradient-to-r dark:from-zinc-950/20 dark:to-zinc-900/20 dark:shadow-none">
      <Link href="/">
        {/* <Image
          src="/logo.png"
          alt="logo"
          width={65}
          height={65}
          className="rounded-md border-4 border-white bg-white px-1 transition-transform duration-500 ease-in-out hover:rotate-6 hover:scale-95 dark:border-zinc-900"
        /> */}
        <Image
          src="/logo-t.png"
          alt="logo"
          width={65}
          height={65}
          className="rounded-md px-2 transition-transform duration-500 ease-in-out hover:rotate-6 hover:scale-95"
        />
      </Link>
      <ul className="flex gap-12 dark:text-zinc-200">
        {navLinks.map((nav, idx) => (
          <motion.li
            className={` ${path === nav.href ? "text-primary" : "text-zinc-900 dark:text-zinc-100"} relative flex cursor-pointer justify-center py-3 font-semibold`}
            key={nav.href}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link className="relative z-20" href={nav.href}>
              {nav.name}
            </Link>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute top-0 block h-full w-full rounded-xl bg-zinc-100/75 px-12 dark:bg-zinc-800/35"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      type: "tween",
                      stiffness: 300,
                      damping: 25,
                    },
                  }}
                />
              )}
            </AnimatePresence>
          </motion.li>
        ))}
      </ul>

      {/* <div className="absolute bottom-0 left-1/2 h-2 w-5/6 -translate-x-1/2 bg-zinc-50 bg-gradient-to-r from-zinc-700 to-primary dark:hidden"></div> */}

      <Modal>
        <ModalTrigger className="group/modal-btn flex justify-center bg-primary text-white">
          <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
            Track Shipments
          </span>
          <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/modal-btn:translate-x-0">
            <IconTruckFilled />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="dark:bg-zinc-50">
            <h4 className="mb-8 text-center text-lg font-bold dark:text-zinc-900 md:text-2xl">
              Track your shipment
            </h4>
            <input
              type="text"
              name="id"
              id="id"
              placeholder="Enter tracking number"
              className="rounded-xl bg-zinc-100 px-2 py-2"
            />
          </ModalContent>
          <ModalFooter className="gap-4">
            <Button variant="secondary">Cancel</Button>
            <button className="w-28 rounded-md border border-primary bg-primary px-2 py-1 text-sm text-white dark:bg-primary">
              Track
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </nav>
  );
}
