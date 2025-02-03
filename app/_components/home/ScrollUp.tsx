"use client";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export default function ScrollUp() {
  return (
    <div className="flex flex-col overflow-hidden bg-gradient-to-r dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800 max-lg:hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-50">
              Pack N Move <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Holding Company
              </span>
            </h1>
          </>
        }
      >
        <div className="flex flex-col gap-7 px-6">
          <div className="relative h-64 w-full overflow-hidden rounded-xl">
            <Image
              src="/hero3.jpg"
              alt="image"
              fill
              className="object-cover object-bottom"
            />
          </div>
          <h1 className="w-fit border-l-8 border-primary px-6 text-[1.7rem] font-bold text-zinc-900 dark:text-zinc-100">
            ABOUT US
          </h1>
          <p className="px-10 text-zinc-700 dark:text-zinc-300">
            Pack N’ Move is a leading transportation and packaging company in
            Kuwait, offering a range of high-quality services to its customers.
            With over 18 years of experience in the industry, the company has
            grown and expanded its operations to include storage services and a
            specialized exhibition for packaging materials and storage needs.
            Pack N’ Move is committed to delivering innovative and personalized
            services while maintaining the highest standards of safety,
            convenience, and security. The company places a great emphasis on
            customer satisfaction and works hard to build long-term
            relationships with its clients. Thank you for considering Pack N’
            Move for your transportation and packaging needs.
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
}
