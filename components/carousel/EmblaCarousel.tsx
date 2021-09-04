import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import NextImage from "../NextImage";
import { Thumb } from "./EmblaThumb";
import { getStaticProps } from "../../pages/post/[slug]";
import { Popover } from "@headlessui/react";
import ReactToolTip from "react-tooltip";

const PARALLAX_FACTOR = 0.8;

const EmblaCarousel = ({ slides }) => {
	const [viewportRef, embla] = useEmblaCarousel({
		loop: false,
		// dragFree: true,
	});
	const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
		// containScroll: "keepSnaps",
		selectedClass: "",
		dragFree: true,
	});
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);

	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [parallaxValues, setParallaxValues] = useState([]);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

	// const onSelect = useCallback(() => {
	// 	if (!embla) return;
	// 	setPrevBtnEnabled(embla.canScrollPrev());
	// 	setNextBtnEnabled(embla.canScrollNext());
	// }, [embla]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onThumbClick = useCallback(
		(index) => {
			if (!embla || !emblaThumbs) return;
			if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
		},
		[embla, emblaThumbs]
	);

	const onSelect = useCallback(() => {
		if (!embla || !emblaThumbs) return;
		setSelectedIndex(embla.selectedScrollSnap());
		emblaThumbs.scrollTo(embla.selectedScrollSnap());
	}, [embla, emblaThumbs, setSelectedIndex]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		embla.on("select", onSelect);
	}, [embla, onSelect]);

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
		<div className="embla py-5 rounded-lg">
			{/* <div className="flex flex-row w-full">
				<div className='text-gray-400 rounded-full w-8 h-8 pt-1 text-center cursor-default dark:bg-gray-900' data-tip data-for="howToUse">
					?
				</div>
				<ReactToolTip id="howToUse">
					<p>Drag to scroll, or click the thumbnails at the bottom!</p>
				</ReactToolTip>
			</div> */}
			<div className='w-full border my-2 dark:border-gray-600'/>
			<div className="embla__viewport" ref={viewportRef}>
				<div className="embla__container pt-5">
					{slides.map(({ ...props }, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__inner rounded-lg shadow-lg">
								<div
									className=""
									style={{ transform: `translateX(${parallaxValues[index]}%)` }}
								>
									{/* <img
										className="embla__slide__img"
										{...props}
										src={`https://res.cloudinary.com/dcg5b3jpt/image/upload/${props.src}`}
										alt="A cool cat."
									/> */}
									<NextImage
										className="embla__slide__img rounded-md"
										width={1920}
										height={1080}
										src={props.src}
									></NextImage>
								</div>
							</div>
							<p className='m-6'>{props.caption}</p>
						</div>
					))}
				</div>
			</div>
			<div className='w-full border my-6 dark:border-gray-600'/>
			<div className="embla w-full h-24">
				<div ref={thumbViewportRef}>
					<div className="embla__container--thumb flex flex-row justify-center">
						{slides.map(({ ...props }, index) => (
							<Thumb
								className="w-24 bg-gray-50 dark:bg-gray-700 rounded-md shadow-md"
								onClick={() => onThumbClick(index)}
								selected={index === selectedIndex}
								{...props}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
			{/* <button onClick={scrollPrev}>a</button>
			<button onClick={scrollNext}>b</button> */}
		</div>
	);
};

export default EmblaCarousel;
