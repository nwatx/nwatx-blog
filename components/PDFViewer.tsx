export const PDFViewer = ({ url, alt }) => {
	return (
		<embed
			className="w-full flex flex-col flex-grow"
			src={url}
			type="application/pdf"
			height="500px"
		></embed>
	);
};
