"use client";

  import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { on } from "events";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { CrossIcon } from "../icons/crossIcon";

export function DeleteSkills({ id }: { id: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: { id: string }) => {
      return fetch("/api/skills", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skillsData"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ id });
  };

  return (
    <>
      <Button className="text-black" onPress={onOpen} isIconOnly variant="light">
        <CrossIcon size={20} />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="text-black bg-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure you want to delete?
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button className="text-black" color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <form onSubmit={onSubmit}>
                  {" "}
                  <Button type="submit" color="danger" onPress={onClose}>
                    Delete
                  </Button>{" "}
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
