"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
    const [scrollY, setScrollY] = useState(0);
    const t = useTranslations("footerComponent");
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="absolute -mt-[1000px] h-[145vh] lg:h-[175vh] xl:h-[145vh] w-full z-0">
            <footer className="sticky top-[400px] h-[60vh] w-full text-black dark:text-gray-100 flex items-center xl:px-36">
                <div className="h-[50vh] flex flex-col justify-end w-full">
                    <div className="flex items-end justify-between w-full">
                        <div className="flex items-end">
                            <Image
                                width={400}
                                height={700}
                                className="h-52 xl:h-96 w-[60%] md:w-[30%] ml-2 md:ml-0 rounded-[40px] "
                                src="/footer.jpg"
                                alt="Profile"
                            />
                            <div className="flex flex-col md:flex-row items-end">
                                <p className="text-[6vw] md:text-[5.74vw] leading-[1] w-[120%] font-Tropical ml-4 mb-0 dark:text-gray-100">
                                    {t("Maintxt")} <br /> {t("Subtxt")}
                                </p>
                                <a
                                    href="mailto:math.lp.dev@gmail.com?subject=Inquiry&body=Hello, I would like to discuss..."
                                    className="ml-8 px-9 py-3 h-[20%] xl:w-[300px] bg-black text-white rounded-lg hover:scale-105 transition duration-300 xl:mb-10 relative flex items-center"
                                >
                                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                    {t("buttonTxt")}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mt-4 px-4 ">
                        <p className="text-sm dark:text-gray-100">&copy; {currentYear} Mathéo Lopes</p>
                        <p className="text-sm">{t("copyrigth")}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
