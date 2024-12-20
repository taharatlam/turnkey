import Image from "next/image";
import HomeBanner from "@/components/home/HomeBanner";
import HowItWorkSec from "@/components/home/HowItWorkSec";
import TeamSec from "@/components/home/TeamSec";
export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HowItWorkSec />
      <TeamSec />
    </div>
  );
}
