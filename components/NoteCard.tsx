import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PDFViewer } from "../components/PDFViewer";
import Link from "next/link";

export default function Notecard({ url, alt, description = "" }) {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<button
				type="button"
				onClick={openModal}
				// className="px-4 py-2 border text-blue-800 font-semibold border-blue-400 hover:border-blue-600 hover:text-blue-600 opacity-60 rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
			>
				{alt}
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={closeModal}
				>
					<div className="min-h-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<div
								className="flex flex-col p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
								style={{ height: "90vh", width: "95vw" }}
							>
								<Dialog.Title
									as="h3"
									className="flex flex-col sm:flex-row w-full justify-between text-xl font-medium my-3 leading-6 text-gray-900"
								>
									<div className="flex h-full">
										<Link href={url}>
											<div className="mt-auto cursor-pointer text-blue-600 hover:text-blue-900 text-2xl underline">
												{alt}
											</div>
										</Link>
									</div>
									<button
										type="button"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
										onClick={closeModal}
									>
										Finished reading notes
									</button>
								</Dialog.Title>
								<div className="mt-2">
									<p className="text-sm text-gray-500">{description}</p>
								</div>

								<PDFViewer url={url} alt={alt} />
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
