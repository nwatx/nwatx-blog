import React from "react";
import NextImage from "../NextImage";

export const Thumb = ({ selected, onClick, ...props }) => (
	<div
		className={`mx-1 embla__slide--thumb h-24 w-24 ${
			selected ? "is-selected" : ""
		}`}
	>
		<button
			onClick={onClick}
			className="embla__slide__inner embla__slide__inner--thumb"
			type="button"
		>
			<NextImage width={640} height={320} className="embla__slide__thumbnail" {...props} src={props.src} />
			{/* <NextImage
				className="embla__slide__thumbnail"
				width={512}
				height={512}
				{...props}
			></NextImage> */}
		</button>
	</div>
);
