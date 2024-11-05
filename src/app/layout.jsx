import React from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const Layout = async ({ children }) => {
  const locale = await getLocale();
  const messages = await getMessages(locale); // Assure-toi que tes messages sont bien chargés en fonction de la langue

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Layout;
