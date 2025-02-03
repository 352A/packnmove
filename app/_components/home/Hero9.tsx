import { Button } from "../ui/button";

export default function Hero9() {
  return (
    <section className="relative bg-zinc-50 dark:bg-transparent lg:py-12 lg:pt-16 xl:px-12">
      <div className="right-0 flex w-full justify-end overflow-hidden lg:absolute xl:px-12 xl:pl-52">
        <video
          autoPlay
          muted
          loop
          className="h-screen w-full rounded-br-none object-cover lg:h-[29rem] lg:w-[35rem] lg:rounded-bl-[15rem] lg:rounded-tl-[15rem] lg:rounded-tr-[20rem] xl:w-1/2"
        >
          <source
            src="https://res.cloudinary.com/dihbojmlf/video/upload/v1737661122/packnmove720p_vzpcjm.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex rounded-b-[5rem] bg-zinc-900 object-cover py-12 align-middle dark:bg-zinc-900 dark:bg-gradient-to-r dark:from-zinc-950 dark:to-zinc-800 max-lg:z-20 max-lg:px-14 lg:h-[29rem] lg:w-3/4 lg:rounded-bl-none lg:rounded-br-[15rem] lg:rounded-tl-[15rem] lg:rounded-tr-[15rem] lg:ps-24 lg:pt-16 xl:rounded-tl-[20rem] xl:ps-52">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-9 max-lg:text-center lg:gap-8">
            <h1 className="text-3xl font-bold text-zinc-100 dark:text-zinc-100 lg:text-4xl">
              Seamless Export & Import Solutions
            </h1>
            <p className="text-md text-zinc-300 dark:text-zinc-400 lg:text-lg">
              From Reliable Freight Services to Tailored Support, We Ensure Your
              Goods Reach Their Destination On Time and in Perfect Condition.
            </p>
            <div className="flex gap-2 max-lg:justify-center">
              <Button>Learn more</Button>
              <Button variant="secondary">Request quote</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
