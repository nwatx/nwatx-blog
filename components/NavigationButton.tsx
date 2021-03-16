import React from "react";
import { useRouter } from "next/router";

export type ButtonProps = {
  to: string;
  label: string;
};

const NavigationButton = ({ to, label }: ButtonProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(to)}
      className={`bg-white ${
        router.asPath === to
          ? "shadow-inner cursor-default text-gray-300"
          : " text-gray-700 hover:shadow-inner cursor-pointer"
      } p-3 rounded-md text-sm`}
    >
      {label}
    </div>
  );
};

export default NavigationButton;
