import { InfiniteSlider } from "@/app/_components/ui/infinite-slider";
import Image from "next/image";

const images = [
  "/acc1.webp",
  "/acc2.webp",
  "/acc3.webp",
  "/acc4.webp",
  "/acc5.webp",
];

export function Accreditations() {
  return (
    <section className="bg-white py-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-4xl font-bold text-neutral-800">
          Memberships | Certifications | Accreditation&apos;s
        </h1>
        <p className="text-center text-lg text-neutral-700">
          Teamwork begins by building trust
        </p>
      </div>
      <InfiniteSlider gap={140} reverse className="mt-12">
        {images.map((img) => {
          return (
            <div key={img} className="relative h-28 w-28">
              <Image
                src={img}
                alt="accreditation logo"
                fill
                className="object-scale-down"
              />
            </div>
          );
        })}
      </InfiniteSlider>
    </section>
  );
}
