import { useRouter } from "next/router";
import React from "react";
import { ButtonProps } from "./NavigationButton";

export default function NavigationButtonMobile({ to, label }: ButtonProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(to)}
      className={`${
        router.asPath === to
          ? "shadow-inner text-gray-300 cursor-default"
          : "text-gray-700 cursor-pointer"
      } block px-3 py-2 rounded-md text-base font-medium`}
    >
      {label}
    </div>
  );
}
