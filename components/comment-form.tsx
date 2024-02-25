"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import { addComment } from "@/actions/addComment";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  comment: z
    .string()
    .min(1, {
      message: "Comment cannot be empty.",
    })
    .max(200, { message: "Max of 200 characters." }),
  _id: z.string(),
  name: z.string().min(1, {
    message: "Name cannot be empty.",
  }),
  email: z.string().email().min(1, {
    message: "Email cannot be empty.",
  }),
  slug: z.string(),
});

export function CommentForm({
  blogId,
  slug,
}: {
  blogId: string;
  slug: string;
}) {
  const route = useRouter();
  // const { mutate: mutateComment, isPending } = useMutation({
  //   mutationKey: ["addComment", slug],
  //   mutationFn: async (values: z.infer<typeof formSchema>) => onSubmit(values),
  //   onSuccess: () => {
  //     location.replace("#comment");
  //   },
  // });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
      _id: blogId,
      email: "",
      name: "",
      slug: slug,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { error } = await addComment(values);
    if (error) return error;
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        id="comment"
        // onSubmit={form.handleSubmit((values: z.infer<typeof formSchema>) =>
        //   mutateComment(values)
        // )}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="questions or suggestions" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={form.formState.isSubmitting}
            className="ml-auto mr-0"
            type="submit"
          >
            Comment
          </Button>
        </>
      </form>
    </Form>
  );
}
