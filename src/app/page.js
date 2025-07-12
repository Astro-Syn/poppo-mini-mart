import Image from "next/image";
import Hero from './components/hero/Hero';
import Locations from './components/locations/Locations';
import AboutUs from "./components/about/AboutUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Locations />
    </div>
  );
}
