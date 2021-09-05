import React from "react";
import NextImage from "../components/NextImage";
import NavBarLayout from "../layouts/NavBarLayout";
import { useEmblaCarousel } from "embla-carousel/react";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import Collapsible from "../components/Collapsible";
import Link from "next/link";
import ReactPlayer from "react-player/lazy";

const RobotImages = {
	glutenFree: [
		{
			src:
				"v1629671370/blog/robotics/gfrobit_2020-Mar-28_07-37-18PM-000_CustomizedView7667272270_png_dpnabk.png",
			caption:
				"Various photorealistic renders of world-champions Team 11115; rendered in Fusion 360 using an HDRI.",
		},
		{
			src:
				"v1629671338/blog/robotics/gfrobit_2020-Mar-28_07-35-34PM-000_CustomizedView7444426906_png_momk8q.png",
		},
		{
			src:
				"v1629671350/blog/robotics/gfrobit_2020-Mar-28_07-35-48PM-000_CustomizedView11615114976_png_alpha_rjyvuq.png",
		},
	],
	hydra: [
		{
			src:
				"v1629669742/blog/robotics/ActualRobot_2020-Mar-22_09-26-47PM-000_CustomizedView11585814194_png_e67fon.png",
			caption:
				"Various renders of world-finalists Team 7161; rendered in Fusion 360",
		},
		{
			src:
				"v1629669744/blog/robotics/ActualRobot_2020-Mar-22_09-41-10PM-000_CustomizedView12169216135_png_njfkfz.png",
			caption: "Adaptation for new scenery",
		},
		{
			src:
				"v1629669744/blog/robotics/ActualRobot_2020-Mar-22_09-26-47PM-000_CustomizedView11585814194_png_alpha_qohnst.png",
		},
	],
};

const CenterWrapper = ({ children }) => {
	return (
		<div className="flex w-full max-w-7xl justify-left">
			<div className="flex w-full max-w-6xl">{children}</div>
		</div>
	);
};

export default function projects() {
	return (
		<NavBarLayout>
			<div className="flex flex-col w-full max-w-7xl">
				<CenterWrapper>
					<div className="text-left w-full">
						<h1 className="text-6xl w-full font-extrabold">Projects</h1>
						<p className="my-3">
							A collection of projects and various hobbies I enjoyed doing in my
							freetime.{" "}
						</p>
						<div className="w-full border mb-10" />
						{/* <article className="w-full overflow-auto !max-w-6xl prose"> */}
						<article className="prose overflow-x-auto dark:prose-dark w-full my-10 max-w-3xl mx-0">
							<h1 className="dark:text-white">Robotics</h1>
							<p>
								I have competed in both the FIRST TECH Challenge and FIRST
								Robotics Challenge, designing various mechanisms and developing
								path-planning algorithms. Check out{" "}
								<Link href="https://gm0.org/en/latest/">Game Manual Zero</Link>{" "}
								for an excellent resource for the FIRST Tech Challenge. I
								primarily use{" "}
								<Link href="https://www.solidworks.com/">SOLIDWORKS</Link> for
								CAD purposes, and{" "}
								<Link href="https://www.autodesk.com/products/fusion-360/overview">
									Fusion 360
								</Link>{" "}
								for high-quality and convenient cloud-rendering.
							</p>
							<h2 className="dark:text-white">Photorealistic Rendering</h2>
							<p>
								During my period in the FIRST Tech Challenge, I found out that I
								quite enjoyed creating renderings for purposes of visualization.
								Here are some renderings I have done for various teams:
							</p>
						</article>
					</div>
				</CenterWrapper>

				<Collapsible title="Gluten Free - Team 11115">
					{/* <CenterWrapper> */}
					{/* <h3 className="prose dark:text-white">Gluten Free - Team 11115</h3> */}
					{/* </CenterWrapper> */}
					{/* <ImageCarousel images={RobotImages.glutenFree} /> */}
					<div className="w-full max-w-7xl">
						<EmblaCarousel slides={RobotImages.glutenFree} />
					</div>
				</Collapsible>
				<Collapsible title="Hydra - Team 7161">
					<EmblaCarousel slides={RobotImages.hydra} />
				</Collapsible>

				<div className="text-left mt-4 w-full prose">
					<h2 className="dark:text-white">Video Editing</h2>
					<p>
						Video editing is not really my fore, but I've dabbled with it for a
						bit.
					</p>
				</div>
				<Collapsible title="Some videos I produced">
					<div className="flex flex-col my-3 lg:flex-row items-center w-full space-y-3 lg:space-y-0">
						<ReactPlayer
							className="mx-1 rounded-md"
							url="https://www.youtube.com/watch?v=aETaRclTDDo"
						/>
						<ReactPlayer
							className="mx-1 rounded-md"
							url="https://youtu.be/GXJ5LX4zIpI"
						/>
					</div>
				</Collapsible>
			</div>
		</NavBarLayout>
	);
}
