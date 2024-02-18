import Socials from "@/components/shared/socials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiErrorAlt } from "react-icons/bi";
export default function NotFound() {
  return (
    <main className="w-full flex-1 mt-32 text-center global-padding flex flex-col items-center gap-4">
      <h2 className="flex items-center gap-2">
        Page Not Found <BiErrorAlt className="text-3xl" />
      </h2>
      <Button asChild className="w-fit">
        <Link href="/">Return Home</Link>
      </Button>
      <Socials classNames="text-2xl mt-16" />
    </main>
  );
}
