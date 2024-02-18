"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import icon from "@/app/favicon.ico";
import { MdOutlineMenu } from "react-icons/md";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { ThemeBtn } from "@/components/theme-btn";
import Socials from "./socials";
export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <Link href={"/"} className="font-medium text-2xl ">
        <Image src={icon} alt="JR" width={48} height={48} />
      </Link>
      <div className="hidden sm:flex flex-row gap-x-8  items-center ">
        <Link href={"/piano"}>Music</Link>
        <Link href={"/piano"}>Blogs</Link>
        <Link href={"/piano"}>About</Link>
        <ThemeBtn />
      </div>
      <Sheet>
        <SheetTrigger className="sm:hidden">
          <MdOutlineMenu className="text-3xl" />
        </SheetTrigger>
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
          <ThemeBtn classNames="ml-auto mr-0" />
          <Socials classNames="mx-auto text-2xl" />
          <p className="text-muted-foreground text-xs text-center">
            John Rod Dondoyano
          </p>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
