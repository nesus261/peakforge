import React from "react";
import Particles from "../particles";
import NavBar from "./navBar";

export default function Welcome() {
  return (
    <div className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-950 via-slate-900/40 overflow-hidden">
      <NavBar />

      <img className="w-80 mb-0.5 animate-title rounded-3xl" src="logo2.png" />

      <div className="hidden mt-5 w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        PeakForge
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="y-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          A place where modern solutions for your business will be created
        </h2>
      </div>
    </div>
  );
}
