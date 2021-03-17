import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export type ButtonProps = {
  to: string;
  label: string;
};

const NavigationButton = ({ to, label }: ButtonProps) => {
  const router = useRouter();

  return (
    <Link href={to}>
    <div
      className={`bg-white ${
        router.asPath === to
          ? "shadow-inner cursor-default text-gray-300"
          : " text-gray-700 hover:shadow-inner cursor-pointer"
      } p-3 rounded-md text-sm`}
    >
      {label}
    </div>
    </Link>
  );
};

export default NavigationButton;
