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
    <main className="w-full flex-1 text-center global-padding">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <Dialog>
            <TooltipTrigger asChild>
              <DialogTrigger>
                <Image
                  className="h-32 w-32 fill-foreground mx-auto"
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
                          className="h-16 w-fit fill-foreground "
                          alt="JR"
                          src={jlogo}
                        />
                        <Image
                          className="h-16 w-fit fill-foreground"
                          alt="JR"
                          src={rlogo}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      This logo consists my initals, "J" and small "r" for John
                      Rod.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="flex w-fit gap-4 mx-auto">
                        <div className="bg-black/50 h-24 w-[1px] ml-2"></div>
                        <div className="bg-black h-16 w-4 -mr-6"></div>
                        <div className="bg-black/50 h-24 w-[1px]"></div>
                        <div className="bg-black h-16 w-4 -mr-6"></div>
                        <div className="bg-black/50 h-24 w-[1px]"></div>
                        <div className="bg-black/50 h-24 w-[1px] ml-2"></div>
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
                        className="h-24 w-24 fill-foreground mx-auto"
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

      <h1 className="text-4xl md:text-6xl font-semibold mt-8">
        John Rod Dondoyano
      </h1>

      <div className="flex gap-2 flex-wrap justify-center mt-2">
        <Badge variant={"secondary"}>Musician</Badge>
        <Badge variant={"secondary"}>Developer</Badge>
        <Badge variant={"secondary"}>Average</Badge>
      </div>
      <h2 className="mt-8">
        As a growing pianist on YouTube and an aspiring professional in the
        field of web development, I am driven by a dual passion for music and
        technology, harboring ambitions for a distinguished career trajectory in
        both domains.
      </h2>
      <div className="w-full rounded-[0.5rem] mt-8 space-y-8 ">
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
      <div>
        <Socials classNames="w-full mt-8 text-2xl justify-center" />
      </div>
    </main>
  );
}
