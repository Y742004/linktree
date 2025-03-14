import { Avatar, Button, Link } from "@heroui/react";
import { FacebookIcon } from "../icons/facebook";
import { useQuery } from "@tanstack/react-query";
import { InstagramIcon } from "../icons/instagram";
import { YoutubeIcon } from "../icons/youtube";
import Spotify from "next-auth/providers/spotify";
import { SpotifyIcon } from "../icons/spotify";

export function UserPreview() {
  const { isPending, error, data } = useQuery({
    queryKey: ["linkTreeData123"],
    queryFn: () => fetch("/api/linktree").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="p-3 border border-black  rounded-lg w-2/6 h-4/6">
        <div className="space-y-3">
          <Avatar className="mx-auto" size="lg" />
          <div className="text-center">
            <p>Username</p>
            <p>bio</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          {data.map((i: any) => (
            <div className="">
              <Link href={`${i?.url}`}>
                {i.name == "FaceBook" && (
                  <Button isIconOnly variant="light">
                    <FacebookIcon size={30} />
                  </Button>
                )}
                {i.name == "Instagram" && (
                    <Button isIconOnly variant="light">
                    <InstagramIcon size={30} />
                  </Button>
                )}
                {i.name == "Youtube" && (
                    <Button isIconOnly variant="light">
                    <YoutubeIcon size={30} />
                  </Button>
                )}
                {i.name == "Spotify" && (
                    <Button isIconOnly variant="light">
                    <SpotifyIcon size={30} />
                  </Button>
                )}

              </Link>
            </div>
          ))}
        </div>

        <div className="">
       
          {data.map((i: any) => (
              
             <div className="text-center"><Link color="foreground" href={`${i?.url}`}>  <div className="border w-60  border-black p-3  mt-5 rounded-lg text-center">
              <p>{i?.name}</p>
            </div></Link></div> 
             
          ))}
        </div>
      </div>
    </>
  );
}
