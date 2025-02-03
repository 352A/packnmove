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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";

import {
  IconBlockquote,
  IconBriefcase,
  IconBuildingStore,
  IconHome,
  IconMenu2,
  IconPhone,
  IconTruckFilled,
  IconUser,
} from "@tabler/icons-react";

import { useState } from "react";
import { Button } from "./ui/button";
import Logo from "./Logo";
import Theme from "./Theme";

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

export default function Navbar() {
  return (
    <div>
      <DesktopNavbar />
    </div>
  );
}

export function Navigation() {
  const path = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className="flex max-lg:justify-evenly lg:gap-12 lg:dark:text-zinc-200">
      {navLinks.map((nav, idx) => (
        <motion.li
          className={` ${path === nav.href ? "text-primary" : "text-zinc-900 dark:text-zinc-100"} relative flex cursor-pointer justify-center py-3 font-semibold`}
          key={nav.href}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link className="relative z-20 max-lg:hidden" href={nav.href}>
            {nav.name}
          </Link>

          <Link
            className={` ${idx > 2 && "max-sm:hidden"} relative z-20 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 lg:hidden`}
            href={nav.href}
          >
            <div
              className={`${path === nav.href ? "bg-zinc-100/85 shadow-inner shadow-zinc-200 dark:bg-zinc-900 dark:shadow-none" : ""} flex justify-start gap-3 rounded-full px-5 py-4 dark:text-zinc-300`}
            >
              {nav.icon}
              <span className={`${path === nav.href ? "block" : "hidden"}`}>
                {nav.name}
              </span>
            </div>
          </Link>

          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute top-0 block h-full w-full rounded-xl bg-zinc-100/75 px-12 dark:bg-zinc-800/35 max-lg:hidden"
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
      <li className="relative flex cursor-pointer justify-center py-3 font-semibold lg:hidden">
        <div
          className={`flex justify-start rounded-md bg-zinc-100/75 px-5 py-4 dark:bg-zinc-950/45 dark:text-zinc-300`}
        >
          <Drawer>
            <DrawerTrigger asChild>
              <IconMenu2 />
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="my-4">Sitemap</DrawerTitle>
                  <DrawerDescription>Explore our services</DrawerDescription>
                </DrawerHeader>
                <div className="absolute right-5 top-5">
                  <Theme />
                </div>
                <ul className="grid grid-cols-2 gap-6 py-4">
                  {navLinks.map((nav) => (
                    <DrawerClose key={nav.name} asChild>
                      <Link href={nav.href}>
                        <li className="flex flex-col items-center justify-center gap-2 rounded-xl bg-zinc-100 p-6 dark:bg-zinc-900">
                          <div className="text-zinc-800 dark:text-zinc-100">
                            {nav.icon}
                          </div>
                          <div>{nav.name}</div>
                        </li>
                      </Link>
                    </DrawerClose>
                  ))}
                </ul>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </li>
    </ul>
  );
}

export function DesktopNavbar() {
  return (
    <nav className="z-10 mx-auto flex h-20 items-center justify-evenly rounded-full border-b bg-white py-1 shadow-sm shadow-zinc-100 dark:bg-zinc-950/20 dark:bg-gradient-to-r dark:from-zinc-950/20 dark:to-zinc-900/20 dark:shadow-none max-lg:hidden lg:w-11/12 xl:w-5/6">
      <Link href="/">
        <Logo />
      </Link>
      <Navigation />
      <TrackShipment />
    </nav>
  );
}

export function MobileNavbar() {
  return (
    <nav className="overflow-hidden">
      <Navigation />
    </nav>
  );
}

export function TrackShipment() {
  return (
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
  );
}
