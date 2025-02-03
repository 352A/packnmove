import { FeatureSteps } from "../feature-section";

const features = [
  {
    step: "Step 1",
    title: "Reliability",
    content: "Trust Pack N Move for reliable and safe transportation services.",
    image: "/hero4.jpg",
  },
  {
    step: "Step 2",
    title: "Customer Service",
    content:
      "Our team is dedicated to ensuring excellent customer service and satisfaction.",
    image: "/hero2.jpg",
  },
  {
    step: "Step 3",
    title: "Competitive Pricing",
    content:
      "Pack N Move ensures fair and transparent pricing with no hidden fees or charges.",
    image: "/hero3.jpg",
  },
  {
    step: "Step 4",
    title: "Experience",
    content:
      "Choose Pack N Move for our proven track record of excellence in logistics services.",
    image: "/hero3.jpg",
  },
];

export default function ChooseUs() {
  return (
    <div className="select-none bg-zinc-900 bg-gradient-to-r px-2 pb-32 dark:bg-zinc-100 dark:from-zinc-200 dark:to-zinc-100 lg:px-64">
      <div className="rounded-3xl bg-zinc-50 bg-gradient-to-r px-2 py-16 dark:bg-zinc-900 dark:from-zinc-900 dark:to-zinc-800 lg:px-24">
        <FeatureSteps
          features={features}
          title="Why Choose Us?"
          autoPlayInterval={4000}
        />
      </div>
    </div>
  );
}
