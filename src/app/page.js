import Image from "next/image";
import HomeBanner from "@/components/home/HomeBanner";
import HowItWorkSec from "@/components/home/HowItWorkSec";
import TeamSec from "@/components/home/TeamSec";
import SpaceSection from "@/components/home/SpaceSection";
import OurPortfolio from "@/components/home/OurPortfolio";
import TrustPilot from "@/components/home/TrustPilot";
import LeaveYourContact from "@/components/home/LeaveYourContact";
import FaqSec from "@/components/home/FaqSec";
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HowItWorkSec />
      <SpaceSection />
      <TeamSec />
      <OurPortfolio />
      <TrustPilot />
      <LeaveYourContact />
      <FaqSec />
    </div>
  );
}
