import Image from "next/image";
import jrlogo from "@/public/jr-logo.svg";
import { cn } from "@/lib/utils";
export default function JrLogo({
  className,
}: {
  className: React.HTMLAttributes<HTMLDivElement>["className"];
}) {
  return (
    <Image
      priority
      quality={100}
      alt="JR"
      src={jrlogo}
      className={cn("dark:invert", className)}
    />
  );
}
