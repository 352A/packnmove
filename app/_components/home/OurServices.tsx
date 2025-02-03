import { cn } from "@/app/_lib/utils";
import {
  IconBriefcase,
  IconClipboardText,
  IconDeviceLaptop,
  IconHomeSearch,
  IconPlaneInflight,
  IconTruck,
} from "@tabler/icons-react";

export default function OurServices() {
  const features = [
    {
      title: "Transportation & Packaging",
      description:
        "Efficient transportation and secure packaging for your goods to ensure safe delivery.",
      icon: <IconTruck />,
    },
    {
      title: "Express Services",
      description:
        "Fast and reliable express delivery options to meet your urgent shipping needs.",
      icon: <IconPlaneInflight />,
    },
    {
      title: "Logistics Services",
      description:
        "Comprehensive logistics solutions for streamlined supply chain management.",
      icon: <IconClipboardText />,
    },
    {
      title: "Solutions Services",
      description:
        "Customized service solutions tailored to your business requirements.",
      icon: <IconDeviceLaptop />,
    },
    {
      title: "Real Estate Services",
      description:
        "Professional real estate assistance to help you find or manage properties.",
      icon: <IconHomeSearch />,
    },
    {
      title: "Enterprises & SMEs Services",
      description:
        "Dedicated services to support the growth of enterprises and small businesses.",
      icon: <IconBriefcase />,
    },
  ];

  return (
    <section className="relative dark:bg-white">
      {/* <div className="transalte-y-12 h-12 rounded-bl-[10rem] dark:bg-zinc-900"></div> */}
      <div className="bg-gradient-to-r pb-32 dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800">
        <div className="flex flex-col gap-12 text-center lg:px-44">
          <h1 className="text-4xl font-bold dark:text-zinc-50">Our Services</h1>
          <p className="px-8 text-zinc-400 lg:px-32">
            Pack ‘N’ Move is a leading provider of comprehensive services in
            Kuwait, catering to transportation, logistics, shipping, real
            estate, and e-commerce solutions. With a strong commitment to
            excellence, they offer reliable and efficient services tailored to
            meet the diverse needs of businesses and individuals.
          </p>
        </div>
        <div className="relative z-10 mx-auto mt-12 grid max-w-7xl grid-cols-1 max-lg:justify-items-center md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 dark:border-zinc-700/25 lg:border-r",
        (index === 0 || index === 3) && "dark:border-zinc-700/25 lg:border-l",
        index < 3 && "dark:border-zinc-700/25 lg:border-b",
      )}
    >
      {index < 3 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-zinc-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-zinc-800" />
      )}
      {index >= 3 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-zinc-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-zinc-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-zinc-600 dark:text-zinc-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-zinc-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary dark:bg-zinc-700" />
        <span className="inline-block text-zinc-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-zinc-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-zinc-600 dark:text-zinc-300">
        {description}
      </p>
    </div>
  );
};
