import React from "react";
import ScrollToTop from "./components/scrollToTop";
import Welcome from "./components/home/welcome";
import Particles from "./components/particles";
import Us from "./components/home/us";
import WhyUs from "./components/home/whyUs";
import Websites from "./components/home/websites";
import Scripts from "./components/home/scripts";
import MobileApps from "./components/home/mobileApps";
import { getDictionary } from "./dictionaries";
import { Props } from "./layout";

export default async function Home({ params }: Props) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="overflow-y-scroll h-screen scroll-smooth snap-y snap-mandatory w-screen">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={95}
      />
      <Welcome dict={dict} />
      <Us dict={dict} />
      <WhyUs dict={dict} />
      <Websites dict={dict} />
      <Scripts dict={dict} />
      <MobileApps dict={dict} />
      <ScrollToTop />
    </div>
  );
}
