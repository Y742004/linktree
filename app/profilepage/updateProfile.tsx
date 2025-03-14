import { Button, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/react";
import { DotsIcon } from "../icons/threeDot";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function UpdateProfile({
  id,
  oldUsername,
  oldProfilename,
  oldProfilePhoto,
  oldCoverPhoto
} : {
  id: string;
  oldUsername: string;
  oldProfilename: string;
  oldProfilePhoto: string;
  oldCoverPhoto: string;
}) {
  const [username, setUsername] = useState(oldUsername);
  const [profilename, setProfilename] = useState(oldProfilename);
  const [profilePhoto, setProfilePhoto] = useState(oldProfilePhoto);
  const [coverPhoto, setCoverPhoto] = useState(oldCoverPhoto);

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

 
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData: {
      id: string;
       username: string;
       profilename: string;
       coverPhoto: string;
       profilePhoto: string
     }) => {
      return fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },

    onSuccess: () => {
     alert("Post updated successfully");
        queryClient.invalidateQueries({ queryKey: ["profileData"] });
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ username, profilename, profilePhoto, coverPhoto, id });
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
                label="Profile Name"
                labelPlacement="outside"
                value={profilename}
                placeholder="Enter your profile name"
                type="text"
                onChange={(e) => setProfilename(e.target.value)}
              />
              <Input
                variant="bordered"
                isRequired
                label="Username"
                labelPlacement="outside"
                value={username}
                placeholder="Enter your username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
               <Input
                variant="bordered"
                isRequired
                label="Profile Photo"
                labelPlacement="outside"
                value={profilePhoto}
                placeholder="Enter your profile photo"
                 type="text"
                onChange={(e) => setProfilePhoto(e.target.value)}
              />
               <Input
                variant="bordered"
                isRequired
                label="Cover Photo"
                labelPlacement="outside"
                value={coverPhoto}
                placeholder="Enter your cover photo"
                 type="text"
                onChange={(e) => setCoverPhoto(e.target.value)}
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