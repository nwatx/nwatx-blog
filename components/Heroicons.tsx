export const MailIcon = ({...props}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			// className="h-10 w-10 p-2 text-white dark:text-black bg-black dark:bg-white rounded-full"
			className='h-10 w-10 p-2 dark:text-white cursor-pointer dark:hover:bg-gray-700 rounded-full'
			fill="none"
			viewBox="-1 0 24 24"
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			/>
		</svg>
	);
};
