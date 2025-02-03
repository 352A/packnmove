import {
  IconPhoneFilled,
  IconHomeFilled,
  IconClockHour2Filled,
} from "@tabler/icons-react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="border-b dark:bg-neutral-900">
      <header className="relative ms-auto flex h-10 w-1/2 items-center justify-center gap-12 rounded-bl-full bg-neutral-50 px-12 text-neutral-700 dark:bg-white dark:text-neutral-800">
        <div className="flex gap-2">
          <IconPhoneFilled />
          <span>1840400</span>
        </div>
        <div className="flex gap-2">
          <IconHomeFilled />
          <span>Kuwait City - Al Hamra Tower</span>
        </div>
        <div className="flex gap-2">
          <IconClockHour2Filled />
          <span>All Week: 24/7 H</span>
        </div>
      </header>
      <Navbar />
    </div>
  );
}
