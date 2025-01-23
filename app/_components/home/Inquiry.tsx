import InteractiveHoverButton from "../ui/interactive-hover-button";

export default function Inquiry() {
  return (
    <div className="flex h-36 w-full items-center justify-center gap-16 bg-zinc-900 dark:bg-zinc-50">
      <h1 className="text-3xl font-bold text-zinc-100 dark:text-zinc-800">
        Not sure which solution fits you business needs?
      </h1>

      <InteractiveHoverButton
        text="Contact Us"
        className="w-52 rounded-md border-none"
      ></InteractiveHoverButton>
    </div>
  );
}
