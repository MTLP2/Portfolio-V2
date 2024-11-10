import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {useTranslations} from 'next-intl';

const PhotoSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations('PhotoComponent');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ rotate: scrollY });
    }
  }, [controls, inView, scrollY]);

  return (
    <div className="h-[140vh] overflow-hidden z-30 flex relative">
      <img
        src="https://images.unsplash.com/photo-1586804014930-34a0e533a9f6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <motion.div
        ref={ref}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] bg-white dark:bg-[#121212] p-8 rounded-lg shadow-lg flex flex-col items-center"
      >
        <p className="mt-4 text-center text-xl w-[80%] md:w-full xl:text-2xl font-Tropical font-semibold mb-10 dark:text-gray-100">
          {t('Maintxt')}
        </p>
        <div className="flex items-center justify-center">
          <motion.img
            src="/Fleur.png"
            alt="Placeholder"
            className="w-20 h-20"
            animate={{ rotate: scrollY * 0.2 }} // La rotation est contrôlée par scrollY
            transition={{ type: "tween" }} // Animation fluide
          />
        </div>
        <ul className="mt-8 text-center font-Tropical  dark:text-gray-100">
          <li>
            <a href="https://x.com/matholopes5" className="hover:underline">
              X:@MathLp
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matheo-lopes" className="hover:underline">
              Linkedin:Mathéo Lopes
            </a>
          </li>
          <li>
            <p href="#project3" className="hover:underline">
              math.lp.dev@gmail.com
            </p>
          </li>
        </ul>
      </motion.div>
      
    </div>
  );
};

export default PhotoSection;
