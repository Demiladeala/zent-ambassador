"use client";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import CustomButton from "@/app/utils/custom-button";
import { Logo } from "@/app/constants/icons";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative w-full mx-auto z-1000">
      <div className="z-10 sticky top-0 bg-white left-0 w-full min-[4000px]:relative ">
        <div className="w-[93%] mx-auto py-3 flex items-center justify-between gap-5 lg:py-5">
          {/* LOGO */}
          <div className="flex items-center gap-10">
            <Link href="/">
              <Logo className="max-md:w-20" />
            </Link>
            <div className="max-lg:hidden flex flex-row space-x-5 text-base">
              <Link
                href="/pricing"
                className="transition-colors duration-300 lg:hover:text-primaryPurple"
              >
                Pricing
              </Link>
              <Link
                href="/faqs"
                className="transition-colors duration-300 lg:hover:text-primaryPurple"
              >
                FAQs
              </Link>
              <Link
                href="/zent-workshop"
                className="transition-colors duration-300 lg:hover:text-primaryPurple"
              >
                Zent Workshop
              </Link>
              <Link
                href={`https://partner.zentstores.com/`}
                target="_blank"
                className="transition-colors duration-300 text- lg:hover:text-primaryPurple"
              >
                Partner Portal
              </Link>
              {/* <Link
                href={`/ambassadorship`}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                className="transition-colors duration-300 lg:hover:text-primaryPurple"
              >
                Ambassadorship
              </Link> */}
            </div>
          </div>

          <div className="max-lg:hidden flex items-center gap-4">
            <CustomButton
              bg="bg-white"
              text="Login"
              onClick={() => router.push(`https://app.zentstores.com`)}
              buttonStyles="py-2 px-3 
                        border border-[#242424] rounded-xl"
              textStyles="text-sm text-black text-center"
            />

            <CustomButton
              bg="bg-primaryPurple"
              onClick={() => router.push(`https://app.zentstores.com/register`)}
              text="Get started"
              buttonStyles="bg-primaryPurple text-white py-2 px-3 
                        border border-primaryPurple rounded-xl"
              textStyles="text-sm text-white text-center"
            />
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden bg-[#F6F6F7] p-2 rounded-full"
          >
            {menuOpen ? (
              <X color="#000" size={19} />
            ) : (
              <AlignJustify color="#000" size={19} />
            )}
          </button>
        </div>

        <div className="line w-full h-px bg-black/10"></div>
      </div>

      <div
        className={`z-4 fixed top-0 left-0 w-full bg-white 
            lg:hidden transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-y-[3.6rem]" : "-translate-y-full"
            } shadow-lg rounded-bl-3xl rounded-br-3xl`}
      >
        <div className="flex flex-col items-center pt-8 pb-10 gap-4">
          <div className="flex flex-col space-y-5 mb-2 text-center text-base">
            <Link
              href="/pricing"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="transition-colors lg:hover:text-primaryPurple"
            >
              Pricing
            </Link>
            <Link
              href="/faqs"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="transition-colors lg:hover:text-primaryPurple"
            >
              FAQs
            </Link>
            <Link
              href="/zent-workshop"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="transition-colors lg:hover:text-primaryPurple"
            >
              Zent Workshop
            </Link>
            <Link
              href={`https://partner.zentstores.com/`}
              target="_blank"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="transition-colors duration-300 lg:hover:text-primaryPurple"
            >
              Partner Portal
            </Link>
            {/* <Link
              href={`/ambassadorship`}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="transition-colors duration-300 lg:hover:text-primaryPurple"
            >
              Ambassadorship
            </Link> */}
          </div>

          <CustomButton
            bg="bg-white"
            text="Login"
            onClick={() => {
              setMenuOpen(!menuOpen);
              router.push(`https://app.zentstores.com`);
            }}
            buttonStyles="py-2 px-3 
                    max-md:w-full max-md:max-w-[186px]
                    border border-[#242424] rounded-xl"
            textStyles="text-sm text-black text-center"
          />

          <CustomButton
            bg="bg-primaryPurple"
            text="Get started"
            onClick={() => {
              setMenuOpen(!menuOpen);
              router.push(`https://app.zentstores.com/register`);
            }}
            buttonStyles="bg-primaryPurple text-white py-2 px-3 
                    max-md:w-full max-md:max-w-[186px]
                    border border-primaryPurple rounded-xl"
            textStyles="text-sm text-white text-center"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
