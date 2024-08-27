import React from "react";

export default function MobileApps() {
  return (
    <div className="snap-start min-h-screen antialiased flex flex-col items-center justify-center py-8 bg-gradient-to-b from-neutral-900 via-blue-900/50 to-blue-950">
      <div className="max-w-5xl flex flex-col items-center justify-center">
        <h1 className="text-center text-5xl text-4xl font-bold">
          Aplikacje Mobilne
        </h1>
        <h5 className="mb-2 mt-10 text-2xl text-center max-w-3xl mx-8 leading-9">
          Tworzymy aplikacje mobilne w oparciu o istniejące strony internetowe,
          co pozwala na szybkie wdrożenie i integrację z już funkcjonującymi
          systemami. Nasze aplikacje działają płynnie na różnych urządzeniach
          mobilnych, zapewniając użytkownikom najwyższą jakość.
        </h5>
        <div className="img-2 mx-auto mt-5 transform transition-transform duration-500 hover:scale-105">
          <div className="img-2-color"></div>
        </div>
      </div>
    </div>
  );
}
