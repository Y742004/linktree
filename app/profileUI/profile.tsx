import { Avatar, Button, Image, Link } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { UpdateProfile } from "../profilepage/updateProfile";
import { UpdateSkills } from "../profilepage/updateskills";
import { DeleteButton } from "@blocknote/react";
import { DeleteSkills } from "../profilepage/deleteskills";
 import { useSession } from "next-auth/react";

export  function Profile() {
  const { isPending, error, data } = useQuery({
    queryKey: ["profileData", "profileEditData"],
    queryFn: () => fetch("/api/profile").then((res) => res.json()),
  });

  const { data: session } = useSession()

  

  const { data: data2 } = useQuery({
    queryKey: ["skillsData", "skillsEditData"],
    queryFn: () => fetch("/api/skills").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;



  return (
    <>
      {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre> */}
      <div className="p-5  max-w-xl mx-auto ">
        <Image
          src={data?.coverPhoto}
          className="w-screen h-44 overflow-hidden "
        />
        <div className="p-5 -mt-24 ">
          {" "}
          <div className="flex justify-between items-center">
            <Avatar className="w-32 h-32 z-20" src={data?.profilePhoto} />
            <div className="space-x-8 rounded-full z-20 mt-5">
              {/* <Button isIconOnly></Button>
              <Button isIconOnly></Button> */}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end -mt-20  border p-3 h-32 bg-gray-200  ">
          <div className="">
            <h1 className="text-lg font-bold">{data?.profilename}</h1>
            <h1 className="text-sm text-gray-500">{data?.username}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button className="bg-blue-500 text-white rounded-lg">1.3k</Button>
            <UpdateProfile
              id={data?.id}
              oldUsername={data?.username}
              oldProfilename={data?.profilename}
              oldProfilePhoto={data?.profilePhoto}
              oldCoverPhoto={data?.coverPhoto}
            />
          </div>
        </div>
        {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data2, null, 2)}</code>
        </pre> */}
   <div className="text-center mt-5">  <Link   href="/skillsPage"><Button className="h-14 bg-blue-500 rounded-3xl  "> Add your skills</Button> </Link> </div> 
        {data2?.map((skill: any) => (
          <div className="border p-2 rounded-lg flex items-center justify-between mt-3 ">
            <div className=" flex items-center gap-2">
              <Avatar size="lg" radius="sm" src={skill.image} />
              <div className="">
                <p className="text-gray-500">{skill.name}</p>
                <p className="font-bold">{skill.percent}</p>
              </div>
             
            </div>
            <div className=""><UpdateSkills
                id={skill.id}
                oldImage={skill?.image}
                oldPercent={skill?.percent}
                oldName={skill?.name}
              />

              <DeleteSkills
                id={skill.id}
              />
              
              </div>
          </div>
        ))}

         

        <div className="flex flex-col gap-5 p-5 ">
          <p className="text-4xl font-bold text-center">Recently Played</p>
          <div className="flex flex-col gap-5">
            <div className="border p-3 flex items-center gap-2 rounded-lg ">
              <Avatar size="lg" radius="sm" />
              <div className="">
                <p className="font-bold">Galexy Vibe</p>
                <div className="flex gap-5">
                  <p className="text-gray-500">72% like</p>
                  <p className="text-gray-500">10M download</p>
                </div>
              </div>
            </div>
            <div className="border p-3 flex items-center gap-2 rounded-lg  ">
              <Avatar size="lg" radius="sm" />
              <div className="">
                <p className="font-bold">Galexy Vibe</p>
                <div className="flex gap-5">
                  <p className="text-gray-500">72% like</p>
                  <p className="text-gray-500">10M download</p>
                </div>
              </div>
            </div>
            <div className="border p-3 flex items-center gap-2 rounded-lg ">
              <Avatar size="lg" radius="sm" />
              <div className="">
                <p className="font-bold">Galexy Vibe</p>
                <div className="flex gap-5">
                  <p className="text-gray-500">72% like</p>
                  <p className="text-gray-500">10M download</p>
                </div>
              </div>
            </div>
            <div className="border p-3 flex items-center gap-2 rounded-lg ">
              <Avatar size="lg" radius="sm" />
              <div className="">
                <p className="font-bold">Galexy Vibe</p>
                <div className="flex gap-5">
                  <p className="text-gray-500">72% like</p>
                  <p className="text-gray-500">10M download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 text-center max-w-xl mx-auto">
        <Button
          isIconOnly
          className="w-14 h-14 rounded-full relative z-10"
        ></Button>
        <div className="border px-8 py-3 flex justify-between -mt-10 bg-gray-100 mx-4">
          <Button isIconOnly></Button>
          <Button isIconOnly></Button>
        </div>
      </div>
    </>
  );
}
