"use client";

import Navbar3 from "./Navbar3";
// import Theme from "./Theme";

export default function Header2() {
  return (
    <header className="relative z-10 bg-zinc-50 dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-800">
      {/* <div className="flex h-12 w-full items-center justify-end px-12">
        <Theme />
      </div> */}

      {/* <div className="absolute left-1/2 top-12 -z-10 h-20 w-5/6 -translate-x-1/2 -translate-y-1 rounded-t-full bg-zinc-50 bg-gradient-to-r from-zinc-700 to-primary dark:hidden"></div> */}
      <Navbar3 />
    </header>
  );
}
