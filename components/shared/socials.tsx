import { cn } from "@/lib/utils";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import {
  PiFacebookLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiTiktokLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

export default function Socials({
  classNames,
}: {
  classNames?: React.HTMLAttributes<HTMLDivElement>["className"];
}) {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className={cn("flex gap-4 justify-center", classNames)}>
        <Link href={"/"}>
          <FaXTwitter />
        </Link>
        <Link href={"/"}>
          <PiFacebookLogo />
        </Link>
        <Link href={"/"}>
          <PiInstagramLogo />
        </Link>
        <Link href={"/"}>
          <PiYoutubeLogo />
        </Link>
        <Link href={"/"}>
          <PiTiktokLogo />
        </Link>
        <Link href={"/"}>
          <PiGithubLogo />
        </Link>
      </div>
      <p className="text-xs text-muted-foreground mx-auto">
        John Rod Dondoyano 2024
      </p>
    </div>
  );
}
