import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export type ButtonProps = {
  to: string;
  label?: string;
  src?: string;
};

const NavigationButton = ({ to, label, src }: ButtonProps) => {
  const router = useRouter();

  console.log(src);

  return (
    <Link href={to}>
      <div
        className={`bg-white ${
          router.asPath === to
            ? "shadow-inner cursor-default text-gray-300"
            : " text-gray-700 hover:shadow-inner cursor-pointer"
        } ${src ? 'p-1' : 'p-3'} rounded-md text-sm`}
      >
        {label ? label : <Image src={src} width={24} height={24} />}
      </div>
    </Link>
  );
};

export default NavigationButton;
