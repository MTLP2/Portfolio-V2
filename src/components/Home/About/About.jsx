import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Contrôle de l'animation du hr
  const hrControls = useAnimation();
  // Récupération de la traduction
  const t = useTranslations("AboutComponent");

  return (
    <section className="flex flex-col gap-5 justify-center mx-2 lg:mx-40 xl:mx-80">
      <div className="w-full flex gap-6 flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col gap-4 md:w-[45%] xl:w-[45%]">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-Tropical font-black dark:text-gray-100">Qui suis-je ? </h2>
            <hr className="border-black w-28 md:w-80 dark:border-gray-100" />
          </div>
          <p className="text-lg leading-6 font-sans font-extralight lg:w-[90%] text-[#2c0f0f]  dark:text-gray-100">
            {t("Line1")}
            <br />
            <br />
            {t("Line2")} <br />
            <br />
            {t("Line3")}<br />
            <br />
            {t("Line4")} <br />
            <br />
            {t("Line5")} <br />
            <br />
            <br />
            {t("Line6")}<br />
            <br />
            {t("Line7")}<br />
            <br />
            <br />
          </p>
        </div>
        <div className="relative flex md:w-[500px] xl:w-[400px] ">
          {/* hr animé avec Framer Motion */}
          <motion.hr
            initial={{ x: 100 }}
            animate={hrControls}
            className=" hidden md:block w-[350px] h-[480px] border-red-400 border-4 rounded-xl absolute top-7 lg:top-24 lg:right-12"
          />
          {/* image transformée en motion.img pour gérer le hover */}
          <motion.img
            src="/Photo.JPG"
            alt=""
            onHoverStart={() =>
              hrControls.start({ x: 68, y: -20, transition: { duration: 0.5 } })
            }
            onHoverEnd={() =>
              hrControls.start({ x: 98, y: 20, transition: { duration: 0.5 } })
            }
            className=" w-full md:w-[400px] lg:w-full xl:w-[500px]  md:grayscale hover:grayscale-0 rounded-xl shadow-xl hover:shadow-2xl transition-shadow h-[500px] z-20"
          />
        </div>
      </div>
      <div>
        <ul className="flex flex-wrap gap-4 w-[50%] mb-32">
          <li className="bg-gray-200 p-2 shadow-md rounded-md">HTML & (S)CSS</li>
          <li className="bg-gray-200 p-2 shadow-md rounded-md">TypeScript</li>
          <li className="bg-gray-200 p-2 shadow-md rounded-md">Vue.js</li>
          <li className="bg-gray-200 p-2 shadow-md rounded-md">React.js</li>
          <li className="bg-gray-200 p-2 shadow-md rounded-md">Next.js</li>
          <li className="bg-gray-200 p-2 shadow-md rounded-md">Node.js</li>
          <li className="bg-gray-200 p-2 shadow-md rounded-md">TailwindCSS</li>
          <li className="bg-gray-200 p-2 shadow-md rounded-md">Firebase</li>
          <li className="bg-gray-200 p-2 shadow-md rounded-md">Jest</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
