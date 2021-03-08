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
      className={`bg-gray-50 font-semibold ${
        router.asPath === to
          ? "shadow-inner cursor-default text-gray-300"
          : "shadow-md text-gray-700 hover:shadow-lg cursor-pointer"
      } px-3 py-2 rounded-md text-sm font-medium`}
    >
      {label}
    </div>
  );
};

export default NavigationButton;
