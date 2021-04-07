import Link from "next/link";

export default function ProjectCard({ title, description, href }) {
  return (
    <Link href={href} passHref={true}>
      <div className="flex w-full flex-col lg:flex-row hover:shadow-inner dark:hover:bg-gray-700 cursor-pointer items-center border border-gray-200 dark:border-gray-600 rounded-lg p-4">
        <div className="flex flex-wrap w-full lg:w-1/4">
          {title === "ShareLatex" && (
            <p>
              Share<b className="text-blue-600">Latex</b>
            </p>
          )}
          {title === "nwatx.me" && (
            <p>
              nwatx<b className="text-blue-600">.me</b>
            </p>
          )}
          {title === "Competitive Programming" && (
            <p>
              C<b className="text-blue-600">P</b>
            </p>
          )}
        </div>
        <div className='flex flex-col w-full lg:w-3/4'>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
