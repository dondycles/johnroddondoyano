import { Badge } from "@/components/ui/badge";

export default function Biography() {
  return (
    <main className="w-full flex-1 text-center global-padding flex flex-col global-gap">
      <h1 className="leading-none">
        <Badge className="w-fit mx-auto">Biography</Badge>
      </h1>
      <div className="global-y-space max-w-[800px] mx-auto text-left">
        <p className="indent-8">
          The journey began when he started learning to play the piano at the
          tender age of 10. Under the guidance of a skilled teacher , he
          attended 12 sessions, each lasting an hour. These lessons equipped him
          with the fundamental knowledge of reading notes, playing chords,
          understanding dynamics, timing, and more. He quickly progressed and
          was able to play his favorite pop songs by watching YouTube tutorials
          and applying the techniques he had learned.
        </p>
        <p className="indent-8">
          His piano arrangements are known for being simple and easy to play yet
          enchanting, especially made for the beginners up to intermidiate
          level. His piano covers are accompanied with strings, which are also
          arranged by him, to add an orchestral touch to satisfy the listeners.
          Gathered a total of 40+ Million views on his YouTube channel with over
          250+ piano covers.
        </p>
      </div>
    </main>
  );
}
