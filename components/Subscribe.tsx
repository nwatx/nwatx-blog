import React from "react";
import MailChimp from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
	let email;
	const submit = () =>
		email &&
		email.value.indexOf("@") > -1 &&
		onValidated({
			EMAIL: email.value,
		});

	return (
		<div>
			<input
				className="border my-3 bg-transparent shadow-inner p-2 rounded-md outline-none focus:border-black dark:focus:border-white"
				ref={(node) => (email = node)}
				type="text"
				placeholder="Enter your email address"
			/>
			{/* <br />
			<input
				style={{ fontSize: "2em", padding: 5 }}
				ref={(node) => (email = node)}
				type="email"
				placeholder="Your email"
			/> */}
			<button
				type="submit"
				className="border text-gray-500 dark:border-white dark:hover:bg-gray-600 py-2 mx-2 px-4 rounded-md hover:border-black hover:text-black"
				onClick={submit}
			>
				<p>Submit</p>{" "}
			</button>
			{status === "sending" && (
				<div className="text-blue-500 font-semibold">Sending...</div>
			)}
			{status === "error" && (
				<div className="text-red-500 font-semibold">{message}</div>
			)}
			{status === "success" && (
				<div className="text-green-800 font-semibold dark:text-green-400">
					{message}
				</div>
			)}
		</div>
	);
};

export default function Subscribe() {
	const url =
		"https://nwatx.us5.list-manage.com/subscribe/post?u=0fe3c64eac51ccada9f6e0d56&id=66d26e0fb9";
	return (
		<div>
			{/* <MailChimp url={url} /> */}
			<MailChimp
				url={url}
				render={({ subscribe, status, message }) => (
					<div>
						<CustomForm
							status={status}
							message={message}
							onValidated={(data) => subscribe(data)}
						/>
					</div>
				)}
			/>
		</div>
	);
}
