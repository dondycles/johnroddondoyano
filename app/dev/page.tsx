import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandSvelte,
  TbBrandGithub,
  TbBrandSupabase,
  TbBrandWordpress,
  TbBrandFirebase,
} from "react-icons/tb";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import React from "react";
import { Download, ExternalLink } from "lucide-react";
import Footer from "@/components/shared/footer";
import { Button } from "@/components/ui/button";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Web Development | John Rod Dondoyano",
};

export default function Home() {
  const skills = [
    { skill: "HTML", icons: <TbBrandHtml5 /> },
    { skill: "CSS", icons: <TbBrandCss3 /> },
    { skill: "TailwindCSS", icons: <TbBrandTailwind /> },
    {
      skill: "JavaScript",
      icons: <TbBrandJavascript />,
    },
    {
      skill: "TypeScript",
      icons: <TbBrandTypescript />,
    },
    {
      skill: "NextJS",
      icons: <TbBrandNextjs />,
    },
    {
      skill: "ReactJS",
      icons: <TbBrandReact />,
    },
    { skill: "SvelteKit", icons: <TbBrandSvelte /> },
    { skill: "WordPress", icons: <TbBrandWordpress /> },
    { skill: "Supabase", icons: <TbBrandSupabase /> },
    { skill: "Firebase", icons: <TbBrandFirebase /> },
  ];
  const experiences = [
    {
      date: "Jul 2023 - Nov 2023",
      company: "HeroeZ!",
      job: "Front-End Web Dev.",
      img: "/hz.jpg",
      skills: ["NextJS", "NextUI", "ViteJS", "TailwindCSS", "Zustand"],
      desc: "Built a website for showcasing and minting NFTs. I build the website with NextJS while the minting page was built with ViteJS.",
      links: [
        { link: "https://heroe-z-kousei.vercel.app", name: "Main Website" },
        {
          link: "https://herorez-mint-vite.vercel.app/",
          name: "Minting Website",
        },
      ],
    },
    {
      date: "Feb 2023 - May 2023",
      company: "MGHS Solution And Advertising Services",
      job: "Junior Web Dev. (Internship)",
      img: "/mghs.jpg",
      skills: ["WordPress", "Elementor", "MS Excel"],
      desc: "Maintained, updated, and redesigned a client's WordPress website. ",
      links: [
        {
          link: "https://themghs.com",
          name: "Official Website",
        },
      ],
    },
    {
      date: "Jul 2022 - Dec 2022",
      company: "Studio CXGNUS",
      job: "Front-End Web Dev.",
      img: "/studiocxgnus.jpg",
      skills: ["HTML", "CSS", "Vanilla JS", "NextJS", "TailwindCSS"],
      desc: "Built a website for showcasing and minting NFTs. I build the website with Vanilla JS only but later on I learned NextJS and remade it with NextJS.",
      links: [
        {
          link: "https://studiocxgnus-vanilla.vercel.app/",
          name: "Vanilla JS Website",
        },
        {
          link: "https://studiocxgnus-react.vercel.app/",
          name: "React Version Website",
        },
      ],
    },
  ];
  const otherprojects = [
    {
      name: "Expen//Save",
      desc: "A web app for tracking expenses and savings at the same with analytics and history.",
      link: "https://expensave-shadcn.vercel.app",
      skills: [
        "NextJS",
        "Supabase",
        "shadcn/ui",
        "TailwindCSS",
        "TanStack Query",
      ],
      img: "/es.png",
      gh: "https://github.com/dondycles/expensave-shadcn",
    },

    {
      name: "Wheel Of Pearl",
      desc: "Web application you can use to help you decide in life.",
      link: "https://wheel-of-pearl.vercel.app/",
      skills: ["NextJS", "TailwindCSS"],
      img: "/wop.png",
      gh: "https://github.com/dondycles/wheel-of-pearl",
    },
    {
      name: "Tapxiety",
      desc: "A simple web game to ease your anxiety.",
      link: "https://tapxiety.vercel.app/",
      skills: ["NextJS", "NextUI", "TailwindCSS", "Zustand", "Framer Motion"],
      img: "",
      gh: "https://github.com/dondycles/tapxiety",
    },
  ];
  return (
    <main className="w-full flex-1  global-padding flex flex-col global-gap">
      <h1 className="leading-none mx-auto">
        <Badge>Web Development</Badge>
      </h1>
      <p className="max-w-[800px] w-full text-center mx-auto">
        I have this hobby of creating sleek websites and I aspire to be a
        professional in this field.
      </p>
      <Card>
        <CardHeader className="flex-col xs:flex-row items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/avatar1.jpg" />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
          <div className="mx-auto xs:mx-0">
            <CardTitle>John Rod Dondoyano</CardTitle>
            <CardDescription>Front-End Web Developer</CardDescription>
            <CardDescription>johnroddondoyano8@gmail.com</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="indent-4">
            I am a self-taught web developer who pulls up an all-nighter, holds
            a bachelor&apos;s degree in computer engineering. I split my time
            between music and exploring the world of web development.
          </p>
          <br />
          <p className="indent-4">
            I really enjoy developing and designing websites! Learning web
            development is hard at first but later on I managed to enhance my
            knowledge about HTML, CSS, and JavaScript from YouTube tutorials and
            online lessons.
          </p>
        </CardContent>
        <CardFooter className="justify-center gap-2">
          <Button asChild variant={"default"}>
            <Link
              href="/john-rod-dondoyano-resume.pdf"
              target="_blank"
              download
            >
              Resume
              <Download className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
      {/* skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-3  gap-4">
          {skills.map((skill) => {
            return (
              <p key={skill.skill} className="flex flex-row gap-1 items-center">
                {skill.skill}
                <span className="text-2xl flex items-center">
                  {skill.icons}
                </span>
              </p>
            );
          })}
        </CardContent>
      </Card>
      {/* experiences */}
      <Card>
        <CardHeader>
          <CardTitle>Experiences</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex-col items-start flex">
          {experiences.map((exp) => {
            return (
              <React.Fragment key={exp.job}>
                <div className="space-y-4">
                  <div className="flex flex-row gap-4 items-start">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={exp.img} />
                      <AvatarFallback>{exp.company}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg">{exp.job}</p>
                      <p className="">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">
                        {exp.date}
                      </p>
                    </div>
                  </div>
                  <p>{exp.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {exp.skills.map((skill) => {
                      return (
                        <Badge key={skill} variant="default">
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                  {exp.links.length ? (
                    <div className="flex flex-row flex-wrap gap-2 items-center text-sm">
                      {exp.links.map((link) => {
                        return (
                          <Link
                            key={link.link}
                            href={link.link}
                            target="_blank"
                            className="underline flex items-center gap-1 "
                          >
                            {link.name}
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                <Separator className="last:hidden" />
              </React.Fragment>
            );
          })}
        </CardContent>
      </Card>
      {/* projects */}
      <Card>
        <CardHeader>
          <CardTitle>Other Projects</CardTitle>
          <CardDescription>
            These are the projects I made outside of work or academics. In
            short, just for fun.
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-4 flex-col items-start flex">
          {otherprojects.map((project) => {
            return (
              <React.Fragment key={project.name}>
                <div className="space-y-4">
                  <div className="flex flex-row gap-4">
                    <Avatar className="w-16 h-16 bg-black">
                      <AvatarImage src={project.img} />
                      <AvatarFallback>{project.name}</AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2 items-center">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="font-semibold text-lg flex items-center gap-1"
                      >
                        {project.name}
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <Separator orientation="vertical" className="h-4" />

                      <Link
                        href={project.gh}
                        target="_blank"
                        className="text-2xl"
                      >
                        <TbBrandGithub />
                      </Link>
                    </div>
                  </div>

                  <p>{project.desc}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => {
                      return (
                        <Badge key={skill} variant="default">
                          {skill}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                <Separator className="last:hidden" />
              </React.Fragment>
            );
          })}
        </CardContent>
      </Card>

      <Footer />
    </main>
  );
}
