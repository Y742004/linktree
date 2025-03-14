import { Button, Image } from "@heroui/react";
import { CourseVideoIcon } from "../../icons/course-video-icon";
import { PlayIcon } from "../../icons/play-icon";
import Link from "next/link";

const gameDatas = [
  {
    id: "01",
    name: "Blum",
    image:
      "https://cdn.prod.website-files.com/65b6a1a4a0e2af577bccce96/65ba901600bd81cc8964b9ef_blum-logo.svg",
    player: "41.55M",
    game_link: "",
    rank: 1,
  },
  {
    id: "02",
    name: "Major",
    image:
      "https://pbs.twimg.com/profile_images/1808089461768531969/20Nu5XE7_400x400.jpg",
    player: "33.5M",
    game_link: "",
    rank: 2,
  },
  {
    id: "03",
    name: "PAWS",
    image:
      "https://static-00.iconduck.com/assets.00/user-avatar-alien-icon-1023x1024-p3goxjo6.png",
    player: "28.6M",
    game_link: "",
    rank: 2,
  },
  {
    id: "04",
    name: "Duck Chain",
    image:
      "https://pbs.twimg.com/profile_images/1819182904129486848/KZdyk38F_400x400.jpg",
    player: "7.3M",
    game_link: "",
    rank: 2,
  },
  {
    id: "04",
    name: "Tomarket",
    image:
      "https://img.bitgetimg.com/multiLang/web/cefde21d7e4c74ac7780dd01bb1f190e.jpeg",
    player: "4.5M",
    game_link: "",
    rank: 3,
  },
];

export default function HotGame() {
  return (
    <>
      <div className="mt-5 mb-5 bg-[#1b252e] p-3 rounded-2xl">
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-black text-xl uppercase text-white">Hot Game</h1>
          <div className="">
            <Button size="sm" isIconOnly>
              <CourseVideoIcon className="animate-pulse" />
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

function GameCard() {
  return (
    <>
      <div className="">
        <Image src="https://bc.imgix.net/game/image/15935_Sugar%20rush%201000.png?_v=4&auto=format&dpr=2&w=200" />
        <h6 className="text-xs">Sugar Rush</h6>
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
              <h6 className="text-xs font-bold">{data.name}</h6>
              <h6 className="text-xs text-gray-500">Player {data.player}</h6>
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
