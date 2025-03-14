"use client";

import { Button, Input, Link, user } from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { p } from "framer-motion/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { profile } from "console";
import { useSession } from "next-auth/react";

export default function SkillsPage( ) {
  const { data: session } = useSession()

  const [profilename, setProfilename] = useState("");
  const [username, setUsername] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (data: any) => {
      return fetch("/api/profile", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },

    onSuccess: () => {
      setProfilename("");
      setUsername("");
      setCoverPhoto("");
      setProfilePhoto("");
      router.push("/"); // Navigate to home page
    },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    mutate({
      profilename,
      username,
      coverPhoto,
      profilePhoto,
      userId: session?.user?.id,
    });
    queryClient.invalidateQueries({ queryKey: ["profileData"] });
  };

  return (
    <div className="bg-white h-screen ">
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(session, null, 2)}</code>
      </pre>
      <h1>Profile Page</h1>
      <div className="border p-5 rounded-lg max-w-xl mx-auto">
        <form onSubmit={onSubmit} className="flex flex-col gap-3 ">
          <Input
            variant="bordered"
            label="Profile Name"
            labelPlacement="outside"
            placeholder="Enter your profile name"
            value={profilename}
            onChange={(e) => setProfilename(e.target.value)}
          />
          <Input
            variant="bordered"
            label="Username"
            labelPlacement="outside"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            variant="bordered"
            label="Profile Photo"
            labelPlacement="outside"
            placeholder="Upload your profile photo"
            value={profilePhoto}
            onChange={(e) => setProfilePhoto(e.target.value)}
          />
          <Input
            variant="bordered"
            label="Cover Photo"
            labelPlacement="outside"
            placeholder="Upload your cover photo"
            value={coverPhoto}
            onChange={(e) => setCoverPhoto(e.target.value)}
          />

          <Button type="submit" className="bg-blue-500">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
