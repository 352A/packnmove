import { Button } from "../ui/button";

export default function Hero8() {
  return (
    <section className="relative py-12">
      {/* <h1 className="absolute left-0 top-0 -z-10 rotate-12 text-[19rem] font-bold leading-none text-zinc-50/35 drop-shadow-sm">
        PACK N MOVE
      </h1> */}
      <div className="grid h-[30rem] grid-cols-2 items-center gap-12 px-44">
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
            <Button variant="secondary">Request quote</Button>
          </div>
        </div>

        {/* <div
          className="relative h-full bg-primary"
          style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
        >
          <video
            autoPlay
            muted
            loop
            className="inset-0 z-20 h-[27rem] w-auto object-cover shadow-sm shadow-primary"
          >
            <source src="/packnmove.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <div
          className="relative h-full bg-primary"
          style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
        >
          {/* <div className="absolute h-full w-full rounded-xl bg-zinc-200/75 dark:bg-zinc-900/25"></div> */}
          <video
            autoPlay
            muted
            loop
            className="inset-0 z-20 h-[27rem] w-auto object-cover shadow-sm shadow-primary"
          >
            <source src="/packnmove.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
