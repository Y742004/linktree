import { Avatar, Button, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function InputUrl() {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const queryClient = useQueryClient();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();



    const { mutate } = useMutation({
        mutationFn: (data: any) => {
          return fetch("/api/linktree", {
            method: "POST",
            body: JSON.stringify(data),
          }).then((res) => res.json());
        },
    
        onSuccess: () => {
          setName("");
          setUrl("");
        },
      });
    
      const onSubmit = (e: any) => {
        e.preventDefault();
        mutate({ name, url });
        queryClient.invalidateQueries({ queryKey: ["linkTreeData123"] });
      };
    return (
        <>
        
<div className="">
<Button   
 className="bg-purple-500 text-white w-full mt-5" onPress={onOpen}>Add</Button>
<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1 text-center">
          Create post
        </ModalHeader>
        <Divider />
       <form onSubmit={onSubmit}> <ModalBody>
       <Input
            variant="bordered"
            label="Social Media"
            labelPlacement="outside"
            placeholder="Enter your social media "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
           <Input
            variant="bordered"
            label="Social Media URL"
            labelPlacement="outside"
            placeholder="Enter your social media url "
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
           
          <Button type="submit" className="w-full" color="primary" onPress={onClose}>
            Add
          </Button>
        </ModalFooter>
        </form>
      </>
    )}
  </ModalContent>
</Modal>

    
</div>

        </>
    )
}

