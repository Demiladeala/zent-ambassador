"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Props = {
  bg: string;
  text: string;
  buttonStyles: string;
  textStyles: string;
  icon?: React.ReactNode;
  reverseIcon?: boolean;
  onClick?: () => void;
};

const CustomButton = ({
  bg,
  buttonStyles,
  icon,
  text,
  onClick,
  textStyles,
  reverseIcon,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          if (onClick) {
            onClick();
          } else {
            setIsOpen(true);
          }
        }}
        className={`
    ${buttonStyles} ${reverseIcon ? "flex-row-reverse" : ""}
    outline-none ${bg} md:hover:bg-opacity-85 flex items-center justify-center gap-1 
    transition-colors cursor-pointer`}
      >
        <div className={`${textStyles}`}>{text}</div>
        <div>{icon}</div>
      </button>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogOverlay className="z-55 fixed inset-0 bg-black/15 backdrop-blur-md" />

        <AlertDialogContent className="z-56 top-40 rounded-2xl lg:rounded-2xl px-9 py-12 w-[90%] max-w-[480px] space-y-4">
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="w-full text-3xl flex items-center justify-center">
                🥳
              </div>
              <h2 className="text-center font-semibold text-2xl mt-4">
                We&apos;re Launching Soon!
              </h2>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-sm mt-3 text-black">
              Something exciting is on the way! Get ready—our launch is just
              around the corner.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex items-center justify-center">
            <AlertDialogCancel
              className="mt-0 mx-auto px-4 py-3 border-none bg-black text-white text-sm rounded-lg 
        hover:text-white hover:bg-black"
            >
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CustomButton;
