"use client";

import { Button, Input } from "@heroui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import BlockNodeRichTextEditor from "../block-node/BlockNodeRichTextEditor";
import TailwindEditor from "../rich-text/ok-use";

export function CreatePostForm() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [contentMM, setContentMM] = useState<any>(null);

  // featch current user
  const {
    isPending,
    error,
    data: currentUser,
  } = useQuery({
    queryKey: ["currentUserData"],
    queryFn: () => fetch("/api/user/current").then((res) => res.json()),
  });

  //   to store post data to db
  const mutation = useMutation({
    mutationFn: (formData: {
      title: string;
      //   categoryId: string;
      description: string;
      userId: string;
      slug: string;
      image: string;
      contentMM: any;
    }) => {
      return fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () => {
      alert("Post created successfully");
      queryClient.invalidateQueries({ queryKey: ["reactionData"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({
      title,
      description,
      contentMM: JSON.stringify(contentMM),
      userId: currentUser.id,
      slug,
      image,
    });
  };

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="bg-[#1b252e] p-3">
      <h1 className="text-xl font-bold"></h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input
          autoFocus
          label="Title"
          placeholder="Enter your title"
          variant="bordered"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="Slug"
          placeholder="Enter your Slug"
          variant="bordered"
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <Input
          label="Image URL"
          placeholder="Enter your image URL"
          variant="bordered"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {/* <Input
          autoFocus
          label="Category"
          placeholder="Enter your category"
          variant="bordered"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        /> */}

        {/* <Input
          label="Description"
          placeholder="Enter your description"
          variant="bordered"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> */}

        <BlockNodeRichTextEditor setDescription={setDescription} />

        <TailwindEditor setContent={setContentMM} content={contentMM} />

        <Button
          type="submit"
          color="primary"
          className="text-black"
          isLoading={mutation.isPending}
          isDisabled={mutation.isPending}
        >
          Post
        </Button>
      </form>
    </div>
  );
}
