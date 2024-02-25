"use client";

import { getBlog } from "@/actions/getBlog";
import { CommentForm } from "@/components/comment-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/lib/sanity";
import { imageUrl } from "@/lib/sanity-image";
import { PortableText } from "@portabletext/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect } from "react";

export default function SlugComponent({
  initialBlogData,
}: {
  initialBlogData: any;
}) {
  const slug = initialBlogData.slug;
  const queryClient = useQueryClient();
  const { data } = useQuery({
    initialData: initialBlogData,
    queryFn: async () => await getBlog(initialBlogData.slug),
    queryKey: ["blog", initialBlogData.slug],
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  const postQuery = `*[_type=="blog" && slug.current == $slug][0]`;

  useEffect(() => {
    client.listen(postQuery).subscribe((update) => {
      queryClient.invalidateQueries({
        queryKey: ["blog", { slug: slug }],
      });
      console.log(update);
    });
  }, []);

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

  return (
    <>
      <div className=" prose  dark:prose-invert max-w-[800px] w-full mx-auto">
        <div>
          <h1 className="mb-0">{data.title}</h1>
          <p className="mt-0 ">{data.description}</p>
        </div>
        <p className="text-muted-foreground text-sm">
          Posted by {data.author} on{" "}
          {new Date(data._createdAt).toLocaleDateString()}
        </p>
        <Image
          src={imageUrl(data.coverImage).url()}
          alt={data.title}
          className="mt-2 rounded-[0.5rem] object-cover w-full aspect-video"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
          width={720}
          height={480}
        />
        <PortableText value={data.content} components={PortableTextComponent} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Leave a comment.</CardTitle>
        </CardHeader>
        <CardContent>
          <CommentForm slug={data.slug} blogId={data._id} />
        </CardContent>
      </Card>
      {data.comments.map((comment: any) => {
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
      })}
    </>
  );
}
