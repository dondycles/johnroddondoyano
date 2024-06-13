import Footer from "@/components/shared/footer";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img0 from "@/public/gallery/0.webp";
import img1 from "@/public/gallery/1.webp";
import img2 from "@/public/gallery/2.webp";
import img3 from "@/public/gallery/3.webp";
import Image from "next/image";
export const metadata: Metadata = {
  title: " Biography | John Rod Dondoyano",
};

const imgs = [img0, img1, img2, img3];
export default function Biography() {
  return (
    <main className="w-full flex-1 text-center global-padding flex flex-col global-gap">
      <h1 className="leading-none">
        <Badge className="w-fit mx-auto">Biography</Badge>
      </h1>
      <div className="global-y-space mx-auto text-left">
        <p className="indent-8">
          The piano journey began when he started learning to play the piano at
          the tender age of 10. Under the guidance of a skilled teacher , he
          attended 12 sessions, each lasting an hour. These lessons equipped him
          with the fundamental knowledge of reading notes, playing chords,
          understanding dynamics, timing, and more. He quickly progressed and
          was able to play his favorite pop songs by watching YouTube tutorials
          and applying the techniques he had learned. He follows{" "}
          <Link
            href="https://youtube.com/rousseaumusique"
            target="_blank"
            className="text-slate-400"
          >
            Rousseau
          </Link>
          .
        </p>
        <p className="indent-8">
          His piano arrangements are known for being simple and easy to play yet
          enchanting, especially made for the beginners up to intermidiate
          level. His piano covers are accompanied with strings, which are also
          arranged by him, to add an orchestral touch to satisfy the listeners.
          Gathered a total of 40+ Million views on his{" "}
          <Link
            href="https://youtube.com/@johnrod"
            target="_blank"
            className="text-red-500"
          >
            YouTube channel
          </Link>{" "}
          with over 250+ piano covers and over 8k+ volume sales of piano sheets
          on{" "}
          <Link
            href="https://mymusicsheet.com/johnroddondoyano"
            target="_blank"
            className="text-blue-500"
          >
            MyMusicSheet
          </Link>
          .
        </p>
        <p className="indent-8">
          The success he achieved from just playing a piano turned his dreams
          into reality.
        </p>
        <p className="indent-8">
          Another hobby he have is creating websites. He learned basic web
          development through YouTube as well. He follows{" "}
          <Link
            className="text-blue-500"
            href="https://youtube.com/webdevsimplified"
            target="_blank"
          >
            Web Dev Simplified
          </Link>{" "}
          and{" "}
          <Link
            className="text-teal-500"
            href="https://youtube.com/developedbyed"
            target="_blank"
          >
            developedbyed
          </Link>
          . Years later, he started participating in a Web3 project called{" "}
          <Link
            className="text-red-500"
            href="https://studiocxgnus-react.vercel.app/"
            target="_blank"
          >
            {" "}
            CXGNUS
          </Link>{" "}
          which gave him his first successfull achievement in this field.
        </p>
        <p className="indent-8">
          He aspires to be a professional in this field one day.
        </p>
        <hr />
        <p className="text-muted-foreground">
          Influences: Claude Debussy, Zedd, and Taylor Swift.
        </p>
        <p className="text-muted-foreground">
          Instruments: Piano - Roland RP102
        </p>
        <p className="text-muted-foreground">
          Softwares: FL Studio 21, Audacity, MuseScore, and DaVinci Resolve.
        </p>
        <p className="text-muted-foreground">Camera: Samsung Galaxy S23.</p>
      </div>
      <Carousel className=" mx-auto max-w-[600px] w-full aspect-square ">
        <CarouselContent>
          {imgs.map((img) => {
            return (
              <CarouselItem
                key={img.src}
                className="relative w-full aspect-square"
              >
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  src={img}
                  alt="John Rod"
                  className="rounded-[0.5rem]"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Footer />
    </main>
  );
}
