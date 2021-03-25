import { useEffect } from "react";
import useSWR from "swr";
import format from "comma-number";

async function fetcher(...args) {
  // @ts-ignore
  const res = await fetch(...args);
  return res.json();
}

type ViewCounterProps = {
  slug: string;
  styles?: string;
  invisible?: boolean;
};

export default function ViewCounter({
  slug,
  styles,
  invisible,
}: ViewCounterProps) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  console.log("slug", slug, views);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: "POST",
      });

    registerView();
  }, [slug]);

  if (invisible) return <></>;

  return (
    <p className={`font-normal text-sm dark:text-gray-100 ${styles && styles}`}>
      {slug === "" ? "© Neo Wang | " : "•"}{" "}
      {`${views ? format(views) : "–"} views`}
    </p>
  );
}
