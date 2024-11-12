import React, { useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import SplitType from "split-type";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Link from "next/link";

const projects = [
  {
    image: "/TL/TLHome.png",
    title: "Thomas Lossie",
    subtitle: "Designer",
    link: "/projects/thomas-lossie",
  },
  {
    image: "/Sibane.png",
    title: "Sibane",
    subtitle: "Diagnostics",
    link: "/projects/sibane",
  },
  {
    image: "/Hellodash.png",
    title: "Hellodash",
    subtitle: "Dashboard",
    link: "/projects/hellodash",
  },
  {
    image: "/RCi.png",
    title: "RCi",
    subtitle: "Conseil et inspection",
    link: "/projects/rci",
  },
  {
    image: "/Memodiag.png",
    title: "Memodiag",
    subtitle: "Diagnostics",
    link: "/",
  },
  {
    image: "/Diaginnov.png",
    title: "Diaginnov",
    subtitle: "Diagnostics",
    link: "/projects/diaginnov",
  },
];


// Define animations for the overlay and image
const overlayMotion = {
  rest: { height: 0, opacity: 0 },
  hover: {
    height: "40%",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const imageMotion = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.4, ease: "easeInOut" } },
};

// Define the diagonal animations for the arrows
const arrowOutMotion = {
  rest: { x: 0, y: 0, opacity: 1 },
  hover: {
    x: 10,
    y: -10,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const arrowInMotion = {
  rest: { x: -10, y: 10, opacity: 0 },
  hover: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Define an array of background colors
const bgColors = [
  "bg-rose-600",
  "bg-emerald-500",
  "bg-indigo-950",
  "bg-indigo-400",
  "bg-blue-300",
  "bg-green-500",
];

// Define the animation for project entry
const projectInViewMotion = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Project = () => {
  const h2Ref = useRef(null);
  const t = useTranslations("ProjectComponent");
  const h3Ref = useRef(null);
  const pRef = useRef(null);
  const h2Controls = useAnimation();
  const h3Controls = useAnimation();
  const pControls = useAnimation();
  const h2InView = useInView(h2Ref, { once: true });
  const h3InView = useInView(h3Ref, { once: true });
  const pInView = useInView(pRef, { once: true });

  const [h3Lines, setH3Lines] = useState([t("subTitleProject")]);
  const [pLines, setPLines] = useState([]);

  useEffect(() => {
    if (h3InView) {
      const splitText = new SplitType(h3Ref.current, { types: "lines" });
      const lines = splitText.lines.map((line) => line.innerText);
      setH3Lines(lines);

      h3Controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
      }));

      return () => splitText.revert();
    }
  }, [h3InView, h3Controls]);

  useEffect(() => {
    if (h2InView) {
      const splitText = new SplitType(h2Ref.current, { types: "chars" });

      h2Controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.5 },
      }));

      return () => splitText.revert();
    }
  }, [h2InView, h2Controls]);

  useEffect(() => {
    if (pInView) {
      const splitText = new SplitType(pRef.current, { types: "lines" });

      const lines = [t("descProject1"), t("descProject2"), t("descProject3")];

      setPLines(lines);

      pControls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5 },
      }));

      return () => splitText.revert();
    }
  }, [pInView, pControls]);

  return (
    <div className="bg-white dark:bg-zinc-900  rounded-t-[60px] mx-4 md:mx-20 p-10 mt-40">
      <motion.h3
        ref={h3Ref}
        className="text-5xl font-Tropical dark:text-gray-100 font-extralight mb-11 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={h3Controls}
      >
        {h3Lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="block"
          >
            {line}
          </motion.div>
        ))}
      </motion.h3>
      <div className="mb-6 flex  flex-col md:flex-row justify-between md:items-end">
        <motion.h2
          ref={h2Ref}
          className="text-[3.4rem] md:text-[4.375rem] lg:text-[6.375rem] xl:text-[9.375rem] leading-[1.10] w-[72%] md:w-[58%] lg:w-[54%] xl:w-[50%] 2xl:w-full  font-Tropical font-semibold  dark:text-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={h2Controls}
          custom={(index) => index}
        >
          {t("MainTitleProject")
            .split("")
            .map((char, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden"
                style={{ display: "inline-block" }}
              >
                <motion.span
                  custom={index}
                  initial={{ y: "100%" }}
                  animate={h2Controls}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? (
                    <div className="  w-full xl:mr-[600px]  2xl:mr-[800px]">
                      {" "}
                    </div>
                  ) : (
                    char
                  )}{" "}
                  {/* Insertion de <br /> pour le retour à la ligne */}
                </motion.span>
              </span>
            ))}
        </motion.h2>
        <motion.p
          ref={pRef}
          className="text-gray-700 md:text-right lg:text-lg  w-full md:w-[50%] lg:w-[20%] overflow-hidden dark:text-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={pControls}
        >
          {pLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="block"
            >
              {line}
            </motion.div>
          ))}
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
      {projects.map((project, index) => (
    <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="rounded-[30px] shadow-md overflow-hidden relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={projectInViewMotion}
        whileHover="hover"
      >
        <motion.div className="relative z-10" variants={imageMotion}>
          <Image
            src={project.image}
            alt={`Project ${project.title}`}
            width={500}
            height={300}
            className="w-full object-cover h-[350px] rounded-[30px]"
          />
        </motion.div>
        <motion.div
          className={`absolute bottom-0 left-0 right-0 ${
            bgColors[index % bgColors.length]
          } z-20 flex items-center justify-between pl-6 font-Tropical font-bold opacity-0`}
          variants={overlayMotion}
        >
          <div>
            <p className="text-white text-2xl lg:text-md xl:text-2xl 2xl:text-3xl uppercase">
              {project.title}
            </p>
            <p className="text-white text-xl lg:text-lg xl:text-xl uppercase">
              {project.subtitle}
            </p>
          </div>
          <motion.button
            className="flex items-center text-white text-sm xl:text-md mr-4 border rounded-full p-1 xl:p-4 font-semibold overflow-hidden relative"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <span>{t('buttonProject')}</span>
            <div className="relative mr-4 xl:mr-2 w-6 h-6">
              <motion.span className="absolute" variants={arrowOutMotion}>
                <ArrowUpRightIcon className="w-6 h-6 text-white" />
              </motion.span>
              <motion.span className="absolute" variants={arrowInMotion}>
                <ArrowUpRightIcon className="w-6 h-6 text-white" />
              </motion.span>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </Link>
  ))}
      </div>
      <button className="bg-[#ecebeb] font-Tropical  text-[17px] font-semibold  text-black rounded-full px-6 py-3 mt-14">
        {t("buttonallproject")}
      </button>
    </div>
  );
};

export default Project;
