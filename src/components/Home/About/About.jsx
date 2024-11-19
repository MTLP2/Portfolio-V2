import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = () => {
  const t = useTranslations("AboutComponent");
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const cible = useRef(null);

  useEffect(() => {
    const animateContainer = (container) => {
      if (container.current && container.current.children.length >= 2) {
        const [text1, text2] = container.current.children;

        // Configure overflow hidden pour le conteneur
        gsap.set(container.current, { overflow: "hidden" });

        // Premier texte monte et se cache
        gsap.fromTo(
          text1,
          { y: "0%" },
          {
            y: "-150%",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cible.current,
              start: "top 80%",
              end: "bottom 70%",
              scrub: true,
              toggleActions: "play none reverse none",
            },
          }
        );

        // Deuxième texte monte pour devenir visible
        gsap.fromTo(
          text2,
          { y: "100%" },
          {
            y: "0%",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cible.current,
              start: "top 80%",
              end: "bottom 70%",
              scrub: true,
              toggleActions: "play none reverse none",
            },
          }
        );
      }
    };

    // Applique l'animation pour chaque conteneur
    [containerRef1, containerRef2, containerRef3].forEach(animateContainer);

    // Met à jour les animations lors du redimensionnement de la fenêtre
    const resizeHandler = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Nettoyage
    };
  }, []);

  return (
    <div className="flex items-center relative flex-col dark:bg-[#121212]  h-[300vh] pb-52">
      <div className="flex w-full flex-col items-center justify-center sticky  mt-[200px] gap-5  font-light font-Tropical top-[30%] p-5 ">
        {/* Premier container */}
        <div
          ref={containerRef1}
          className="overflow-hidden  w-full text-[20px] md:text-[25px] lg:text-[30px] xl:text-[3vw] 2xl:text-[2.74vw] h-[7vh] md:h-[10vh] xl:pt-8 relative flex justify-center items-center"
        >
          <div className="absolute font-bold w-full text-center  z-10 dark:text-gray-100  text-gray-800">
            {t("Line1")}
          </div>
          <div className="absolute font-bold z-0 dark:text-gray-100 pt-4 text-gray-800">
            {t("Line1_2")}
          </div>
        </div>

        {/* Deuxième container */}
        <div
          ref={containerRef2}
          className="overflow-hidden w-full md:h-[10vh] text-[18px] md:text-[25px] lg:text-[30px] xl:text-[3vw]  2xl:text-[2.74vw] h-[7vh] xl:pt-8  relative flex justify-center items-center"
        >
          <div className="absolute font-bold w-full text-center z-10 dark:text-gray-100  text-gray-800">
            {t("Line2")}
          </div>
          <div className="absolute font-bold z-0 dark:text-gray-100 pt-4 text-gray-800">
            {t("Line2_2")}
          </div>
        </div>

        {/* Troisième container */}
        <div
          ref={containerRef3}
          className="overflow-hidden w-full md:h-[10vh] text-[20px] md:text-[25px] lg:text-[30px] xl:text-[3vw] 2xl:text-[2.74vw] h-[7vh] xl:pt-8 relative flex justify-center items-center"
        >
          <div className="absolute font-bold  w-full text-center z-10 dark:text-gray-100  text-gray-800">
            {t("Line3")}
          </div>
          <div className="absolute font-bold z-0 dark:text-gray-100 pt-4  text-gray-800">
            {t("Line3_2")}
          </div>
        </div>
      </div>

      <div ref={cible} className="bg-red-50 absolute bottom-[50%]"></div>
    </div>
  );
};

export default AnimatedText;
