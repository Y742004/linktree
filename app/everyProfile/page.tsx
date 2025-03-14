"use client";

import { Avatar, Link } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { isPending, error, data } = useQuery({
    queryKey: ["allprofileData"],
    queryFn: () => fetch("/api/profile/all").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="p-3">
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>

      {data.map((i: any) => (
        <div className="">
          <div className="border p-3 rounded-lg">
          <Link href={`/everyProfile/${i?.userId}`}>  <Avatar src={i?.profilePhoto} /></Link>
            <div className="">
              <p>{i?.profilename}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
