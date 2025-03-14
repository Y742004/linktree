import { Button, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { DotsIcon } from "../icons/threeDot";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { i } from "framer-motion/client";

export function UpdateSkills({
  id,
  oldName,
  oldPercent,
  oldImage
} : {
  id: string;
  oldName: string;
  oldPercent: string;
  oldImage: string;
}) {
  const [name, setName] = useState(oldName);
  const [percent, setPercent] = useState(oldPercent);
  const [ image, setImage] = useState(oldImage);
  

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

 
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: {
      id: string;
      name: string;
      percent: string;
      image: string
     }) => {
      return fetch("/api/skills", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
     alert("Post updated successfully");
        queryClient.invalidateQueries({ queryKey: ["skillsEditData"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ id, image, percent, name });
  };

    return (
        <>
          <Button className=" text-black" onPress={onOpen} isIconOnly variant="light"> <DotsIcon  size={25} /></Button>
          
      <Modal className="bg-white" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>       <form onSubmit={onSubmit}>
              <ModalHeader className="flex flex-col gap-1"> Edit</ModalHeader>
              <ModalBody>
       
            <div className="px-1 py-2 flex flex-col gap-4">
              <Input
                variant="bordered"
                isRequired
                label="Name"
                labelPlacement="outside"
                value={name}
                placeholder="Enter your name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                variant="bordered"
                isRequired
                label="Percent"
                labelPlacement="outside"
                value={percent}
                placeholder="Enter your percent"
               
                type="text"
                onChange={(e) => setPercent(e.target.value)}
              />
               <Input
                variant="bordered"
                isRequired
                label="IMAGE"
                labelPlacement="outside"
                value={image}
                placeholder="Enter your profile photo"
                 type="text"
                onChange={(e) => setImage(e.target.value)}
              />
             

              
             </div>
         
              </ModalBody>
              <ModalFooter>
                <Button className="text-black" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-500" onPress={onClose}>
Done                </Button>
              </ModalFooter> </form>
            </>
          )}
        </ModalContent>
      </Modal>
        </>
    );
}