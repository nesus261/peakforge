"use client";

import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let scrollArea = document.getElementsByClassName("overflow-y-scroll")[0];
    const handleScroll = () => {
      const scrollTop = scrollArea.scrollTop;
      if (scrollTop >= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollArea.addEventListener("scroll", handleScroll);
    return () => {
      scrollArea.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.getElementsByClassName("overflow-y-scroll")[0].scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-4 right-8 bg-cyan-800 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transform transition-transform duration-500 hover:scale-110"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FiArrowUp size={28} />
      </motion.button>
    </>
  );
}
