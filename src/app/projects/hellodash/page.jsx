"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SmoothScrool from "@/utils/SmoothScrool";

export default function Page() {
  const text = "Hellodash";
  const lines = [
    "Mise en place d'un dashboard complet pour nos clients, un véritable CMS pensé pour la ",
    "flexibilité et l’autonomie. Grâce à ce dashboard, ils peuvent créer des pages en illimité, ",
    "personnaliser chaque aspect de leur site, et gérer facilement leurs contenus. Avec un  ",
    "générateur de blog intégré, plus de 50 articles ont déjà été publiés par nos clients,   ",
    "et un système de notifications les aide à rester informés en temps réel."
  ];

  // Définition des URLs des images
  const imageUrls = [
    "/hellodash/Hellodash1.png",
    "/hellodash/Hellodash2.png",
    "/hellodash/Hellodash3.png",
    "/hellodash/Hellodash4.png",
  ];

  // Référence et détection de la visibilité de la vidéo
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: false, amount: 0.5 });

  // Lecture ou pause de la vidéo en fonction de sa visibilité
  React.useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div className="bg-[#ecebeb]">
      <SmoothScrool>
        <div className=" pt-44 md:pt-32 py-24 font-Tropical flex flex-col ml-5 lg:ml-20 relative z-10">
          {/* Animation par caractère pour "Thomas Lossie" */}
          <div className="text-5xl md:text-8xl overflow-hidden">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className={`inline-block ${char === " " ? "w-10" : ""}`}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Animation par ligne avec masque */}
          <div className="mt-10 text-4xl">
            {lines.map((line, index) => (
              <div
                key={index}
                className="overflow-hidden text-2xl w-full lg:text-lg xl:text-2xl 2xl:text-5xl mb-4"
              >
                <motion.div
                  initial={{ y: 150 }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: index * 0.02,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="flex"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[100vh] bg-center z-0">
          <Image
            src="/Hellodash.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Intégration de la vidéo avec contrôle de visibilité */}
        <div className="relative h-[50vh] md:h-[110vh] z-10">
          <video
            ref={videoRef}
            src="/hellodash/hellodash.mov" // Changez le fichier à un format compatible, comme .mp4
            width="100%"
            height="100%"
            loop
            muted
            className="w-full object-contain absolute bg-gradient-to-b from-sky-950  md:h-full top-0 left-0"
          ></video>
        </div>
      </SmoothScrool>
      <div className="flex flex-wrap flex-col md:flex-row pb-10 pt-24 w-full bg-[#ecebeb] relative z-20 justify-center gap-24">
        {imageUrls.map((url, i) => (
          <div key={i} className="w-full md:w-[40%] h-[50vh] relative">
            <Image
              src={url}
              alt={`Image ${i + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
