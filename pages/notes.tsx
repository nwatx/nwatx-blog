import React from "react";
import { PDFViewer } from "../components/PDFViewer";
import NavBarLayout from "../layouts/NavBarLayout";
import NoteCard from "../components/NoteCard";
import Link from "next/link";

const notesInfo = {
	CURRENT: [
		{
			url: "https://nwatx.github.io/LaTeX/CS429H_Notes.pdf",
			alt: "Computer Architecture Honors (CS429H)",
		},
		{
			url: "https://nwatx.github.io/LaTeX/CS311H/main.pdf",
			alt: "Discrete Mathematics Honors (CS311H)",
		},
		{
			url: "https://nwatx.github.io/LaTeX/M427L/main.pdf",
			alt: "Vector Calculus Honors (M427L)",
		},
	],
	REVIEWS: [],
};

export default function Notes() {
	return (
		<NavBarLayout>
			<div className="max-w-3xl w-full">
				<div className="prose max-w-full w-full my-6">
					<h2 className="dark:text-white">Course Notes</h2>
					{/* <p>
						Current notes that are currently being updated. May not be{" "}
						<i>totally</i> accurate; submit a pull request or email me to fix
						errors.
					</p> */}
				</div>
				<div className="grid md:grid-cols-2 w-full justify-center gap-x-2 gap-y-2">
					{notesInfo.CURRENT.map((note) => (
						// <div className="w-full">
						<div>
							<NoteCard key={note.alt} url={note.url} alt={note.alt} />
						</div>
						// </div>
					))}
				</div>
				<div className="prose mt-10 w-full max-w-full">
					<h2 className="dark:text-white">All Courses</h2>
					<b>Graduate Coursework</b>
					<ul>
						<li>Reinforcement Learning: Theory and Practice</li>
					</ul>
					<b>Undergraduate Coursework</b>
					<ul>
						<li>
							<a href="https://nwatx.github.io/LaTeX/CS429H_Notes.pdf">
								Computer Architecture Honors
							</a>
						</li>
						<li>
							<a href="https://nwatx.github.io/LaTeX/CS311H/main.pdf">
								Discrete Mathematics Honors
							</a>
						</li>
						<li>
							<a href="https://nwatx.github.io/LaTeX/M427L/main.pdf">
								Vector Calculus Honors
							</a>
						</li>
						<li>Algorithms Honors</li>
						<li>Programming Languages Honors</li>
						<li>Interest Theory</li>
						<li>Statistics</li>
						<li>Operating Systems Honors</li>
						<li>Performance Programming</li>
						<li>Data Structures Honors</li>
						<li>Natural Language Processing</li>
						<li>Computer Vision</li>
						<li>Stochastic Processes</li>
						<li>Probability</li>
						<li>Linear Algebra</li>
					</ul>
				</div>
			</div>
		</NavBarLayout>
	);
}
