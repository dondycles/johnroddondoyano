import { cn } from "@/lib/utils";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import Link from "next/link";

export default function Socials({
  classNames,
}: {
  classNames?: React.HTMLAttributes<HTMLDivElement>["className"];
}) {
  return (
    <div className="flex flex-col">
      <div className={cn("flex gap-4", classNames)}>
        <Link href={"/"}>
          <FaSquareXTwitter />
        </Link>
        <Link href={"/"}>
          <FaSquareFacebook />
        </Link>
        <Link href={"/"}>
          <FaSquareInstagram />
        </Link>
        <Link href={"/"}>
          <FaSquareYoutube />
        </Link>
      </div>
      <p className="text-xs text-muted-foreground mt-4 mx-auto">
        John Rod Dondoyano
      </p>
    </div>
  );
}
