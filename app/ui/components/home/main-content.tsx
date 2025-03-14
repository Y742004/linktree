import { Image } from "@heroui/react";

export default function MainContent() {
  return (
    <div className="mt-5 grid gap-3">
      <div className="grid grid-cols-2 gap-4">
        <ContentCard />
        <ContentCard />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <ContentSmall
          name="Airdrop1"
          image="https://bcgame.li/assets/lottery-BgL2Ay0X.png"
        />
        <ContentSmall
          name="Airdrop2"
          image="https://bcgame.li/assets/racing-BfvulUJj.png"
        />
        <ContentSmall
          name="Airdrop3"
          image="https://bcgame.li/assets/updown-DQe7IPIb.png"
        />
        <ContentSmall
          name="Airdrop4"
          image="https://bcgame.li/assets/bingo-Cj_fMpbj.png"
        />
      </div>
    </div>
  );
}

function ContentCard() {
  return (
    <>
      <div className="bg-[#1b252e] p-3 relative rounded-xl">
        <h1 className="text-xl font-bold">TGE</h1>
        <div className="flex justify-end">
          <Image
            width={150}
            className="w-full ml-auto"
            src="https://bcgame.li/assets/casino-9P3_MIUy.png"
          />
        </div>
      </div>
    </>
  );
}

function ContentSmall({ name, image }: { name?: string; image?: string }) {
  return (
    <>
      <div className="bg-[#1b252e] p-3 rounded-xl">
        <div className="">
          <Image className="w-full ml-auto" src={image} />
        </div>
        <h1 className="font-bold text-center">{name}</h1>
      </div>
    </>
  );
}
