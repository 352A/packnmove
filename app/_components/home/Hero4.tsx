"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

export default function Hero4() {
  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev === 1620 ? 0 : prev + 180));
      setIsVisible((prev) => !prev);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="relative -z-10 h-[75rem] w-full overflow-hidden">
      {/* <div className="absolute top-1/2 z-10 h-full w-full bg-neutral-900"></div> */}
      <div
        className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-36 transition-all duration-1000 ease-in-out"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center center", // Ensure rotation is centered
        }}
      >
        <div className="relative h-full w-full">
          {/* <Image
            src="/hero4.jpg"
            alt="hero image"
            fill
            className={`${isVisible ? "" : "blur-sm"} rounded-t-full object-cover transition-all duration-[2s] ease-in-out`}
          /> */}
          <div className="relative h-full w-full rounded-t-full bg-neutral-900">
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-12 text-center">
              <h1 className="text-5xl text-neutral-100">
                Seamless Export & Import Solutions
              </h1>
              <p className="text-lg text-neutral-300">
                We Handle Your Shipments, So You Can Focus on Growth
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <Image
            src="/hero4.jpg"
            alt="hero image"
            fill
            className={`${isVisible ? "hidden blur-sm" : ""} rotate-180 rounded-t-full object-cover transition-all duration-[2s] ease-in-out`}
          />
        </div>
      </div>
    </motion.div>
  );
}
