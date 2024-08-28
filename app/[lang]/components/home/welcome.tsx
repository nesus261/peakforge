import React from "react";
import Particles from "../particles";
import NavBar from "./navBar";
import { getDictionary } from "../../dictionaries";

export default function Welcome(params: any) {
  const dict = params.dict;

  return (
    <div className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-950 via-slate-900/40 overflow-hidden">
      <NavBar dict={dict} />

      <img className="w-80 mb-0.5 animate-title rounded-3xl" src="logo2.png" />

      <div className="hidden mt-5 w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="py-3.5 px-0.5 z-10 sm:text-sm text-4xl duration-1000 md:text-transparent md:bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        PeakForge
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="y-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">{dict.home.welcome.subtitle}</h2>
      </div>
    </div>
  );
}
