"use client";
import { ChevronRight } from "lucide-react";
import CustomButton from "../utils/custom-button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function Hero() {
  const router = useRouter();
  return (
    <div className="relative py-8 md:py-10 lg:py-20 flex items-center justify-center lg:text-center">
      <div className="absolute bottom-0 right-0 max-lg:hidden">
        <Image
          src="/hero-blur.png"
          width={590}
          height={590}
          draggable={false}
          alt="blur"
          className="relative top-52 w-[590px] h-[590px]"
        />
      </div>
      <div className="w-[90%] max-w-5xl mx-auto">
        <h1 className="leading-9 lg:leading-[60px] lg:tracking-[-2.5px] font-bold lg:font-semibold text-[2rem] lg:text-5xl">
          Earn up to ₦500k+ per month as a Zent <br className="max-lg:hidden" />{" "}
          Ambassador
        </h1>

        <div className="mt-6">
          <p className="lg:text-xl">
            We&apos;re launching the Zent Ambassador Program, a unique
            opportunity for business leaders, community managers, and
            influencers to earn, grow their brand, and make impact.
          </p>
          <p className="mt-2 lg:mt-3 lg:text-xl">
            And guess what? We&apos;re kicking it off with an ambassador
            selection contest to recruit 50 passionate ambassadors
          </p>
        </div>

        <CustomButton
          bg="bg-black"
          text="Apply now"
          onClick={() => router.push(`/application`)}
          buttonStyles="mt-5 lg:mt-8 lg:mx-auto bg-black text-white py-2 px-3 
          border border-black rounded-xl"
          textStyles="text-lg md:text-xl text-white text-center"
          icon={<ChevronRight strokeWidth={1.5} size={18} color="#fff" />}
        />
      </div>
    </div>
  );
}
