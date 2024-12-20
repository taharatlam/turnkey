import Image from "next/image";
import HomeBanner from "@/components/home/HomeBanner";
import HowItWorkSec from "@/components/home/HowItWorkSec";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HowItWorkSec />
    </div>
  );
}
