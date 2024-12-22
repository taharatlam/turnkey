import Image from "next/image";
import HomeBanner from "@/components/home/HomeBanner";
import HowItWorkSec from "@/components/home/HowItWorkSec";
import TeamSec from "@/components/home/TeamSec";
import SpaceSection from "@/components/home/SpaceSection";
import OurPortfolio from "@/components/home/OurPortfolio";
import TrustPilot from "@/components/home/TrustPilot";
import LeaveYourContact from "@/components/home/LeaveYourContact";
import FaqSec from "@/components/home/FaqSec";
import Whychoose from "@/components/home/Whychoose";
import Quality from "@/components/home/Quality";
import Footer from "@/components/Footer";
import Refresh from "@/components/home/Refresh";
import Partners from "@/components/home/Partners";
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HowItWorkSec />
      <Quality />
      <SpaceSection />
      <OurPortfolio />
      <TeamSec />
      <Partners />
      <TrustPilot />
      <LeaveYourContact />
      <FaqSec />
      <Refresh />
      <Whychoose />
      <Footer />
    </div>
  );
}
