import React from "react";
import ScrollToTop from "./components/scrollToTop";
import Welcome from "./components/home/welcome";
import Particles from "./components/particles";
import Us from "./components/home/us";
import WhyUs from "./components/home/whyUs";
import Websites from "./components/home/websites";
import Scripts from "./components/home/scripts";
import MobileApps from "./components/home/mobileApps";

export default function Home() {
  return (
    <div className="overflow-y-scroll h-screen scroll-smooth snap-y snap-mandatory w-screen">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={95}
      />
      <Welcome />
      <Us />
      <WhyUs />
      <Websites />
      <Scripts />
      <MobileApps />
      <ScrollToTop />
    </div>
  );
}
