import { Bag } from "./svgs/bag";
import { Megaphone } from "./svgs/megaphone";
import { Payment } from "./svgs/payment";
import { Trend } from "./svgs/trend";

export function WhyBecomeAmbassador() {
  const benefits = [
    {
      icon: Payment,
      title:
        "Earn up to ₦500,000+ monthly through commissions, bonuses & brand campaigns.",
      description: "",
      bgColor: "bg-[#D4FFFF99]",
      borderColor: "border-[#A2FFFF]",
      iconColor: "text-[#0DA9A9]",
      iconBgColor: "bg-[#BFFEFE]",
      iconBorderColor: "",
    },
    {
      icon: Megaphone,
      title:
        "Be part of the movement transforming how MSMEs in your community sell online.",
      description: "",
      bgColor: "bg-[#FAF8FF]",
      borderColor: "border-[#D6CDFF]",
      iconColor: "text-[#9333EA]",
      iconBgColor: "bg-[#E5DFFF]",
    },
    {
      icon: Bag,
      title:
        "Get access to exclusive brand perks (media kit, free tools, training, Insider access).",
      description: "",
      bgColor: "bg-[#FFFAF3B2]",
      borderColor: "border-[#FEEED6]",
      iconColor: "text-[#CA8A04]",
      iconBgColor: "bg-[#FEEACC]",
    },
    {
      icon: Trend,
      title:
        "Grow your personal brand while helping businesses thrive with Zent.",
      description: "",
      bgColor: "bg-[#FEECEE]",
      borderColor: "border-[#FFD3DA]",
      iconColor: "text-[#EC407A]",
      iconBgColor: "bg-[#FFD3DA]",
    },
  ];

  return (
    <div className="relative z-1 bg-white pt-5 lg:rounded-[48px] md:py-16">
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold lg:tracking-[-2.5px] text-3xl lg:text-5xl">
          Why become a Zent <br className="max-lg:hidden" />
          Ambassador?
        </h1>

        <div className="mt-6 lg:hidden max-w-[70%]">
          <p className="lg:text-xl text-[#484647]">
            Customers automatically receive notifications at every stage of
            their order journey,from confirmation to delivery. No more endless
            status update messages.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`${benefit.bgColor} border ${benefit.borderColor} rounded-lg p-4 lg:p-8 transition-transform duration-1000 hover:shadow-md`}
              >
                {/* Icon */}
                <div
                  className={`w-fit p-2 mb-4 ${benefit.iconBgColor}  ${benefit.iconBorderColor} rounded-full`}
                >
                  <IconComponent
                    className={`${benefit.iconColor} w-6 h-6 lg:w-8 lg:h-8`}
                  />
                </div>

                {/* Text Content */}
                <div>
                  <p className="text-gray-900 font-semibold text-base lg:text-xl leading-snug">
                    {benefit.title}
                  </p>
                  <p className="text-gray-700 text-sm lg:text-base mt-2 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
