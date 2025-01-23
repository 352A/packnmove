import Popover from "../ui/Popover";

export default function QuoteForm() {
  return (
    <section className="bg-zinc-900 bg-gradient-to-r dark:bg-zinc-100 dark:from-zinc-200 dark:to-zinc-100">
      <div className="grid grid-cols-2 gap-12 px-44 py-24">
        <div className="flex flex-col gap-12">
          <h2 className="text-4xl font-bold text-zinc-100 dark:text-zinc-800">
            REQUEST A QUICK QUOTE
          </h2>
          <p className="text-zinc-400">
            At Pack N Move Co., we offer high-quality services at competitive
            prices, delivering excellent value to our clients. Our aim is to
            exceed expectations and provide personalized solutions to meet all
            logistics needs.
          </p>
        </div>
        <Popover />
      </div>
    </section>
  );
}
