import Link from "next/link";

export default function NextLink({ href, ...rest }) {
  return (
    <Link href={href}>
      <a
        className="text-blue-700 font-semibold hover:underline"
        target="_blank"
        {...rest}
      />
    </Link>
  );
}
