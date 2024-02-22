import Footer from "@/components/shared/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/lib/sanity";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { imageUrl } from "@/lib/sanity-image";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Blogs | John Rod Dondoyano",
};

type Blog = {
  title: string;
  description: string;
  _createdAt: string;
  slug: string;
  coverImage: string;
};

async function getBlogs() {
  const query = `*[_type=="blog"] | order(_createdAt desc) {
    title,
    description,
    _createdAt,
    "slug": slug.current,
    coverImage
  }`;

  const blog = await client.fetch(query);

  return blog;
}

export default async function Blogs() {
  const blogs: Blog[] = await getBlogs();

  return (
    <main className="w-full flex-1 text-center global-padding flex flex-col global-gap">
      <h1 className="leading-none">
        <Badge>Blogs</Badge>
      </h1>
      {blogs ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 global-gap">
          {blogs.map((blog) => {
            return (
              <Link key={blog.slug} href={"/blogs/" + blog.slug}>
                <Card className=" h-full ">
                  <CardHeader>
                    <div className="relative w-full aspect-video mb-4">
                      <Image
                        src={imageUrl(blog.coverImage).url()}
                        alt={blog.title}
                        className="object-cover rounded-[0.5rem]"
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    </div>
                    <CardTitle>{blog.title}</CardTitle>
                    <CardDescription>{blog.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          <p>No blog posts just yet.</p>
          <Button asChild className="w-fit mx-auto">
            <Link href={"/"}>Home</Link>
          </Button>
        </div>
      )}

      <Footer />
    </main>
  );
}
