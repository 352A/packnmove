"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

const content = [
  {
    title: "Seamless Export & Import Solutions",
    subtitle: "We Handle Your Shipments, So You Can Focus on Growth",
    img: "/hero4.jpg",
  },
  {
    title: "Seamless Export & Import Solutions",
    subtitle: "We Handle Your Shipments, So You Can Focus on Growth",
    img: "/hero1.jpg",
  },
  {
    title: "Seamless Export & Import Solutions",
    subtitle: "We Handle Your Shipments, So You Can Focus on Growth",
    img: "/hero3.jpg",
  },
];

export function Hero() {
  return (
    <Carousel
      className="-z-10 h-[34rem] w-full overflow-hidden bg-gradient-to-r dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800"
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {content.map((slide, idx) => {
          return (
            <CarouselItem key={idx}>
              <div className="relative h-[34rem]">
                <div className="absolute left-20 top-1/2 z-20 w-1/2 px-12 py-12 font-extrabold text-white">
                  <div className="absolute -z-10 h-full w-full bg-gray-900/85 blur-3xl"></div>
                  <h1 className="text-5xl font-bold">{slide.title}</h1>
                  <p className="text-xl font-bold">{slide.subtitle} </p>
                </div>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={2000}
                  height={1000}
                  className="rounded-tl-[5rem] brightness-[0.75]"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious className="absolute left-12 z-50 cursor-pointer border-none bg-primary/50 text-white" />
      <CarouselNext className="absolute right-12 border-none bg-primary/50 text-white" /> */}
    </Carousel>
  );
}
