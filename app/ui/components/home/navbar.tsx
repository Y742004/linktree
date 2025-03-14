import { Button, Image } from "@heroui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-3 top-0 sticky flex justify-between items-center z-20 bg-gray-950">
      <div className="">
        {/* <Image width={120} src="https://bcgame.li/assets/logo/logo.png" /> */}
        <h1 className="font-bold text-3xl">Brave Academy</h1>
      </div>
      <div className="">
        <Button
          size="sm"
          color="primary"
          className="text-white"
          as={Link}
          target="_blank"
          startContent={
            <Image
              width={20}
              height={20}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png"
            />
          }
          href=""
        >
          Telegram
        </Button>
      </div>
    </div>
  );
}
