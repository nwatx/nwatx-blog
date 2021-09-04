import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";

export default function NextImage({ blurred = true, ...props }) {
	// if the blurred prop is on, apply cloudinary image transformation to blur the image
	const blurredUrl =
		blurred &&
		buildUrl(props.src, {
			cloud: {
				cloudName: "dcg5b3jpt",
			},
			transformations: {
				effect: "blur:1000",
				quality: 1,
			},
		});

	if (blurred) console.log(blurredUrl);

	return (
		// @ts-ignore
		<Image
			placeholder={blurred ? "blur" : "empty"}
			blurDataURL={blurredUrl}
			layout="responsive"
			{...props}
		/>
	);
}
