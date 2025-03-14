import { Button, Chip, Image } from "@heroui/react";
import { CourseVideoIcon } from "../../icons/course-video-icon";
import { PlayIcon } from "../../icons/play-icon";
import Link from "next/link";

const gameDatas = [
  {
    id: "01",
    name: "PiggyPiggy",
    image:
      "https://pbs.twimg.com/profile_images/1810991141514530816/JdldOsup_400x400.jpg",
    player: "4.5M",
    listing_date: "Nov 12, 2024 UTC 12:00",
    game_link: "",
    rank: 1,
  },
  {
    id: "02",
    name: "MEMEFI",
    image:
      "https://docs.memefi.club/~gitbook/image?url=https%3A%2F%2F1869553413-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FgRYRyofsK0FjJGLOzPVZ%252Ficon%252FYvA03D4kwJp9YBGUTJLr%252FYoutube%2520%2526%2520Telegram%2520Logo.png%3Falt%3Dmedia%26token%3D09c463ab-8c58-4f39-b2be-4fca9a545fc7&width=32&dpr=2&quality=100&sign=67e53a4&sv=1",
    player: "23.87M",
    listing_date: "Nov 22, 2024 UTC 13:00",
    game_link: "",
    rank: 2,
  },
  {
    id: "03",
    name: "Major",
    image:
      "https://pbs.twimg.com/profile_images/1808089461768531969/20Nu5XE7_400x400.jpg",
    player: "33.5M",
    listing_date: "",
    game_link: "",
    rank: 2,
  },
  {
    id: "04",
    name: "NotPixel",
    image:
      "https://pbs.twimg.com/profile_images/1820066498477473792/fh5bmvFC_400x400.jpg",
    player: "23.87M",
    listing_date: "",
    game_link: "",
    rank: 2,
  },
];

export default function CurrentMonthAirdrop() {
  return (
    <>
      <div className="mt-5 mb-5 bg-[#1b252e] p-3 rounded-2xl">
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-black text-xl uppercase text-white">
            November Airdrop
          </h1>
          <div className="">
            <Button size="sm" isIconOnly>
              <CourseVideoIcon className="animate-spin" />
            </Button>
          </div>
        </div>
        <div className="grid divide-y divide-[#435160]">
          {gameDatas.map((i, index) => (
            <GameCard2 key={i.id} data={i} serial={index} />
          ))}
        </div>
      </div>
    </>
  );
}

function GameCard2({
  data,
  serial,
}: {
  data: {
    id: string;
    name: string;
    image: string;
    player: string;
    game_link: string;
    rank: number;
    listing_date: string;
  };
  serial: number;
}) {
  return (
    <>
      <div className="flex items-center gap-2 p-2">
        <h1 className="font-bold text-xl">{serial + 1}</h1>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="">
              <Image width={30} height={30} src={data.image} />
            </div>

            <div className="">
              <h6 className="text-xs font-bold flex gap-2 items-center">
                {data.name}
                <div className="w-1 h-1 rounded-full bg-gray-400 inline-block"></div>
                {data.player} Player
              </h6>
              {data.listing_date && (
                <h6 className="text-xs text-gray-500">
                  Listing {data.listing_date}
                </h6>
              )}
            </div>
          </div>

          <div className="">
            <Button
              size="sm"
              as={Link}
              href={data.game_link ?? "https://t.me/crypto2earnapp"}
              target="_blank"
              color="primary"
              className="text-black"
              startContent={<PlayIcon />}
            >
              Play
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
