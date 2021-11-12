import Head from "next/head";
import Intro from "@/components/Intro";
import Navigation from "@/components/Navigation";
import Main from "@/components/Main";
import GoToTop from "@/components/GoToTop";
import WindowLock from "@/components/WindowLock";
import {MenuContextProvider} from "context/mobileMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Front-end Engineer / React / VueJS | Melbourne | Tim Mansell
        </title>
        <meta
          name="description"
          content="Tim Mansell is a Front-end Engineer based in Melbourne, Australia, who specialises in HTML5, CSS3, SCSS, JS (ES6+), React, VueJS, NodeJS, NPM/Yarn, and Webpack."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuContextProvider>
        <Intro />
        <Navigation />
        <Main />
        <GoToTop />
        <WindowLock />
      </MenuContextProvider>
    </>
  );
}
