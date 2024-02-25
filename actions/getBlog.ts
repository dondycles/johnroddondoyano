"use server";

import { client } from "@/lib/sanity";

export const getBlog = async (slug: string) => {
  const postQuery = `*[_type=="blog" && slug.current == $slug][0]{
      title,
      content,
      description,
      _createdAt,
      "slug": slug.current,
      coverImage,
      author,
      _id,
      "comments": *[_type== "comment" && blog._ref == ^._id]
      | 
      order(_createdAt desc) {
        name,
        comment,
        _createdAt,
        _id
      }
    }`;

  const blog = await client.fetch(postQuery, { slug: slug });

  return blog;
};
