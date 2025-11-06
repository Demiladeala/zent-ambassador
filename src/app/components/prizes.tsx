/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomButton from "../utils/custom-button";

export function Prizes() {
  const router = useRouter();
  const prizes = [
    {
      place: "1st place",
      amount: "₦500,000",
      image: "/prize-1.png",
      medal: "gold",
    },
    {
      place: "2nd place",
      amount: "₦300,000",
      image: "/prize-2.png",
      medal: "silver",
    },
    {
      place: "3rd place",
      amount: "₦200,000",
      image: "/prize-3.png",
      medal: "bronze",
    },
  ];

  return (
    <>
      <div className="relative bg-[#EEEBFC] pt-8 md:pt-16">
        <div className="absolute z-1 top-0 left-0 ">
          <Image
            src="/prize-blur.png"
            width={590}
            height={590}
            alt="blur"
            className="relative -top-10 md:-top-12 lg:-top-20 w-[590px] h-[590px]"
          />
        </div>
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primaryPurple mb-12 md:mb-14 lg:mb-20">
            Contest Prizes
          </h2>

          {/* Prize Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="relative lg:z-2 bg-white border border-[#009BDF33] rounded-[40px] p-8 lg:py-14 hover:shadow-md transition-shadow"
              >
                <div className="w-full absolute flex items-center justify-center -top-10 left-0">
                  {/* Medal Badge */}
                  <Image
                    src={prize.image}
                    alt="medal"
                    width={91}
                    height={120}
                    className="w-16 md:w-20 lg:w-24 h-[120px] object-contain"
                  />
                </div>

                {/* Content */}
                <div className="text-center mt-16">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                    {prize.place}
                  </h3>
                  <p className="text-3xl md:text-4xl font-extrabold text-primaryPurple">
                    {prize.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Top 50 Participants Card */}
          <div className="mt-7 px-4 relative z-2">
            <div className="bg-white relative rounded-[40px] p-8 shadow-lg">
              <h3 className="text-center text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                Top 50 Participants
              </h3>
              <p className="text-center text-primaryPurple font-semibold text-lg lg:text-2xl">
                Officially become Zent Ambassadors, with earning potential of{" "}
                <br className="max-lg:hidden" />
                <span className="text-primaryPurple font-bold">₦500,000+ </span>
                monthly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Join CTA Section */}
      <div className="relative -mt-8 bg-linear-to-b from-[#4A62FF] to-[#1C1B1C] lg:to-black py-16 lg:py-20 lg:pb-40 px-4">
        <div className="w-full mt-5 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Join?
          </h2>
          <p className="text-gray-100 mb-2 max-w-2xl mx-auto">
            Apply now to become part of the first 50 Zent Ambassadors.
          </p>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Together, let's help Nigerian businesses grow faster, smarter, and
            stronger.
          </p>
          <CustomButton
            bg="bg-white"
            text="Apply now"
            onClick={() => router.push(`/application`)}
            buttonStyles="mt-5 lg:mt-8 mx-auto bg-white text-black py-2.5 px-4 
            font-semibold border border-black rounded-xl"
            textStyles="text-black text-center"
            icon={<ChevronRight strokeWidth={1.5} size={18} color="#000" />}
          />
        </div>
      </div>
    </>
  );
}
