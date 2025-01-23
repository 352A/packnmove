"use client";

import Navbar3 from "./Navbar3";
import Theme from "./Theme";

export default function Header3() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full rounded-b-[5rem] border-b-2 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-900">
      <div className="flex h-12 w-full items-center justify-end px-12">
        <Theme />
      </div>

      <Navbar3 />
    </header>
  );
}
