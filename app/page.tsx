"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { PiPianoKeysFill } from "react-icons/pi";
import { FaLaptopCode, FaSpotify, FaYoutube } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import Achivement from "@/components/cards/achivement";
export default function Home() {
  const achievements = [
    {
      icon: <FaYoutube />,
      descriptions: ["200k+ Subscribers", "55m+ views", "250+ Piano Covers"],
    },
    {
      icon: <PiPianoKeysFill />,
      descriptions: ["150+ Piano Sheets", "8.2k+ Sales Volume"],
    },
    {
      icon: <FaSpotify />,
      descriptions: ["10k+ Listeners", "70k+ Yearly Streams"],
    },
    {
      icon: <FaLaptopCode />,
      descriptions: ["2 Projects"],
    },
  ];
  return (
    <ScrollArea>
      <main className="h-full w-full flex-1 mt-32 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold">
          John Rod Dondoyano
        </h1>
        <p className="text-muted-foreground font-thin">
          Musician | Developer | Average
        </p>
        <p className="mt-8">
          With the power of my hands, I can create both melodious piano covers
          and sleek websites.
        </p>
        <div className="w-full rounded-[0.5rem] mt-8 space-y-8 ">
          <p className="font-semibold text-2xl flex justify-center items-center">
            Achievements <GiAchievement className="text-4xl" />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-8">
            {achievements.map((ach, idx) => {
              return (
                <Achivement
                  key={`${idx}`}
                  icon={ach.icon}
                  descriptions={ach.descriptions}
                />
              );
            })}
          </div>
        </div>
      </main>
    </ScrollArea>
  );
}