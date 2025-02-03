"use client";

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

import {
  IconBlockquote,
  IconBriefcase,
  IconBuildingStore,
  IconHome,
  IconPackageExport,
  IconPhone,
  IconTruckFilled,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <IconHome />,
  },
  {
    name: "Services",
    href: "/services",
    icon: <IconBriefcase />,
  },
  {
    name: "Store",
    href: "/store",
    icon: <IconBuildingStore />,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: <IconBlockquote />,
  },
  {
    name: "About Us",
    href: "/about",
    icon: <IconUser />,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: <IconPhone />,
  },
];

export function Navigation() {
  const path = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      {navLinks.map((nav, idx) => (
        <motion.li
          className={` ${path === nav.href ? "text-primary" : "text-zinc-900 dark:text-zinc-100"} relative flex cursor-pointer justify-center py-3 font-semibold max-lg:justify-start`}
          key={nav.href}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link className="relative z-20 max-lg:hidden" href={nav.href}>
            {nav.name}
          </Link>
          <Link className="relative z-20 lg:hidden" href={nav.href}>
            <div className="flex justify-start gap-4 rounded-full bg-zinc-100/75 px-6 py-4">
              {nav.icon}
              <span className={`${path === nav.href ? "block" : "hidden"}`}>
                {nav.name}
              </span>
            </div>
          </Link>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute top-0 block h-full w-full rounded-xl bg-zinc-100/75 px-12 dark:bg-zinc-800/35 max-lg:hidden max-lg:px-6"
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

      <Modal>
        <ModalTrigger className="group/modal-btn flex items-center justify-center bg-primary text-white max-lg:h-fit max-lg:rounded-full">
          <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40 max-lg:hidden">
            Track Shipments
          </span>
          <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/modal-btn:translate-x-0 max-lg:hidden">
            <IconTruckFilled />
          </div>
          <div className="my-auto lg:hidden">
            <IconPackageExport />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="dark:bg-zinc-900">
            <h4 className="mb-8 text-center text-lg font-bold dark:text-zinc-100 md:text-2xl">
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
          <ModalFooter className="gap-4 bg-zinc-800">
            <Button variant="secondary">Cancel</Button>
            <Button>Track</Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
}

export function DesktopNavbar() {
  return (
    <nav className="z-10 mx-auto flex h-20 items-center justify-evenly rounded-full border-b bg-white py-1 shadow-sm shadow-zinc-100 dark:bg-zinc-950/20 dark:bg-gradient-to-r dark:from-zinc-950/20 dark:to-zinc-900/20 dark:shadow-none max-lg:hidden lg:w-11/12 xl:w-5/6">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex gap-12 dark:text-zinc-200">
        <Navigation />
      </ul>
    </nav>
  );
}

export function MobileNavbar() {
  return (
    <nav className="py-2">
      <ul className="flex justify-evenly px-4">
        <Navigation />
      </ul>
    </nav>
  );
}
