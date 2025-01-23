import { Button } from "../ui/button";

export default function Hero7() {
  return (
    <section className="relative h-[32rem] w-full overflow-hidden bg-gradient-to-r px-36 py-40">
      {/* <div className="absolute left-0 top-0 w-full overflow-hidden">
        <div className="absolute h-full w-full dark:bg-zinc-900/85"></div>
        <video autoPlay muted loop className="z-20 opacity-20 dark:opacity-100">
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* <div className="absolute left-0 top-0 w-full overflow-hidden">
        <div className="absolute h-full w-full bg-zinc-200/75 dark:bg-zinc-900/85"></div>
        <video autoPlay muted loop className="z-20 ">
          <source src="/packnmove.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <div className="absolute left-1/2 top-0 w-11/12 -translate-x-1/2 py-4">
        <div className="absolute h-full w-full rounded-xl bg-zinc-200/75 dark:bg-zinc-900/85"></div>
        <video autoPlay muted loop className="z-20 rounded-xl">
          <source src="/packnmove.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative grid grid-cols-1 items-center justify-center gap-12 px-44 text-center">
        <div className="flex flex-col gap-8 px-6">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
            Seamless Export & Import Solutions
          </h1>
          <p className="text-lg dark:text-zinc-400">
            From Reliable Freight Services to Tailored Support, We Ensure Your
            Goods Reach Their Destination On Time and in Perfect Condition.
          </p>
          <div className="flex justify-center gap-2">
            <Button>Learn more</Button>
            <Button variant="secondary">Request quote</Button>
          </div>
        </div>
        {/* <div className="relative h-96 w-[38rem] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
          <Image
            src="/hero4.jpg"
            alt="hero image"
            fill
            className="object-cover"
          />
        </div> */}

        {/* blob */}
        {/* <div className="overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="z-20 h-[29rem] w-[39rem] rounded-br-[15rem] rounded-tl-[20rem] rounded-tr-[15rem] object-cover"
          >
            <source src="/packnmove.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
    </section>
  );
}
