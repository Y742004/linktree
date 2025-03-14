"use client";

import { Button, Input, Link } from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { p, u } from "framer-motion/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function SkillsPage() {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [percent, setPercent] = useState("");
  const [image, setImage] = useState("");
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (data: any) => {
      return fetch("/api/skills", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },

    onSuccess: () => {
      setName("");
      setPercent("");
      setImage("");
      router.push("/"); // Navigate to home page
    },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    mutate({ name, percent, image, userId: session?.user?.id });
    queryClient.invalidateQueries({ queryKey: ["skillsData"] });
  };

  return (
    <div className="bg-white h-screen ">
      <h1>Skills Page</h1>
      <div className="border p-5 rounded-lg max-w-xl mx-auto">
        <form onSubmit={onSubmit} className="flex flex-col gap-3 ">
          <Input
            variant="bordered"
            label="Profile Name"
            labelPlacement="outside"
            placeholder="Enter your profile name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            variant="bordered"
            label="Username"
            labelPlacement="outside"
            placeholder="Enter your username"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
          />
          <Input
            variant="bordered"
            label="Profile Photo"
            labelPlacement="outside"
            placeholder="Upload your profile photo"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <Button type="submit" className="bg-blue-500">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
