"use server";
// import { previewClient } from "@/lib/sanity";
import { revalidatePath } from "next/cache";
export const addComment = async (data: {
  _id: string;
  comment: string;
  email: string;
  name: string;
  slug: string;
}) => {
  try {
    // await previewClient.create({
    //   _type: "comment",
    //   blog: {
    //     _type: "reference",
    //     _ref: data._id,
    //   },
    //   name: data.name,
    //   email: data.email,
    //   comment: data.comment,
    // });
  } catch (error) {
    return { error: error };
  }
  revalidatePath(`/blogs/${data.slug}`);
  return { success: "ok" };
};
