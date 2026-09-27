import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Designs from "../components/Designs.jsx";
import Gallery from "../components/Gallery.jsx";
import Appointment from "../components/Appointment.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Designs />
      <Gallery />
      <Appointment />
      <Contact />
    </main>
  );
}
