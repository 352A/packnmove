import Hero9 from "./_components/home/Hero9";
import Process from "./_components/home/Process";
import ScrollUp from "./_components/home/ScrollUp";
import OurServices from "./_components/home/OurServices";
import Inquiry from "./_components/home/Inquiry";
import Relocation from "./_components/home/Relocation";
import QuoteForm from "./_components/home/QuoteForm";
import ChooseUs from "./_components/home/ChooseUs";
// import Accreditations2 from "./_components/home/Accreditations2";

export default function Home() {
  return (
    <div>
      <Hero9 />
      <Process />
      <ScrollUp />
      <OurServices />
      <Inquiry />
      <Relocation />
      <QuoteForm />
      <ChooseUs />
      {/* <Accreditations2 /> */}
    </div>
  );
}
