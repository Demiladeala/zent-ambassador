/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import CustomButton from "../utils/custom-button";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CarouselStep {
  id: number;
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  description4?: string;
  details: string[];
  borderColor?: string;
  bgColor?: string;
  boldDescription?: boolean;
  boldDescription2?: boolean;
  boldDescription3?: boolean;
  boldDescription4?: boolean;
}

const steps: CarouselStep[] = [
  {
    id: 1,
    title: "Recruitment",
    description: "Click on the apply button to fill the application form",
    description2: "Provide details like: ",
    details: [
      "Full name & contact details",
      "Community size (followers/ members)",
      "Mission & target audience",
      "Social media platforms",
      "Past collabs & engagement proof",
    ],
    borderColor: "border-[#8638E533]",
    bgColor: "bg-[#F8F2FF80]",
  },
  {
    id: 2,
    title: "Contest execution",
    description: "If approved, you'll receive: ",
    description2:
      "A Zent Media Kit (logo, hashtags, sample captions, brand rules).",
    description3: "Your task: ",
    details: [
      "Create & post a 45-90s video explaining Zent's benefits to MSMEs",
      "Post on your major platform(s)",
      "Tag #ZentAmbassador and use provided hashtags",
      "Keep post public till contest ends",
      "Follow Zent on all social media platforms",
    ],
    borderColor: "border-[#FFA50033]",
    bgColor: "bg-[#FFF9EE]",
    boldDescription2: true,
  },
  {
    id: 3,
    title: "Winner selection",
    description: "Judging will be based on: ",
    description4:
      "We'll collect data, score transparently, and announce winners.",
    details: [
      "Creativity and originality of the video.",
      "Engagement (5 vendors onboard, No of onboarded businesses that subscribe through you)",
      "Alignment with Zent's values and messaging.",
      "The winner will be announced on February 28, 2026.",
    ],
    borderColor: "border-[#009BDF33]",
    bgColor: "bg-[#F0FBFF80]",
  },
];

export function Contest() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoplay(false);
  };

  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  // Calculate positions for anti-clockwise circular layout
  const getStepPosition = (index: number) => {
    const totalSteps = steps.length;
    const baseOffset = activeStep;
    const adjustedIndex = (index - baseOffset + totalSteps) % totalSteps;

    const angles = {
      0: -40, // top center (active)
      1: 180, // bottom left (anti-clockwise)
      2: 50, // bottom right (anti-clockwise)
    };

    const angle =
      (angles[adjustedIndex as keyof typeof angles] || 0) * (Math.PI / 180);
    const radius = 150;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return { x, y, isActive: adjustedIndex === 0 };
  };

  return (
    <div className="w-full relative px-4 py-12 md:py-16 lg:py-20">
      <div className="absolute z-1 top-0 left-0 max-lg:hidden">
        <Image
          src="/prize-blur.png"
          width={590}
          height={590}
          alt="blur"
          className="relative -top-10 md:-top-12 lg:-top-48 w-[590px] h-[590px]"
        />
      </div>
      <div className="max-w-[3500px] mx-auto">
        {/* Title Section */}
        <div className="w-[93%] mx-auto mb-12 lg:flex lg:items-start lg:justify-between ">
          <div className="">
            <h2 className="font-bold lg:tracking-[-2.5px] text-3xl lg:text-5xl mb-3">
              The Ambassadorship contest
            </h2>
            <p className="lg:w-[60%] text-base md:text-lg text-[#484647] mb-2 lg:mb-0">
              We're calling out community managers, influencers & MSME advocates
              to showcase their community power!
            </p>
            <p className="lg:w-[60%] text-base md:text-lg text-[#484647] ">
              Win ₦1,000,000 + Become a Zent Ambassador
            </p>
          </div>
          <div>
            <CustomButton
              bg="bg-transparent"
              text="Apply now"
              onClick={() => router.push(`/application`)}
              buttonStyles="mt-5 lg:mt-0 lg:mx-auto bg-transparent text-black py-2 px-3 
          border border-black rounded-xl"
              textStyles="text-lg text-black text-center"
              icon={<ChevronRight strokeWidth={1.5} size={18} color="#000" />}
            />
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="lg:pt-7 max-lg:w-[93%] mx-auto lg:ml-20 relative hidden lg:flex">
          {/* <div className="w-80 h-80 border-4 bg-transparent max-lg:hidden" /> */}
          <button
            type="button"
            className="relative w-[550px] 2xl:w-full h-auto flex items-center justify-center mb-12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Circular background guide */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 border border-dashed border-spacing-5 border-gray-200 rounded-full"></div>
            </div>

            {/* Step indicators */}
            {steps.map((step, index) => {
              const { x, y, isActive } = getStepPosition(index);
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className="z-5 absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform: `translate(calc(-25% + ${x}px), calc(-20% + ${y}px))`,
                  }}
                >
                  <div
                    style={
                      isActive
                        ? {
                            boxShadow: "0px 0px 34px 2px #3E24F629",
                            backdropFilter: "blur(6px)",
                          }
                        : {}
                    }
                    className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-black text-white border-4 border-white shadow-lg scale-110"
                        : "bg-white text-gray-600 hover:bg-gray-50 shadow-lg"
                    }`}
                  >
                    Step {step.id}
                  </div>
                </div>
              );
            })}
          </button>

          {/* Content Card */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeStep * 75}%)` }}
            >
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`rounded-2xl p-8 cursor-pointer transition-all duration-300
                    ${step.id === 3 ? "min-w-[95%]" : "min-w-[75%]"}
        ${step.bgColor} border ${step.borderColor}`}
                  onClick={() => handleStepClick(index)}
                >
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p
                    style={{ fontWeight: step.boldDescription ? 600 : 400 }}
                    className="text-black mb-2"
                  >
                    {step.description}
                  </p>
                  <p
                    style={{ fontWeight: step.boldDescription2 ? 600 : 400 }}
                    className="text-black mb-2"
                  >
                    {step.description2}
                  </p>
                  <p
                    style={{ fontWeight: step.boldDescription3 ? 600 : 400 }}
                    className="text-black mb-2"
                  >
                    {step.description3}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-1 h-1 bg-gray-800 rounded-full mt-3 mr-2 shrink-0"></span>
                        <span className="font-semibold text-black text-lg">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p
                    style={{ fontWeight: step.boldDescription4 ? 600 : 400 }}
                    className="text-black mt-2 mb-2"
                  >
                    {step.description4}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stacked View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${step.bgColor} border ${step.borderColor} rounded-md p-3 md:p-6`}
            >
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p
                style={{ fontWeight: step.boldDescription ? 600 : 400 }}
                className="text-black mb-2"
              >
                {step.description}
              </p>
              <p
                style={{ fontWeight: step.boldDescription2 ? 600 : 400 }}
                className="text-black mb-2"
              >
                {step.description2}
              </p>
              <p
                style={{ fontWeight: step.boldDescription3 ? 600 : 400 }}
                className="text-black mb-2"
              >
                {step.description3}
              </p>
              <ul className="space-y-1">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="inline-block w-1 h-1 bg-gray-800 rounded-full mt-2 mr-2 shrink-0"></span>
                    <span className=" font-semibold text-black">{detail}</span>
                  </li>
                ))}
              </ul>
              <p
                style={{ fontWeight: step.boldDescription4 ? 600 : 400 }}
                className="text-sm text-black mt-2 mb-2"
              >
                {step.description4}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
