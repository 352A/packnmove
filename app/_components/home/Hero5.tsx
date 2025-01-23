export default function Hero5() {
  return (
    <div className="z-10 h-[32rem] w-full py-6 dark:bg-zinc-900">
      <div className="relative pt-2">
        <div className="absolute left-20 top-1/2 z-20 w-1/2 px-12 py-12 font-extrabold text-white">
          <div className="absolute -z-10 h-full w-full bg-zinc-900/75 blur-3xl"></div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold">
              Seamless Export & Import Solutions
            </h1>
            <p className="text-xl font-bold">
              We Handle Your Shipments, So You Can Focus on Growth
            </p>
          </div>
        </div>
        <div
          className="h-[30rem] w-full rounded-b-[5rem] bg-zinc-900 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero4.jpg')",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
