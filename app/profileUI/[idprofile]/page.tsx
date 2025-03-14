"use client";
import { useQuery } from "@tanstack/react-query";

export default function Page({ params }: any) {
  const { isPending, error, data } = useQuery({
    queryKey: ["singleprofileData123"],
    queryFn: () =>
      fetch(`/api/profile/${params.idprofile}`).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="">
        <p>Hello</p>
        {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(params, null, 2)}
          </code>
        </pre>

        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre> */}

      </div>
    </>
  );
}
