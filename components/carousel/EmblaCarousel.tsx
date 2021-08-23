import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import NextImage from "../NextImage";

const PARALLAX_FACTOR = 0.8;

const EmblaCarousel = ({ slides }) => {
	const [viewportRef, embla] = useEmblaCarousel({
		loop: false,
		// dragFree: true,
	});
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [parallaxValues, setParallaxValues] = useState([]);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	const onScroll = useCallback(() => {
		if (!embla) return;

		const engine = embla.dangerouslyGetEngine();
		const scrollProgress = embla.scrollProgress();

		const styles = embla.scrollSnapList().map((scrollSnap, index) => {
			if (!embla.slidesInView().includes(index)) return 0;
			let diffToTarget = scrollSnap - scrollProgress;

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem) => {
					const target = loopItem.getTarget();
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target);
						if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
						if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
					}
				});
			}
			return diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
		});

		setParallaxValues(styles);
	}, [embla, setParallaxValues]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		onScroll();
		embla.on("select", onSelect);
		embla.on("scroll", onScroll);
		embla.on("resize", onScroll);
	}, [embla, onSelect, onScroll]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={viewportRef}>
				<div className="embla__container p-5">
					{slides.map(({ ...props }, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__inner" style={{ height: "36rem" }}>
								<div
									className="embla__slide__parallax"
									style={{ transform: `translateX(${parallaxValues[index]}%)` }}
								>
									{/* <img
										className="embla__slide__img"
										{...props}
										src={`https://res.cloudinary.com/dcg5b3jpt/image/upload/${props.src}`}
										alt="A cool cat."
									/> */}
									<NextImage
										className="embla__slide__img"
										width={1920}
										height={1080}
										{...props}
									></NextImage>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* <button onClick={scrollPrev}>a</button>
			<button onClick={scrollNext}>b</button> */}
		</div>
	);
};

export default EmblaCarousel;
