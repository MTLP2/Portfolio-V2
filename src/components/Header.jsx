"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const [time, setTime] = useState("");
  const [showColon, setShowColon] = useState(true);
  const [language, setLanguage] = useState("fr"); // État pour la langue actuelle
  const [darkMode, setDarkMode] = useState(false); // État pour le mode sombre
  const t = useTranslations('HeaderComponent');

  useEffect(() => {
    // Initialiser la langue depuis le cookie `NEXT_LOCALE`
    const getInitialLanguage = () => {
      const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
      return match ? match[1] : "fr"; // Retourne 'fr' par défaut si le cookie n'existe pas
    };
    setLanguage(getInitialLanguage());

    // Initialiser le thème depuis le stockage local
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
      setShowColon(!showColon);
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [showColon]);

  // Fonction pour changer la langue et mettre à jour le cookie
  const changeLanguage = (newLang) => {
    document.cookie = `NEXT_LOCALE=${newLang}; path=/;`;
    setLanguage(newLang);
    window.location.reload();
  };

  // Fonction pour basculer entre le mode clair et sombre
  const toggleDarkMode = (mode) => {
    const isDark = mode === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <header className="py-4 fixed w-full top-0 z-50 flex justify-between gap-5 items-start text-sm px-4 lg:px-44 backdrop-filter bg-opacity-60 mix-blend-difference ">
      {/* Left Section: Name and Title */}
      <Link href={'/'} className="flex flex-col text-white dark:text-gray-200">
        <span className="font-semibold font-Tropical text-xl md:text-2xl">
          Mathéo Lopes:
        </span>
        <span className="font-bold md:text-lg"> {t("workprofile")}</span>
      </Link>

      {/* Middle Section: Location */}
      <div className="flex flex-col text-white dark:text-gray-200">
        <span className="font-semibold font-Tropical text-xl md:text-2xl">
        {t("location")}:
        </span>
        <span className="font-bold md:text-lg">
          Paris, France (
          <span>
            {time.split(":")[0]}
            <span style={{ color: showColon ? "white" : "gray" }}>:</span>
            {time.split(":")[1]}
          </span>
          )
        </span>
      </div>

      {/* Theme Section */}
      <div className="flex flex-col text-white dark:text-gray-200">
        <span className="font-semibold font-Tropical text-xl md:text-2xl">
          Theme:
        </span>
        <span className="font-bold">
          <button
            onClick={() => toggleDarkMode("light")}
            className={`hover:underline md:text-lg ${
              !darkMode ? "underline" : ""
            }`}
          >
            Light Mode
          </button>
          {" / "}
          <button
            onClick={() => toggleDarkMode("dark")}
            className={`hover:underline md:text-lg ${
              darkMode ? "underline" : ""
            }`}
          >
            Dark Mode
          </button>
        </span>
      </div>

      {/* Language Section */}
      <div className="flex flex-col text-white dark:text-gray-200">
        <span className="font-semibold font-Tropical text-xl md:text-2xl">
        {t("Language")}:
        </span>
        <span className="font-bold">
          <button
            onClick={() => changeLanguage("fr")}
            className={`hover:underline md:text-lg ${
              language === "fr" ? "underline" : ""
            }`}
          >
            FR
          </button>
          {" / "}
          <button
            onClick={() => changeLanguage("en")}
            className={`hover:underline md:text-lg ${
              language === "en" ? "underline" : ""
            }`}
          >
            EN
          </button>
        </span>
      </div>
    </header>
  );
};

export default Header;
