import React from "react";

export default function Scripts() {
  return (
    <div className="snap-start min-h-screen antialiased flex flex-col items-center justify-center py-8 bg-gradient-to-b from-fuchsia-950 via-zinc-800/50 via-90% to-neutral-900">
      <div className="max-w-5xl flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl text-4xl font-bold">
          Skrypty na zlecenie
        </h1>
        <h5 className="mb-2 mt-10 text-2xl text-center max-w-3xl mx-8 leading-9">
          Potrzebujesz skryptów, które zautomatyzują Twoje procesy biznesowe?
          Tworzymy skrypty dostosowane do Twoich potrzeb, które zwiększą
          efektywność Twojej firmy.
        </h5>
        <div className="flex justify-center video-wrapper mt-5 mb-4 transform transition-transform duration-500 hover:scale-105">
          <video className="mov-1" autoPlay muted playsInline loop>
            <source src="mov1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}
