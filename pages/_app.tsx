import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  preload: true,
  subsets: ["latin-ext"],
  variable: "--font-nunito",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={`${nunito.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
