import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import jlogo from "@/public/j-logo.svg";
import rlogo from "@/public/r-logo.svg";
import note from "@/public/music-note.svg";
import JrLogo from "@/components/shared/jr-logo";
import LogoExplanationTable from "@/components/logo-explanation-table";
import Footer from "@/components/shared/footer";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Logo Explanation | John Rod Dondoyano",
};
export default function LogoExplanation() {
  return (
    <main className="w-full flex-1 text-center global-padding flex flex-col global-gap">
      <h1 className="leading-none">
        <Badge>Logo Explanation</Badge>
      </h1>
      <JrLogo className="size-32 mx-auto" />
      <LogoExplanationTable />
      <Footer />
    </main>
  );
}
