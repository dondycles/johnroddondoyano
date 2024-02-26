import Footer from "@/components/shared/footer";
import { Badge } from "@/components/ui/badge";
import { Metadata, ResolvingMetadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { imageUrl } from "@/lib/sanity-image";
import Link from "next/link";
import { getBlog } from "@/actions/getBlog";

export const revalidate = 0;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const blog = await getBlog(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.description,
    metadataBase: new URL("https://johnroddondoyano.com/"),
    twitter: {
      title: blog.title,
      description: blog.description,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "website",
      siteName: "John Rod Dondoyano",
      url: "https://johnroddondoyano.com/",
      images: [imageUrl(blog.coverImage).url(), ...previousImages],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);
  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={imageUrl(value).url()}
          alt="Image"
          className="rounded-[0.5rem] mx-auto"
          priority
          height={500}
          width={500}
        />
      ),
    },
  };
  console.log(blog);
  return (
    <main className="w-full flex-1 global-padding flex flex-col global-gap">
      <div className="w-fit mx-auto flex flex-row gap-2 items-center">
        <Link href={"/blogs"}>
          <Badge className="line-clamp-1 w-fit">Blogs</Badge>
        </Link>
        &gt;{" "}
        <Link href={blog.slug}>
          <Badge className="line-clamp-1 w-fit">{blog.title}</Badge>
        </Link>
      </div>
      <div className=" prose  dark:prose-invert max-w-[800px] w-full mx-auto">
        <div>
          <h1 className="mb-0">{blog.title}</h1>
          <p className="mt-0 ">{blog.description}</p>
        </div>
        <p className="text-muted-foreground text-sm">
          Posted by {blog.author} on{" "}
          {new Date(blog._createdAt).toLocaleDateString()}
        </p>
        <Image
          src={imageUrl(blog.coverImage).url()}
          alt={blog.title}
          className="mt-2 rounded-[0.5rem] object-cover w-full aspect-video"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
          width={720}
          height={480}
        />
        <PortableText value={blog.content} components={PortableTextComponent} />
      </div>
      {/* <Card>
        <CardHeader>
          <CardTitle>Leave a comment.</CardTitle>
        </CardHeader>
        <CardContent>
          <CommentForm slug={blog.slug} blogId={blog._id} />
        </CardContent>
      </Card>
      {blog.comments.map((comment: any) => {
        return (
          <div
            key={comment._id}
            className="w-full p-4 rounded-[0.5rem] border-border border-[1px]"
          >
            <p>{comment.name}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(comment._createdAt).toLocaleDateString()}
            </p>
            <p className="mt-4">{comment.comment}</p>
          </div>
        );
      })} */}
      <Footer />
    </main>
  );
}
