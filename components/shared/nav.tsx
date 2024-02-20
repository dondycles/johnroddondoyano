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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import jrlogo from "@/public/jr-logo.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import JrLogo from "./jr-logo";
export default function Nav() {
  return (
    <header className=" top-0 left-0 w-full nav-padding z-10 backdrop-blur-sm bg-background/80 sticky border-b-border border-b-[1px] ">
      <div className="flex items-center justify-between ">
        <Link href={"/"} className="font-medium text-2xl ">
          <JrLogo className="h-8 w-8" />
        </Link>
        <nav className="hidden sm:flex flex-row gap-x-4 items-center ">
          <Button asChild variant={"ghost"}>
            <Link href={"/piano"}>Blogs</Link>
          </Button>

          <DropdownMenu>
            <Button asChild variant={"ghost"}>
              <DropdownMenuTrigger>
                Portfolio <MdOutlineKeyboardArrowDown className="ml-2" />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuItem>Music</DropdownMenuItem>
              <DropdownMenuItem> Web Development</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeBtn />
        </nav>

        <ThemeBtn classNames="sm:hidden ml-auto mr-4" />
        <Sheet>
          <Button asChild size={"icon"} variant={"ghost"}>
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
