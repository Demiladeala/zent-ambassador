import CustomButton from "@/app/utils/custom-button";
import Link from "next/link";
import {
  FacebookIcon,
  FooterLogo,
  InstagramIcon,
  LinkedinIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
  PinterestIcon,
} from "@/app/constants/icons";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="w-full mx-auto">
      <div className="bg-black text-white py-8 md:pt-12 lg:pt-14">
        <div className="w-[93%] mx-auto">
          <div
            className="w-full flex flex-col lg:flex-row justify-between 
                gap-7 md:gap-12 lg:gap-16"
          >
            <div className="shrink-0 min-[1200px]:pr-20">
              <FooterLogo className="w-6 md:w-9" />
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-2 text-sm text-[#E5E1E1]">
              <div>
                <h3 className="text-[#E5E1E1] font-bold mb-3 text-base">
                  Quick Links
                </h3>
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/pricing"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/faqs"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/zent-workshop"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    Zent Workshop
                  </Link>
                  <div className="flex items-center gap-1">
                    <Link
                      href={`https://partner.zentstores.com/`}
                      target="_blank"
                      className="transition-colors lg:hover:text-primaryPurple"
                    >
                      Partner Portal
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#E5E1E1] font-bold mb-3 text-base">
                  Legal
                </h3>
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/terms-of-use"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    General Terms of Use
                  </Link>
                  <Link
                    href="/merchant-terms-of-use"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    Merchant Terms Of Use
                  </Link>
                  <Link
                    href="/acceptable-use-policy"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    Acceptable Use Policy
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/aml-policy"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    AML/KYC Policy
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-[#E5E1E1] font-bold mb-3 text-base">
                  Company
                </h3>
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/support"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    Support
                  </Link>
                  <Link
                    href="/contact-us"
                    className="transition-colors lg:hover:text-primaryPurple"
                  >
                    Contact Us
                  </Link>
                  <div className="flex items-center gap-1">
                    <Link
                      href="/career"
                      className="transition-colors lg:hover:text-primaryPurple"
                    >
                      Career
                    </Link>
                    <CustomButton
                      bg="bg-[#004CBD]"
                      buttonStyles="text-[10px] text-white flex items-center justify-center 
                                    text-center px-1.5 py-[2px] rounded-md"
                      text="We are Hiring!"
                      textStyles="text-[9px] text-center"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#E5E1E1] font-bold mb-3 text-base">
                  Follow Us
                </h3>
                <div className="flex items-center flex-wrap gap-3 cursor-pointer">
                  <Link
                    target="_blank"
                    href={`https://www.facebook.com/people/Zent/61573541393095/`}
                  >
                    <FacebookIcon className="w-6 h-6" />
                  </Link>
                  <Link target="_blank" href={`https://x.com/myzentapp/`}>
                    <TwitterIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    target="_blank"
                    href={`https://www.instagram.com/myzentapp?igsh=MXdqbGc1bG42cnE0ZA==`}
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    target="_blank"
                    href={`https://www.tiktok.com/@myzentapp?_t=ZM-8vL3KGWl8P1&_r=1`}
                  >
                    <TiktokIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    target="_blank"
                    href={`https://www.linkedin.com/company/myzentapp`}
                  >
                    <LinkedinIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    target="_blank"
                    href={`https://www.youtube.com/@zentstores`}
                  >
                    <YoutubeIcon className="w-6 h-6" />
                  </Link>
                  <Link target="_blank" href={`https://pin.it/5Bm5CEX3j`}>
                    <PinterestIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* <div>
                            <h3 className='text-[#E5E1E1] font-bold mb-3'>Payment Method</h3>
                            <div className='flex items-center gap-4'>
                                <VisaIcon />
                                <MasterCardIcon />
                            </div>
                        </div> */}
            </div>
          </div>

          <div className="w-full h-px my-4 bg-[#7D7D7D80] lg:mt-9 lg:my-7" />

          <div
            className="w-[93%] mx-auto text-sm text-center 
                lg:flex items-center justify-center lg:w-full"
          >
            <div className="w-fit max-lg:mx-auto whitespace-nowrap">
              <p className="text-center text-[#7D7D7D]">
                © {date} Zent Technologies &nbsp; All Rights Reserved
              </p>
            </div>

            {/* <div className="w-[93%] mx-auto flex items-center justify-center gap-5 text-xs mt-5
                    lg:mt-0 lg:w-full lg:justify-end">
                        <p className='transition-colors lg:hover:text-primaryPurple cursor-pointer'>
                            Terms & Conditions</p>
                        <div className='bg-white w-1.5 h-1.5 rounded-full cursor-pointer'/>
                        <p className='transition-colors lg:hover:text-primaryPurple cursor-pointer'>
                            Privacy Policy</p>
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
