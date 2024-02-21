import Footer from "@/components/shared/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Blogs() {
  return (
    <main className="w-full flex-1 text-center global-padding flex flex-col global-gap">
      <h1 className="leading-none">
        <Badge>Blogs</Badge>
      </h1>
      <p>No blog posts just yet.</p>
      <Button asChild className="w-fit mx-auto">
        <Link href={"/"}>Home</Link>
      </Button>
      <Footer />
    </main>
  );
}
