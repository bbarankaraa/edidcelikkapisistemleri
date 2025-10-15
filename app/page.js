import CallBubble from "@/components/CallBubble";
import DoorModels from "./_components/DoorModels";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";
import FixDoor from "./_components/FixDoor";
import Stats from "./_components/Stats";
import Sss from "./_components/Sss";
import Services from "./_components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <FixDoor />
      <Services />
      <DoorModels />
      <Stats />
      <Testimonials />
      <Sss />
    </main>
  );
}
