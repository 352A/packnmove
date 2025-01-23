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

export default function Navbar() {
  const path = usePathname();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="mx-44 mt-2 flex items-center justify-evenly rounded-b-3xl rounded-bl-full dark:bg-neutral-900">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={65}
          height={65}
          className="-translate-y-7 rounded-md border-4 border-white bg-white px-1 transition-transform duration-500 ease-in-out hover:rotate-6 hover:border-neutral-800 hover:bg-neutral-200"
        />
      </Link>
      <ul className="flex gap-12 dark:text-neutral-100">
        {navLinks.map((nav, idx) => (
          <motion.li
            className={` ${path === nav.href && "text-primary"} relative flex cursor-pointer justify-center py-3 font-semibold`}
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
                  className="absolute top-0 block h-full w-full rounded-xl bg-neutral-100/75 px-12 dark:bg-neutral-800"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      type: "spring",
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
          <ModalContent className="dark:bg-neutral-50">
            <h4 className="mb-8 text-center text-lg font-bold dark:text-neutral-900 md:text-2xl">
              Track your shipment
            </h4>
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
