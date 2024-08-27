import React from "react";
import NavBar from "../components/home/navBar";

export default function About() {
  return (
    <div className="min-h-screen scroll-smooth snap-y snap-mandatory">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 via-slate-900/40 pt-10 pb-10">
        <NavBar
          navigation={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
          fastLoad={true}
        ></NavBar>
        <h1 className="text-center text-5xl text-4xl font-bold animate-fade-in-fast">
          O nas
        </h1>
        <h5 className="mb-2 mt-10 text-2xl text-center max-w-3xl mx-8 leading-9 animate-fade-in-fast">
          <b>PeakForge</b> to grupa młodych, ambitnych ludzi, którzy z pasją
          podchodzą do każdego projektu. Naszą misją jest dostarczanie
          innowacyjnych i efektywnych rozwiązań, które wspierają rozwój naszych
          klientów. Stale poszerzamy naszą wiedzę i umiejętności, aby oferować
          usługi na najwyższym poziomie.
        </h5>
        <div className="img-4 mx-auto mt-5 transform transition-transform duration-500 hover:scale-105 animate-fade-in-fast">
          <div className="img-4-color"></div>
        </div>
      </div>
    </div>
  );
}
