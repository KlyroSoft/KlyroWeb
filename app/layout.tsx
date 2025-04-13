import './globals.css';
import Navbar from './partials/Navbar';
import Footer from './partials/Footer';
import Head from "next/head";

import MobileNavClient from './handling/MobileNavClient';

export const metadata = {
  title: 'KylroSoft',
  description: 'Mendorong Batas Kreativitas',
  icons: {
    icons: {
      icon: "/logo.png",
    },
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <Head>
  <link rel="icon" href="/logo.png" />
</Head>
      <body>
        <Navbar />
        <MobileNavClient />
        {children}
        <Footer />
      </body>
    </html>
  );
}
