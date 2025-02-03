"use client";

import Logo from "./Logo";
import { DesktopNavbar } from "./Navbar";
import Theme from "./Theme";

export default function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

export function DesktopHeader() {
  return (
    <header className="relative z-10 w-full bg-zinc-50 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800 max-lg:hidden">
      <div className="flex h-12 w-full items-center justify-end px-12">
        <Theme />
      </div>
      <DesktopNavbar />
    </header>
  );
}

export function MobileHeader() {
  return (
    <header className="w-full dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800 lg:hidden">
      <div className="flex h-16 w-full items-center justify-around py-2">
        <div className="w-14">
          <Logo />
        </div>
      </div>
    </header>
  );
}
