"use client";

import { PiPianoKeysFill } from "react-icons/pi";
import { FaLaptopCode, FaSpotify, FaYoutube } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import Achivement from "@/components/cards/achivement";
import Socials from "@/components/shared/socials";
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
    <main className="w-full flex-1 mt-24 text-center global-padding">
      <svg
        className="h-32 w-32 fill-foreground mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1777.93 2814"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path d="M229.19,2814A1012.23,1012.23,0,0,1,0,2787.07c151.68-28.57,270.39-89.19,354.3-181.21C490.62,2456.37,484,2277.67,482.41,2253.78V976.68A364.31,364.31,0,0,1,589.83,717.37c57.89-57.89,131.72-94,211.59-104.35V2255.51c0,198.13-60.15,346.41-178.76,440.72C500.23,2793.57,341.11,2814,229.19,2814ZM897.42,188.06a546.54,546.54,0,0,0,67.39,4.13c99.15,0,198-26.23,286-75.84l1.74-1,1.64-1.12C1365.91,38.44,1470.22,0,1564.23,0c78.78,0,149.84,26.76,211.21,79.53l2.49,2.16q-6.48-.1-13.21-.1c-328.6,0-528.41,174-548.2,477.25l-.1,1.56V1840.14a365,365,0,0,1-107.49,259.65c-57.86,57.91-131.66,94.14-211.51,104.58Z" />
          </g>
        </g>
      </svg>
      <h1 className="text-4xl md:text-6xl font-semibold mt-8">
        John Rod Dondoyano
      </h1>
      <p className="text-muted-foreground font-thin">
        Musician | Developer | Average
      </p>
      <p className="mt-8">
        With the power of my hands, I can create both melodious piano covers and
        sleek websites.
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
      <footer>
        <Socials classNames="w-full mt-8 text-2xl justify-center" />
      </footer>
    </main>
  );
}
