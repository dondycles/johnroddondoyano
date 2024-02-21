import Achivement from "@/components/cards/achivement";
import Embed from "@/components/embed";
import Footer from "@/components/shared/footer";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { Suspense } from "react";
import { FaLaptopCode, FaSpotify, FaYoutube } from "react-icons/fa6";
import { PiPianoKeysFill } from "react-icons/pi";

export default function Music() {
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
    // {
    //   icon: <FaLaptopCode />,
    //   descriptions: ["2 Projects"],
    // },
  ];

  return (
    <main className="w-full flex-1 text-center global-padding flex flex-col global-gap">
      <h1 className="leading-none">
        <Badge>Music</Badge>
      </h1>
      <p>
        Piano covers that are playable by beginners up to intermediate piano
        players.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 sm:gap-8">
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
      <Card>
        <CardHeader>
          <CardTitle>Most Popular Video</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <p className="text-muted-foreground text-xs text-center">
                Loading
              </p>
            }
          >
            <Embed
              className="aspect-video"
              url="https://www.youtube.com/embed/_TNwN92mw6E?si=fxIaxQ3lFx5fzQJZ"
            />
          </Suspense>
        </CardContent>
        <CardFooter>
          <Link
            className="mx-auto text-muted-foreground"
            href={"https://youtube.com/@johnrod"}
            target="_blank"
          >
            Visit YouTube
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Spotify</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <p className="text-muted-foreground text-xs text-center">
                Loading
              </p>
            }
          >
            <Embed
              className="h-[400px]"
              url="https://open.spotify.com/embed/artist/2opN2BRNgnBJIO932Kyr3U?utm_source=generator&theme=0"
            />
          </Suspense>
        </CardContent>
        <CardFooter>
          <Link
            className="mx-auto text-muted-foreground"
            href={"https://open.spotify.com/artist/2opN2BRNgnBJIO932Kyr3U"}
            target="_blank"
          >
            Visit Spotify
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Piano Sheets</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <p className="text-muted-foreground text-xs text-center">
                Loading
              </p>
            }
          >
            <Embed
              className="aspect-square"
              url="https://www.mymusicsheet.com/johnroddondoyano?viewType=sheet&orderBy=createdAt&page=1"
            />
          </Suspense>
        </CardContent>
        <CardFooter>
          <Link
            className="mx-auto text-muted-foreground"
            href={"https://mymusicsheet.com/johnroddondoyano"}
            target="_blank"
          >
            Visit Website
          </Link>
        </CardFooter>
      </Card>

      <Footer />
    </main>
  );
}
