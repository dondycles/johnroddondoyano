"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import icon from "@/app/favicon.ico";
import { MdOutlineMenu } from "react-icons/md";

import { ThemeBtn } from "@/components/theme-btn";
import Socials from "./socials";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function Nav() {
  return (
    <header className=" top-0 left-0 w-full nav-padding z-10 backdrop-blur-sm bg-background/80 sticky">
      <div className="flex items-center justify-between ">
        <Link href={"/"} className="font-medium text-2xl ">
          <svg
            className="h-8 w-8 fill-foreground mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1777.93 2814"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path d="M229.19,2814A1012.23,1012.23,0,0,1,0,2787.07c151.68-28.57,270.39-89.19,354.3-181.21C490.62,2456.37,484,2277.67,482.41,2253.78V976.68A364.31,364.31,0,0,1,589.83,717.37c57.89-57.89,131.72-94,211.59-104.35V2255.51c0,198.13-60.15,346.41-178.76,440.72C500.23,2793.57,341.11,2814,229.19,2814ZM897.42,188.06a546.54,546.54,0,0,0,67.39,4.13c99.15,0,198-26.23,286-75.84l1.74-1,1.64-1.12C1365.91,38.44,1470.22,0,1564.23,0c78.78,0,149.84,26.76,211.21,79.53l2.49,2.16q-6.48-.1-13.21-.1c-328.6,0-528.41,174-548.2,477.25l-.1,1.56V1840.14a365,365,0,0,1-107.49,259.65c-57.86,57.91-131.66,94.14-211.51,104.58Z" />
              </g>
            </g>
          </svg>
        </Link>
        <nav className="hidden sm:flex flex-row gap-x-4 items-center ">
          <Button asChild variant={"ghost"}>
            <Link href={"/piano"}>Blogs</Link>
          </Button>

          <DropdownMenu>
            <Button asChild variant={"ghost"}>
              <DropdownMenuTrigger>
                Career <MdOutlineKeyboardArrowDown className="ml-2" />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuItem>Music</DropdownMenuItem>
              <DropdownMenuItem> Web Development</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild variant={"ghost"}>
            <Link href={"/piano"}>About</Link>
          </Button>
          <ThemeBtn />
        </nav>

        <ThemeBtn classNames="sm:hidden ml-auto mr-4" />
        <Sheet>
          <Button asChild size={"icon"}>
            <SheetTrigger className="sm:hidden">
              <MdOutlineMenu className="text-2xl" />
            </SheetTrigger>
          </Button>

          <SheetContent className="flex flex-col gap-4">
            <Link href={"/"} className="font-medium text-2xl ">
              <Image
                src={icon}
                alt="JR"
                width={48}
                height={48}
                className="border-[1px] border-border rounded-full"
              />
            </Link>
            <div className="flex flex-col gap-4 text-xl flex-1">
              <Link href={"/piano"}>Music</Link>
              <Link href={"/piano"}>Blogs</Link>
              <Link href={"/piano"}>About</Link>
            </div>
            <div className="mx-auto">
              <Socials classNames="mx-auto text-2xl" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
