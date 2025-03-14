"use client";

import Image from "next/image";
import Reveal from "./reveal";

import HomePage from "./ui/components/home/home";
import { Profile } from "./profileUI/profile";
import { UpdateProfile } from "./profilepage/updateProfile";
 import { Button } from "@heroui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sign } from "crypto";
import { useQuery } from "@tanstack/react-query";
import { ProfilePreview } from "./profileUI/profilepreview/profilepreview";
import { UserPreview } from "./linktree/userPreview";
import { InputUserview } from "./linktree/InputUserview";
 

export default function Home() {
  const session = useSession();

  const { isPending, error, data } = useQuery({
    queryKey: ["profileData", "profileEditData"],
    queryFn: () => fetch("/api/profile").then((res) => res.json()),
  });

  // if (session.status === "unauthenticated") {
  //   return (
  //     <div className="">
  //       <h1>PLEASE LOGIN</h1>
  //       <Button onClick={() => signIn()}>Acc win mal kwar</Button>
  //     </div>
  //   );
  // }
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  
  return (
    <>
     <div className="h-screen p-3 flex gap-5" >
      
      <InputUserview />
      <UserPreview />
     {/* <Button className="bg-blue-500 " onClick={() => signOut()}>Sign Out</Button> */}

     </div>
     {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre> */}
     {/* {p === session?.data?.user?.id && <h1>hello</h1>} */}

     </>
     
  );
}
