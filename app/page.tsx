import { PiPianoKeysFill } from "react-icons/pi";
import { FaLaptopCode, FaSpotify, FaYoutube } from "react-icons/fa6";
import Achivement from "@/components/cards/achivement";
import Socials from "@/components/shared/socials";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import jrlogo from "@/public/jr-logo.svg";
import jlogo from "@/public/j-logo.svg";
import rlogo from "@/public/r-logo.svg";
import note from "@/public/music-note.svg";
import Image from "next/image";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdEmail, MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

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
    <main className="w-full flex-1 text-center global-padding flex flex-col gap-8">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <Dialog>
            <TooltipTrigger asChild className="w-fit mx-auto">
              <DialogTrigger>
                <Image
                  className="h-32 w-32 fill-foreground  dark:invert"
                  alt="r"
                  src={jrlogo}
                />
              </DialogTrigger>
            </TooltipTrigger>
            <DialogContent>
              <Image
                className="h-24 w-24 fill-foreground mx-auto"
                alt="J"
                src={jrlogo}
              />
              <hr className="bg-muted" />
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex w-full justify-center gap-4">
                        <Image
                          className="h-16 w-fit fill-foreground  dark:invert"
                          alt="JR"
                          src={jlogo}
                        />
                        <Image
                          className="h-16 w-fit fill-foreground  dark:invert"
                          alt="JR"
                          src={rlogo}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      This logo consists my initals, &quot;J&quot; and small
                      &quot;r&quot; for John Rod.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex w-fit gap-4 mx-auto">
                        <div className="bg-foreground/50 h-24 w-[1px] ml-2"></div>
                        <div className="bg-foreground h-16 w-4 -mr-6"></div>
                        <div className="bg-foreground/50 h-24 w-[1px]"></div>
                        <div className="bg-foreground h-16 w-4 -mr-6"></div>
                        <div className="bg-foreground/50 h-24 w-[1px]"></div>
                        <div className="bg-foreground/50 h-24 w-[1px] ml-2"></div>
                      </div>
                    </TableCell>
                    <TableCell>
                      The body of each figure, or letter, resembles black piano
                      keys.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Image
                        className="h-24 w-24 fill-foreground mx-auto  dark:invert"
                        alt="note"
                        src={note}
                      />
                    </TableCell>
                    <TableCell>
                      The curves and sharpness resembles musical notes.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </DialogContent>
          </Dialog>
          <TooltipContent>
            <p>Click the logo to see explanation.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div>
        <h1 className="text-4xl md:text-6xl font-semibold">
          John Rod Dondoyano
        </h1>

        <div className="flex gap-2 flex-wrap justify-center mt-2">
          <Badge variant={"secondary"}>Musician</Badge>
          <Badge variant={"secondary"}>Developer</Badge>
          <Badge variant={"secondary"}>Average</Badge>
        </div>
      </div>
      <h2>
        As a growing pianist on YouTube and an aspiring professional in the
        field of web development, I am driven by a dual passion for music and
        technology, harboring ambitions for a distinguished career trajectory in
        both domains.
      </h2>

      {/* <div className="w-full rounded-[0.5rem] mt-8 space-y-8 ">
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
      </div> */}
      <div className="space-x-4">
        <DropdownMenu>
          <Button asChild>
            <DropdownMenuTrigger>
              Portfolio
              <MdOutlineKeyboardArrowDown className="ml-2" />
            </DropdownMenuTrigger>
          </Button>

          <DropdownMenuContent>
            <DropdownMenuItem>Music</DropdownMenuItem>
            <DropdownMenuItem>Web Development</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" mb-0 mt-auto w-full grid grid-cols-1 xs:grid-cols-3 gap-4 text-sm">
        <div className="  text-left flex flex-col gap-1 text-muted-foreground">
          <p className="font-semibold text-foreground">Socials</p>
          <hr />
          <Link href={"https://instagram.com/dondycles"} target="_blank">
            Instagram
          </Link>
          <Link href={"https://facebook.com/dondycles"} target="_blank">
            Facebook
          </Link>
          <Link href={"https://youtube.com/@johnrod"} target="_blank">
            YouTube
          </Link>
          <Link href={"https://tiktok.com/dondycles"} target="_blank">
            TikTok
          </Link>
          <Link href={"https://x.com/dondycles"} target="_blank">
            X
          </Link>
        </div>
        <div className="  text-left flex flex-col gap-1 text-muted-foreground">
          <p className="font-semibold text-foreground">Buy</p>
          <hr />
          <Link href={"https://payhip.com/johnroddondoyano"} target="_blank">
            Piano & Strings MIDIs
          </Link>
          <Link
            href={"https://mymusicsheet.com/johnroddondoyano"}
            target="_blank"
          >
            Piano Sheets
          </Link>
        </div>
        <div className="  text-left flex flex-col gap-1 text-muted-foreground">
          <p className="font-semibold text-foreground">Watch/Listen</p>
          <hr />
          <Link
            href={
              "https://open.spotify.com/artist/2opN2BRNgnBJIO932Kyr3U?si=3yH2nrluRqqFP1qOzM2TcA"
            }
            target="_blank"
          >
            Spotify
          </Link>
          <Link
            href={
              "https://music.apple.com/us/artist/john-rod-dondoyano/1716913960"
            }
            target="_blank"
          >
            Apple Music
          </Link>
          <Link href={"https://youtube.com/@johnrod"} target="_blank">
            YouTube
          </Link>
          <Link href={"https://tiktok.com/dondycles"} target="_blank">
            TikTok
          </Link>
        </div>
      </div>
      <div className="w-full text-xs text-muted-foreground flex items-center gap-4 flex-wrap-reverse">
        <p className="">John Rod Dondoyano 2024</p>
        <p>
          Inquries? Send it through my{" "}
          <span>
            <Link
              href={"mailto:johnroddondoyano8@gmail.com"}
              target="_blank"
              className="underline"
            >
              email
            </Link>
          </span>
        </p>
      </div>
    </main>
  );
}
