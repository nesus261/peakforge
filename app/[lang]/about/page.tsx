import React from "react";
import NavBar from "../components/home/navBar";
import { getDictionary } from "../dictionaries";

export default async function About({ params }: any) {
  const full_dict = await getDictionary(params.lang);
  const dict = full_dict.about;

  return (
    <div className="min-h-screen scroll-smooth snap-y snap-mandatory">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-950 via-slate-900/40 pt-10 pb-10">
        <NavBar
          dict={full_dict}
          navigation={["home", "contact"]}
          fastLoad={true}
        ></NavBar>
        <h1 className="text-center text-5xl text-4xl font-bold animate-fade-in-fast">
          {dict.title}
        </h1>
        <h5 className="mb-2 mt-10 text-2xl text-center max-w-3xl mx-8 leading-9 animate-fade-in-fast">
          <b>PeakForge</b> {dict.description}
        </h5>
        <div className="img-4 mx-auto mt-5 transform transition-transform duration-500 hover:scale-105 animate-fade-in-fast">
          <div className="img-4-color"></div>
        </div>
      </div>
    </div>
  );
}
