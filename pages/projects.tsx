import React from "react";
import NextImage from "../components/NextImage";
import NavBarLayout from "../layouts/NavBarLayout";
import { useEmblaCarousel } from "embla-carousel/react";
import EmblaCarousel from "../components/carousel/EmblaCarousel";

const RobotImages = {
	glutenFree: [
		{
			src:
				"v1629671370/blog/robotics/gfrobit_2020-Mar-28_07-37-18PM-000_CustomizedView7667272270_png_dpnabk.png",
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
		},
		{
			src:
				"v1629669744/blog/robotics/ActualRobot_2020-Mar-22_09-41-10PM-000_CustomizedView12169216135_png_njfkfz.png",
		},
		{
			src:
				"v1629669744/blog/robotics/ActualRobot_2020-Mar-22_09-26-47PM-000_CustomizedView11585814194_png_alpha_qohnst.png",
		},
	],
};

export default function projects() {
	return (
		<NavBarLayout>
			<div className="text-left w-full max-w-7xl space-y-3 prose">
				<h1>Projects</h1>
				<p>
					A collection of projects and various hobbies I enjoyed doing in my
					freetime. Currently, the images are not lazy-loaded, which means they
					might take a bit to load, so be patient!
				</p>
				<h2 className="dark:text-white">Rendering Robots</h2>
				<p>
					During my period in the FIRST Tech Challenge, I found out that I quite
					enjoyed creating renderings for purposes of visualization. Here are
					some renderings I have done for various teams.
				</p>
				<h3 className="dark:text-white">Gluten Free - Team 11115</h3>
				{/* <ImageCarousel images={RobotImages.glutenFree} /> */}
				<EmblaCarousel slides={RobotImages.glutenFree} />
				<h2 className="dark:text-white">Hydra - Team 7161</h2>
				<EmblaCarousel slides={RobotImages.hydra} />
			</div>
		</NavBarLayout>
	);
}
