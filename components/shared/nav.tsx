"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import icon from "@/app/favicon.ico";
import sheetbyjrimg from "@/public/sheetsbyjr.png";
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
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import JrLogo from "./jr-logo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useModalState } from "@/store";
import { Checkbox } from "../ui/checkbox";
import { ExternalLink } from "lucide-react";
export default function Nav() {
  const [showModal, setShowModal] = useState(false);
  const modalState = useModalState();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (modalState.neverAgain) return;
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [modalState.neverAgain]);
  return (
    <header className=" top-0 left-0 w-full nav-padding z-10 backdrop-blur-sm bg-background/80 sticky border-b-border border-b-[1px] ">
      <div className="flex items-center justify-between ">
        <Link href={"/"} className="font-medium text-2xl ">
          <JrLogo className="size-8" />
        </Link>
        <nav className="hidden sm:flex flex-row gap-x-4 items-center ">
          <Button asChild variant={"ghost"}>
            <Link href={"/blogs"}>Blogs</Link>
          </Button>
          <DropdownMenu>
            <Button asChild variant={"ghost"}>
              <DropdownMenuTrigger>
                Creations <MdOutlineKeyboardArrowDown className="ml-2" />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href={"/music"}>Music</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"/dev"}>Web Development</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild variant={"ghost"}>
            <Link href={"/biography"}>Biography</Link>
          </Button>
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
            <div className="flex flex-col gap-4 flex-1 text-muted-foreground">
              <Link href={"/blogs"}>Blogs</Link>
              <Link href={"/biography"}>Biography</Link>
              <Link href={"/music"}>Music</Link>
              <Link href={"/dev"}>Web Development</Link>
              <Link href={"/logo"}>Logo Explanation</Link>
            </div>
            <div className="mx-auto">
              <Socials classNames="mx-auto text-lg" />
            </div>
          </SheetContent>
        </Sheet>
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="px-2">
            <DialogHeader className="">
              <DialogTitle>My 2nd Channel For Tutorials</DialogTitle>
              <DialogDescription>
                I created another channel dedicated for piano
                tutorials/walk-throughs!
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center justify-center">
                <Image
                  src={sheetbyjrimg}
                  alt="Sheet By JR"
                  width={114}
                  height={114}
                  quality={100}
                  className="border-[1px] border-border rounded-full"
                />
                <Button asChild className="shadow-[0_0_16px_#ffffff88]">
                  <Link
                    target="_blank"
                    href={"https://youtube.com/@sheetsby_jr"}
                  >
                    Visit channel <ExternalLink size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>

              <div className="aspect-video flex overflow-hidden rounded-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ijaoxf5x8Xw?si=biLdrCZMBY840_Fs"
                  title="A Thousand Years"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex items-center space-x-2 mx-auto opacity-50">
                <Checkbox onCheckedChange={modalState.setNeverAgain} />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Never show again
                </label>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
