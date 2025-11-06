"use client";
import { AppleLogo, PlayStoreLogo } from "@/app/constants/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BusinessToolKit = () => {
  const router = useRouter();
  return (
    <div className="bg-black w-full py-10 md:py-12">
      <div className="md:flex md:items-center md:justify-center">
        <div
          className="w-[93%] mx-auto flex flex-col 
        md:flex-row md:items-center gap-6 md:gap-10"
        >
          <div className="w-full md:basis-1/2">
            <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-[-2.5px] text-[#E5E1E1]">
              Handle business on the go with Zent mobile app
            </h2>

            <p className="mt-3 text-[#E5E1E1] text-lg 2xl:text-xl">
              Your complete business toolkit in your pocket, take control of
              your business wherever you are.{" "}
              <span className="font-semibold">
                Download the Zent App Today!
              </span>
            </p>

            <div className="flex flex-row gap-x-4 mt-6">
              <button
                type="button"
                onClick={() =>
                  router.replace(
                    "https://apps.apple.com/us/app/zent/id6741019833"
                  )
                }
                className="bg-white text-black rounded-xl flex flex-row gap-x-2 justify-center items-center py-0.5 px-3"
              >
                <AppleLogo />
                <p className="flex flex-col text-start">
                  <span className="text-xs">Download on the</span>
                  <span className="sm:text-lg font-semibold">App Store</span>
                </p>
              </button>
              <button
                type="button"
                className="bg-white text-black rounded-xl flex flex-row gap-x-2 justify-center items-center py-0.5 px-3"
                onClick={() =>
                  router.replace(
                    "https://play.google.com/store/apps/details?id=pro.zent.zent_mobile_app"
                  )
                }
              >
                <PlayStoreLogo />
                <p className="text-start flex flex-col">
                  <span className="text-[0.6rem]">GET IT ON</span>
                  <span className="sm:text-lg font-semibold">Google Play</span>
                </p>
              </button>
            </div>
          </div>

          <div className="mt-6 w-full md:basis-1/2">
            <div>
              <Image
                width={596}
                height={480}
                src={`/zent-iphones.png`}
                alt="payment"
                priority
                className="w-full h-full max-w-[361px] max-h-[290px] 
                  md:max-w-[596px] md:max-h-[480px] object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessToolKit;
