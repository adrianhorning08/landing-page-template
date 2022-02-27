import type { NextPage } from "next";
import Head from "next/head";
import Cta from "../src/components/Cta";
import FeaturesBlocks from "../src/components/FeaturesBlocks";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HeroHome from "../src/components/HeroHome";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reseller Helper | Website in 1 click</title>
        <meta
          name="description"
          content="Create a website from your Instagram with 1 click"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <HeroHome />
        <FeaturesBlocks />
        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
