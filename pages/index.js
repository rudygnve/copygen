import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Header from "@/components/Header";
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FouthSection from "@/components/FouthSection";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Pricing />
      <FAQ />
      <FouthSection />
      <Footer />
      <Copyright />
    </main>
  );
}
