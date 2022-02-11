import React from "react";
import NextImage from "../components/NextImage";
import NavBarLayout from "../layouts/NavBarLayout";
import { useEmblaCarousel } from "embla-carousel/react";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import Collapsible from "../components/Collapsible";
import Link from "next/link";
import ReactPlayer from "react-player/lazy";
import ViewCounter from "../components/ViewCounter";
import Card from "../components/Card";
import Head from "next/head";

const RobotImages = {
	glutenFree: [
		{
			src: "v1629671370/blog/robotics/gfrobit_2020-Mar-28_07-37-18PM-000_CustomizedView7667272270_png_dpnabk.png",
			caption:
				"Various photorealistic renders of world-champions Team 11115; rendered in Fusion 360 using an HDRI.",
		},
		{
			src: "v1629671338/blog/robotics/gfrobit_2020-Mar-28_07-35-34PM-000_CustomizedView7444426906_png_momk8q.png",
		},
		{
			src: "v1629671350/blog/robotics/gfrobit_2020-Mar-28_07-35-48PM-000_CustomizedView11615114976_png_alpha_rjyvuq.png",
		},
	],
	hydra: [
		{
			src: "v1629669742/blog/robotics/ActualRobot_2020-Mar-22_09-26-47PM-000_CustomizedView11585814194_png_e67fon.png",
			caption:
				"Various renders of world-finalists Team 7161; rendered in Fusion 360",
		},
		{
			src: "v1629669744/blog/robotics/ActualRobot_2020-Mar-22_09-41-10PM-000_CustomizedView12169216135_png_njfkfz.png",
			caption: "Adaptation for new scenery",
		},
		{
			src: "v1629669744/blog/robotics/ActualRobot_2020-Mar-22_09-26-47PM-000_CustomizedView11585814194_png_alpha_qohnst.png",
		},
	],
	neo: [
		{
			src: "v1635117431/blog/robotics/final_0_frame_0_0_qbyuev.jpg",
			caption:
				"My 2019-2020 season robot, which I spent quite a bit of time modeling.",
		},
		{
			src: "v1635119759/blog/robotics/asdf_pw2bju.jpg",
			caption: "Real life version!",
		},
		{
			src: "v1636815443/blog/robotics/A21-Full_Robot_2021-Nov-13_08-41-46AM-000_CustomizedView22289634272_png_rrxkiv.png",
			caption: "2020-2021 FRC Robot",
		},
		{
			src: "c_crop,h_2160,w_3840/v1636786820/blog/robotics/image_from_ios_w2nvwz.jpg",
			caption: "Real life version of our 2021-2021 FRC robot",
		},
		{
			src: "v1635117548/blog/robotics/final_0_frame_0_0_ucplbk.jpg",
			caption: "The final version of our VCC CADathon robot",
		},
		{
			src: "v1635125761/blog/robotics/xf1mkdo_szqhlb.png",
			caption: "My robotics journey began with this robot",
		},
		{
			src: "v1635117556/blog/robotics/final_0_frame_0_0_tjakxm.jpg",
			caption: "A prototype version for a drive-base",
		},
		{
			src: "v1635117327/blog/robotics/final_0_frame_0_0_gqisfp.jpg",
			caption: "My F4 Cadathon Robot",
		},
		{
			src: "v1635117954/blog/robotics/final_0_frame_0_0_ia4ynh.jpg",
			caption: "Off-season FRC turret",
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
			<title>Neo Wang - Robotics</title>
			<Head>
				<meta name="description" content="A brief description of robotics" />
			</Head>
			<div className="flex flex-col w-full max-w-7xl justify-between">
				<div>
					<CenterWrapper>
						<div className="text-left w-full">
							<h1 className="text-6xl w-full font-extrabold">Robotics</h1>
							<p className="my-3">
								A collection of the robotics I enjoyed doing in my freetime.{" "}
							</p>
							<div className="w-full border mb-10" />
							{/* <article className="w-full overflow-auto !max-w-6xl prose"> */}
							<div className="flex flex-row">
								<article className="prose dark:prose-dark w-2/3 mb-10 mx-0">
									{/* <h1 className="dark:text-white">Robotics</h1> */}
									<h2>About Me</h2>
									<p>
										I have competed in and captained the FIRST TECH Challenge
										(Teams{" "}
										<Link href="https://theorangealliance.org/teams/3781">
											3781
										</Link>
										,{" "}
										<Link href="https://theorangealliance.org/teams/11549">
											11549
										</Link>
										,{" "}
										<Link href="https://theorangealliance.org/teams/6710">
											6710
										</Link>
										) and am currently competing in the FIRST Robotics Challenge
										(Team{" "}
										<Link href="https://www.thebluealliance.com/team/2468">
											2468
										</Link>
										). My primary areas are the design and manufacturing of
										various mechanisms, as well as developing path-planning and
										computer vision algorithms.
									</p>
									<p>
										I primarily use{" "}
										<Link href="https://www.solidworks.com/">SOLIDWORKS</Link>{" "}
										for CAD purposes, and{" "}
										<Link href="https://www.autodesk.com/products/fusion-360/overview">
											Fusion 360
										</Link>{" "}
										for high-quality and convenient cloud-rendering. I've also
										worked on{" "}
										<Link href="https://gm0.org/en/latest/">
											Game Manual Zero,
										</Link>{" "}
										an excellent resource for the FIRST Tech Challenge.
									</p>
									{/* TODO: 3d modeling */}
								</article>
								<div className="w-1/3 mx-auto p-3">
									<NextImage
										className="rounded-lg"
										src="v1635119941/blog/robotics/final_0_frame_0_0_e6hfhh.jpg"
										width={960}
										height={540}
									/>
								</div>
							</div>
							<div className="my-4 prose">
								<h2 className="my-3">Posts</h2>
							</div>
							<div className="flex flex-col xl:flex-row mb-10">
								<Card
									to="/post/detecting-tennis-balls"
									src="c_scale,h_300,w_300/v1636081627/blog/robotics/4IwHrVR_dqrpqu.jpg"
									title="Real-time deep detection and tracking of Tennis Balls"
									description="Computer vision 👀; also part of tennis ball robot project"
								/>
								<Card
									to="/post/design-of-a-first-tech-challenge-robot-in-5-days"
									src="c_scale,h_300,w_300/v1631751283/blog/robotics/1_uAdMApemmUuHD1-GKfrmXw_qw093q.png"
									title="Design of a FIRST Tech Challege Robot in 5 Days"
									description="An overview of one freshmen year CADathon experience"
								/>
							</div>
							<Collapsible title="Robot Portfolio" opened>
								<EmblaCarousel slides={RobotImages.neo} />
							</Collapsible>
							<article className="prose dark:prose-dark w-full my-10 max-w-3xl mx-0">
								<h2 className="dark:text-white">Photorealistic Rendering</h2>
								<p>
									During my period in the FIRST Tech Challenge, I found out that
									I quite enjoyed creating renderings for purposes of
									visualization. Here are some renderings I have done for
									various teams:
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
						<p>I've dabbled with video editing for a bit.</p>
					</div>
					<Collapsible title="Some videos I produced">
						<div className="flex flex-col my-3 lg:flex-row items-center w-full space-y-3 lg:space-y-0">
							<ReactPlayer
								className="mx-1 rounded-md"
								controls
								url="https://www.youtube.com/watch?v=aETaRclTDDo"
							/>
							<ReactPlayer
								className="mx-1 rounded-md"
								controls
								url="https://youtu.be/GXJ5LX4zIpI"
							/>
						</div>
					</Collapsible>
				</div>
				<div className="flex w-full px-3 mt-40 max-w-7xl">
					<div className="w-full justify-center text-center max-w-7xl">
						<ViewCounter slug={"projects"} />
					</div>
				</div>
			</div>
		</NavBarLayout>
	);
}
