import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import jlogo from "@/public/j-logo.svg";
import rlogo from "@/public/r-logo.svg";
import note from "@/public/music-note.svg";
export default function LogoExplanationTable() {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex w-full justify-center gap-4">
              <Image
                className="h-16 w-fit fill-foreground  dark:invert"
                alt="j"
                src={jlogo}
              />
              <Image
                className="h-16 w-fit fill-foreground  dark:invert"
                alt="r"
                src={rlogo}
              />
            </div>
          </TableCell>
          <TableCell>
            This logo consists my initals, &quot;J&quot; and small &quot;r&quot;
            for John Rod.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex w-fit gap-4 mx-auto">
              <div className="bg-foreground/50 h-24 w-[1px] ml-2"></div>
              <div className="bg-foreground h-16 w-4 -mr-6"></div>
              <div className="bg-foreground/50 h-24 w-[1px]"></div>
              <div className="bg-foreground h-16 w-4 -mr-6"></div>
              <div className="bg-foreground/50 h-24 w-[1px]"></div>
              <div className="bg-foreground/50 h-24 w-[1px] ml-2"></div>
            </div>
          </TableCell>
          <TableCell>
            The body of each figure, or letter, resembles black piano keys.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Image
              className="h-24 w-24 fill-foreground mx-auto  dark:invert"
              alt="note"
              src={note}
            />
          </TableCell>
          <TableCell>
            The curves and sharpness resembles musical notes.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
