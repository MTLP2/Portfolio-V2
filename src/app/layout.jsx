import React from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { metadata as createMetadata } from './metada'; // Adjust path to your metadata file
import { cookies } from 'next/headers'; // Import cookies API
import { Analytics } from '@vercel/analytics/react'; // Import Vercel Analytics

export async function generateMetadata({ params }) {
  const locale = cookies().get('NEXT_LOCALE')?.value || 'fr'; // Get locale from cookies or default to 'fr'
  const currentMetadata = createMetadata(locale); // Generate metadata based on locale
  
  return {
    title: currentMetadata.title.default,
    description: currentMetadata.description,
    openGraph: {
      title: currentMetadata.openGraph.title,
      description: currentMetadata.openGraph.description,
      images: currentMetadata.openGraph.images,
      locale: currentMetadata.openGraphLocale,
    },
    twitter: {
      card: currentMetadata.twitter.card,
      title: currentMetadata.twitter.title,
      description: currentMetadata.twitter.description,
      images: currentMetadata.twitter.images[0].url,
    },
    additionalMetaTags: currentMetadata.additionalMetaTags.map((tag) => ({
      name: tag.name,
      content: tag.content,
    })),
  };
}

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
          <Analytics /> {/* Add Vercel Analytics component */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default Layout;
