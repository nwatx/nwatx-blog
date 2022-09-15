import React from "react";
import { PDFViewer } from "../components/PDFViewer";
import NavBarLayout from "../layouts/NavBarLayout";
import NoteCard from "../components/NoteCard";

const notesInfo = {
	CURRENT: [
		{
			url: "https://nwatx.github.io/LaTeX/CS311H/main.pdf",
			alt: "Discrete Mathematics Honors (CS311H)",
		},
		{
			url:
				"https://nwatx.github.io/LaTeX/M427L/main.pdf",
			alt: "Vector Calculus--Honors (M427L)",
		},
	],
	REVIEWS: [],
};

export default function Notes() {
	return (
		<NavBarLayout>
			<div className="max-w-7xl w-full">
				<div className="prose my-6">
					<h1>LaTeX Notes</h1>
					<p>
						A collection of notes I wrote in LaTeX. Click on the blue buttons to
						open a PDF preview!
					</p>
					<h2 className="dark:text-white">Current Courses</h2>
					<p>
						Current notes that are currently being updated. May not be{" "}
						<i>totally</i> accurate; submit a pull request or email me to fix
						errors.
					</p>
				</div>
				<div className="flex w-full justify-center">
					{notesInfo.CURRENT.map((note) => (
						<div className="mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6">
							<NoteCard key={note.alt} url={note.url} alt={note.alt} />
						</div>
					))}
				</div>
				<div className="prose mt-10">
					<h2 className="dark:text-white">Past Courses</h2>
					<p>Past notes that are no longer being updated. Coming soon!</p>
				</div>
			</div>
		</NavBarLayout>
	);
}
