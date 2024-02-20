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
        <Link href={"https://x.com/dondycles"} target="_blank">
          <FaXTwitter />
        </Link>
        <Link href={"https://facebook.com/dondycles"}>
          <PiFacebookLogo />
        </Link>
        <Link href={"https://instagram.com/dondycles"} target="_blank">
          <PiInstagramLogo />
        </Link>
        <Link href={"https://youtube.com/@johnrod"} target="_blank">
          <PiYoutubeLogo />
        </Link>
        <Link href={"https://tiktok.com/dondycles"} target="_blank">
          <PiTiktokLogo />
        </Link>
        <Link href={"https://github.com/dondycles"} target="_blank">
          <PiGithubLogo />
        </Link>
      </div>
      <p className="text-xs text-muted-foreground mx-auto">
        John Rod Dondoyano 2024
      </p>
    </div>
  );
}
