import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import NextImage from "../NextImage";
import { Thumb } from "./EmblaThumb";
import { getStaticProps } from "../../pages/post/[slug]";

const PARALLAX_FACTOR = 0.8;

const EmblaCarousel = ({ slides }) => {
	const [viewportRef, embla] = useEmblaCarousel({
		loop: false,
		// dragFree: true,
	});
	const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true
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
		<div className="embla">
			<div className="embla__viewport" ref={viewportRef}>
				<div className="embla__container p-5">
					{slides.map(({ ...props }, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__inner rounded-lg h-48 sm:h-96 lg:h-110">
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
										src={props.src}
									></NextImage>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="embla embla--thumb w-full h-24">
        <div ref={thumbViewportRef}>
          <div className="embla__container--thumb flex flex-row justify-center">
            {slides.map(({...props}, index) => (
              <Thumb
							className='w-24 bg-gray-200  p-1 border-gray-500 rounded-md dark:border-gray-200'
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
