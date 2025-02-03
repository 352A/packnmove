import InteractiveHoverButton from "../ui/interactive-hover-button";

export default function Inquiry() {
  return (
    <div className="flex w-full items-center justify-center gap-4 bg-zinc-900 py-4 dark:bg-zinc-50 max-lg:flex-col max-lg:text-center lg:h-36 lg:gap-16">
      <h1 className="text-2xl font-bold text-zinc-100 dark:text-zinc-800 lg:text-3xl">
        Not sure which solution fits you business needs?
      </h1>

      <InteractiveHoverButton
        text="Contact Us"
        className="w-52 rounded-md border-none"
      ></InteractiveHoverButton>
    </div>
  );
}
