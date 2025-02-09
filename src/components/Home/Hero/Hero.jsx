"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  const { scrollY } = useScroll(); // Récupère la position de défilement
  const translateY = useTransform(scrollY, [0, 1000], [0, -300]); // Ajuste le facteur selon l'intensité souhaitée

  const t = useTranslations("HeroComponent");
  const text = t("mainText"); // Récupère le texte dynamique
  const subtext = t("subText"); // Récupère le texte dynamique
  const text2 = t("text2"); // Récupère le texte dynamique

  return (
    <div className="bg-[#ecebeb] dark:bg-[#121212] w-full h-screen justify-center relative overflow-hidden">
      <section className="flex flex-col gap-12  justify-center h-full  mx-2 lg:mx-44  xl:mx-80">
        <motion.p
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            duration: 0.8,
          }}
          className="text-xl font-sans font-extralight text-red-500"
        >
          {t("introText")}
        </motion.p>{" "}
        <h1 className=" text-3xl md:text-6xl font-Tropical  w-full  font-bold dark:text-gray-100">
          <div>
            {Array.from(text).map((char, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.5,
                  }}
                >
                  {char === " " ? "\u00A0" : char} {/* Gérer les espaces */}
                </motion.span>
              </span>
            ))}
          </div>
          <div>
            {Array.from(subtext).map((char, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.5,
                  }}
                >
                  {char === " " ? "\u00A0" : char} {/* Gérer les espaces */}
                </motion.span>
              </span>
            ))}
          </div>
          <div>
            {Array.from(text2).map((char, index) => (
              <span key={index} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.5,
                  }}
                >
                  {char === " " ? "\u00A0" : char} {/* Gérer les espaces */}
                </motion.span>
              </span>
            ))}
          </div>
        </h1>
        <motion.p
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 30,
            duration: 0.8,
          }}
          className="text-xl dark:text-gray-100 font-sans font-extralight "
        >
          {t("PresText")}
        </motion.p>
        <motion.a
          href="https://calendly.com/math-lp-dev/30min?back=1&month=2025-02"
          target="_blank"
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 30,
            duration: 0.8,
          }}
          className=" p-3 w-[150px] border-2  border-solid rounded-lg text-red-500  hover:bg-red-100 transition-colors font-Tropical text-xl border-red-500 justify-center flex"
        >
          Contact
        </motion.a>
      </section>
    </div>
  );
};

export default Hero;
