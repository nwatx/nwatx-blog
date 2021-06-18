import React from "react";
import Particles from "react-particles-js";

// color: {
// },
// lineLinked: {
// 	color: {
// 		value: "rgba(0, 0, 0, 0.05)",
// 	},

export default function ParticleJs() {
	return (
		<div className="absolute w-full h-full z-0">
			<Particles
				params={{
					particles: {
						number: {
							value: 160,
							density: {
								enable: false,
							},
						},
						color: {
							value: "rgba(14, 165, 233, 0.01)",
						},
						size: {
							value: 3,
							random: true,
							anim: {
								speed: 4,
								size_min: 0.3,
							},
						},
						line_linked: {
							enable: false,
							color: {
								value: "rgba(0, 0, 0, 0.05)",
							},
						},
						move: {
							random: true,
							speed: 1,
							direction: "top",
							out_mode: "out",
						},
					},
					polygon: {
						draw: {
							stroke: {
								color: "rgba(255, 0, 0, 0.1)",
							},
						},
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: "bubble",
							},
							onclick: {
								enable: true,
								mode: "repulse",
							},
						},
						modes: {
							bubble: {
								distance: 250,
								duration: 2,
								size: 0,
								opacity: 0,
							},
							repulse: {
								distance: 400,
								duration: 4,
							},
						},
					},
				}}
			/>
		</div>
	);
}
