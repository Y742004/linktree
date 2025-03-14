"use client";

import { Tabs, Tab, Card, CardBody, Chip } from "@heroui/react";
import CurrentMonthAirdrop from "./current-month-airdrop";
import HotGame from "./hot-game";
import AcademyOverview from "../academy/academy-overview";

export default function HomeTabs() {
  return (
    <div className="flex w-full flex-col mt-5">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-primary",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-primary",
        }}
      >
        {/* <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <span>
                <b className="animate-pulse">🔥</b> Hot
              </span>
              <Chip size="sm" variant="faded">
                5
              </Chip>
            </div>
          }
        >
          <>
            <CurrentMonthAirdrop />
            <HotGame />
          </>
        </Tab> */}
        <Tab
          key="Academy"
          title={
            <div className="flex items-center space-x-2">
              <span>
                <b className="animate-pulse">🎓</b> Academy
              </span>
              <Chip size="sm" variant="faded">
                20
              </Chip>
            </div>
          }
        >
          <>
            <AcademyOverview />
          </>
        </Tab>
        <Tab
          key="Community"
          title={
            <div className="flex items-center space-x-2">
              <span>
                <b className="animate-pulse">🚀</b> Community
              </span>
              <Chip size="sm" variant="faded">
                20
              </Chip>
            </div>
          }
        >
          <Card>
            <CardBody>Comming Soon!</CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
