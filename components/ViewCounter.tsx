import { useEffect } from "react";
import useSWR from "swr";
import format from "comma-number";

async function fetcher(...args) {
  // @ts-ignore
  const res = await fetch(...args);
  return res.json();
}

export default function ViewCounter({ slug }) {
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

  return <div className='font-light'>{`${views ? format(views) : "–"} views`}</div>
}
