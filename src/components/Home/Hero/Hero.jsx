"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from 'next-intl';

const Hero = () => {
  const { scrollY } = useScroll(); // Récupère la position de défilement
  const translateY = useTransform(scrollY, [0, 1000], [0, -300]); // Ajuste le facteur selon l'intensité souhaitée

  const t = useTranslations('HeroComponent');
  const text = t('mainText'); // Récupère le texte dynamique

  
  return (
    <div className="bg-[#ecebeb] dark:bg-[#121212] w-full h-screen flex justify-center relative overflow-hidden">
      <h1 className="clamped-tex text-[47px] xs:text-[52px] md:text-[100px] xl:text-[100px] 2xl:text-[180px] font-Tropical w-full md:w-[800px] xl:w-[900px]  2xl:w-[1640px] pt-44 leading-none font-light z-40 dark:text-gray-100">
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
      </h1>
      <motion.img
        className="absolute lg:w-[500px] xl:w-[1050px] lg:h-[400px] xl:h-[700px] right-0 bottom-36 md:bottom-0 z-10 rounded-l-[80px] scale-110"
        src="/profile.webp"
        alt=""
        initial={{ opacity: 0, y: 50, scale: 0.9 }} // Animation d'apparition initiale
        animate={{ opacity: 1, y: 0, scale: 1 }} // Animation d'apparition
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          y: translateY, // Utilise Framer Motion pour l'animation de défilement
        }}
      />
    </div>
  );
};

export default Hero;
