import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Button } from "../ui/button";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { cn } from "@/app/_lib/utils";

export default function Relocation() {
  return (
    <section className="grid w-full items-center gap-2 overflow-hidden bg-zinc-50 bg-gradient-to-r px-8 py-24 dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800 lg:grid-cols-2 lg:gap-12 lg:px-44">
      <div className="flex flex-col gap-12 max-lg:px-6 max-lg:text-center">
        <h1 className="text-2xl font-bold lg:text-4xl">
          Seamless Relocation Solutions for a Stress-Free Move
        </h1>
        <p className="text-md text-zinc-500 dark:text-zinc-400">
          With Pack N Move Co., you can be assured of high-quality, safe and
          secure moving services. Book now and let us take care of your
          logistics needs.
        </p>
      </div>

      <CardContainer className="w-full px-6">
        <CardBody className="group/card relative h-auto w-auto rounded-xl border bg-zinc-900 p-6 dark:bg-zinc-800/65 dark:hover:shadow-2xl dark:hover:shadow-zinc-800/[0.1] sm:w-[30rem]">
          {/* <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800"></div> */}
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <AnimatedGridPattern
              numSquares={50}
              maxOpacity={0.1}
              duration={3}
              className={cn(
                "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>
          <CardItem
            translateZ="50"
            className="mx-auto text-xl font-bold text-zinc-100 dark:text-white"
          >
            let us take care of your logistics needs.
          </CardItem>

          <CardItem translateZ="320" className="mt-12 w-full">
            <Image
              src="/plane.png"
              height="1000"
              width="1000"
              className="h-full w-full rounded-xl object-cover"
              alt="thumbnail"
            />
          </CardItem>
          <div className="mt-6 flex items-center justify-between">
            <CardItem translateZ={20} className="w-full">
              <Button className="w-full px-4 py-6 text-lg active:scale-95">
                Book Now
              </Button>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  );
}
