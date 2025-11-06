import BusinessToolKit from "./business-toolkit";
import { Contest } from "./contest";
import { Hero } from "./hero";
import { Prizes } from "./prizes";
import { WhyBecomeAmbassador } from "./why-become-ambassador";

export function Homecontainer() {
  return (
    <div className="max-w-[3500px] mx-auto overflow-x-hidden">
      <Hero />
      <WhyBecomeAmbassador />
      <Contest />
      <Prizes />
      <BusinessToolKit />
    </div>
  );
}
