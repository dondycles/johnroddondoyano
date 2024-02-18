import { ReactNode } from "react";

type Achivement = {
  icon: ReactNode;
  descriptions: string[];
};
export default function Achivement({ icon, descriptions }: Achivement) {
  return (
    <div className="bg-background rounded-[0.5rem] p-4 sm:p-8 flex flex-col items-center justify-start gap-8 border">
      <div className="text-8xl">{icon}</div>
      <div className="w-full">
        {descriptions.map((desc, idx) => {
          return (
            <p key={`${idx}+${desc}`} className="font-semibold">
              {desc}
            </p>
          );
        })}
      </div>
    </div>
  );
}
