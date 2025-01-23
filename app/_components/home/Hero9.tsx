import { Button } from "../ui/button";

export default function Hero9() {
  return (
    <section className="relative bg-zinc-50 px-12 py-16 dark:bg-transparent">
      {/* <h1 className="absolute left-0 top-0 -z-10 rotate-12 text-[19rem] font-bold leading-none text-zinc-50/35 drop-shadow-sm">
        PACK N MOVE
      </h1> */}
      <div className="absolute top-10 z-0 h-[29rem] w-3/4 rounded-br-[15rem] rounded-tl-[20rem] rounded-tr-[15rem] bg-zinc-900 object-cover dark:bg-zinc-900 dark:bg-gradient-to-r dark:from-zinc-950 dark:to-zinc-800"></div>
      <div className="absolute right-0 overflow-hidden px-12">
        <video
          autoPlay
          muted
          loop
          className="z-20 h-[29rem] w-[39rem] rounded-bl-[15rem] rounded-tl-[15rem] rounded-tr-[20rem] object-cover"
        >
          <source
            src="https://res.cloudinary.com/dihbojmlf/video/upload/v1737661122/packnmove720p_vzpcjm.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative grid h-[30rem] grid-cols-2 items-center gap-12 px-44">
        <div className="flex flex-col gap-8 px-6">
          <h1 className="text-4xl font-bold text-zinc-100 dark:text-zinc-100">
            Seamless Export & Import Solutions
          </h1>
          <p className="text-lg text-zinc-300 dark:text-zinc-400">
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
      </div>
    </section>
  );
}
