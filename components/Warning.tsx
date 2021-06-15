export default function WarningCard({ title, description }) {
	return (
		<div className="flex flex-row border border-yellow-200 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-600 rounded p-6 my-4 w-full">
			<div className='w-10'>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="mt-9 h-6 w-6 text-yellow-500 dark:text-yellow-200"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
			</div>
			<div className="flex flex-col justify-items-start mx-4 my-0">
				<h3 className="my-0 py-0 text-yellow-600 dark:text-yellow-200 font-semibold">{`${title}`}</h3>
				{description && (
					<p className="my-0 text-yellow-600 dark:text-yellow-200">
						{description}
					</p>
				)}
			</div>
		</div>
	);
}
