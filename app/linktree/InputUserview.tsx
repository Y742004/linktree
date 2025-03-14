import { Avatar, Button } from "@heroui/react";
import { InputUrl } from "./inputUrl";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export function InputUserview() {
  const { isPending, error, data } = useQuery({
    queryKey: ["linkTreeData"],
    queryFn: () => fetch("/api/linktree").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="p-3 w-4/6 border border-black rounded-lg">
        <div className="flex items-center gap-3">
          <Avatar className="" size="lg" />
          <div className="">
            <p>Username</p>
            <p>bio</p>
          </div>
        </div>
        <InputUrl/>

        <div className="">
          {data.map((i: any) => ( 
             <div className="border border-black p-3 mt-5 rounded-lg">
             <p>{i?.name}</p>
             <Link href={`${i?.url}`}>{i?.url}</Link>
             
           </div>))}
        </div>

       
       </div>
    </>
  );
}
