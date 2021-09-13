import React from "react";
import { PDFViewer } from "../components/PDFViewer";
import NavBarLayout from "../layouts/NavBarLayout";
import NoteCard from "../components/NoteCard";

const notesInfo = [
	{
		url: "https://nwatx.github.io/Notes-2021-2022/ap-physics-c/main.pdf",
		alt: "AP Physics C",
	},
	{
		url: "",
		alt: "Linear Algebra"
	}
];

export default function notes() {
	return (
		<NavBarLayout>
			<div className="max-w-7xl w-full">
				<div className="prose">
					<h1>I take notes for the following classes:</h1>
				</div>
				{notesInfo.map((note) => (
					<NoteCard key={note.alt} url={note.url} alt={note.alt} />
				))}
			</div>
		</NavBarLayout>
	);
}
