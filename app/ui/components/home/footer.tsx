import { Button } from "@heroui/react";
import { BellIcon } from "../../icons/bell-icon";
import { SearchIcon } from "../../icons/SearchIcon";
import { PlayIcon } from "../../icons/play-icon";
import { SolarTrashBin2Bold } from "../../icons/trash-icon";
import { LayersIcon } from "../../icons/layer-icon";

const navMenu = [
  {
    name: "Menu",
    icon: <BellIcon className="w-10" />,
  },
  {
    name: "Explore",
    icon: <SearchIcon className="w-10" />,
  },
  {
    name: "TGE",
    icon: <PlayIcon className="w-10" />,
  },
  {
    name: "Exchange",
    icon: <SolarTrashBin2Bold className="w-10" />,
  },
  {
    name: "Profile",
    icon: <LayersIcon className="w-10" />,
  },
];

export default function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 w-full bg-[#161b1f] grid grid-cols-5 z-30">
        {navMenu.map((i) => (
          <Button
            key={i.name}
            fullWidth
            variant="light"
            size="lg"
            className="p-7"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              {i.icon}
              <h6 className="text-xs text-gray-400 font-bold">{i.name}</h6>
            </div>
          </Button>
        ))}
      </div>
    </>
  );
}
