import React from "react";
import NextImage from "../components/NextImage";
import NavBarLayout from "../layouts/NavBarLayout";
import { useEmblaCarousel } from "embla-carousel/react";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import Collapsible from "../components/Collapsible";

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
		<div className="flex w-full max-w-7xl justify-center">
			<div className="flex w-full max-w-5xl">{children}</div>
		</div>
	);
};

export default function projects() {
	return (
		<NavBarLayout>
			<div className="flex flex-col w-full max-w-7xl">
				<CenterWrapper>
					<div className="text-left w-full max-w-5xl space-y-3 prose">
						<h1>Projects</h1>
						<p>
							A collection of projects and various hobbies I enjoyed doing in my
							freetime.
						</p>
						<h2 className="dark:text-white">Rendering Robots</h2>
						<p>
							During my period in the FIRST Tech Challenge, I found out that I
							quite enjoyed creating renderings for purposes of visualization.
							Here are some renderings I have done for various teams.
						</p>
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
			</div>
		</NavBarLayout>
	);
}
