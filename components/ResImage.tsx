import Image from "next/image";
import { config } from "node:process";

const ImageLoader = ({src}) => {
  return `https://res.cloudinary.com/dcg5b3jpt/image/upload/v1615871692/blog/${src}`;
};

export default function ResImage({ src }) {
  console.log("src", src);
  return (
    <div className="relative w-auto max-h-full">
      <div className="rounded-md">
        <Image
          className="rounded-lg"
          loader={ImageLoader}
          objectFit="contain"
          layout="responsive"
          width="100%"
          height="100%"
          src={src}
        />
      </div>
    </div>
  );
}
