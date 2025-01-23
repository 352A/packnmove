import Image from "next/image";

export default function Hero2() {
  return (
    <section className="relative h-[32rem] overflow-hidden">
      <div className="relative z-10 mx-auto py-28">
        <Image
          src="/hero4.jpg"
          alt="hero image"
          width={2000}
          height={1000}
          className="absolute left-0 top-0 -z-20 opacity-15"
        />
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <h2 className="mx-auto text-4xl font-extrabold text-gray-800 md:text-5xl">
            Seamless Export & Import Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            We Handle Your Shipments, So You Can Focus on Growth
          </p>
        </div>
      </div>
      <div
        className="absolute inset-0 m-auto h-[357px] max-w-xs blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "linear-gradient(106.89deg,  rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </section>
  );
}
