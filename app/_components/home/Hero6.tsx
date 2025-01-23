import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero6() {
  return (
    <section className="w-full bg-gradient-to-r px-44 py-20 dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800">
      <div className="grid grid-cols-2 items-center justify-center gap-12">
        <div className="flex flex-col gap-8 px-6">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
            Seamless Export & Import Solutions
          </h1>
          <p className="text-lg dark:text-zinc-400">
            From Reliable Freight Services to Tailored Support, We Ensure Your
            Goods Reach Their Destination On Time and in Perfect Condition.
          </p>
          <div className="flex gap-2">
            <Button>Learn more</Button>
            <Button variant="secondary">Contact us</Button>
          </div>
        </div>
        <div className="relative h-96 w-[38rem] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <Image
            src="/hero4.jpg"
            alt="hero image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
