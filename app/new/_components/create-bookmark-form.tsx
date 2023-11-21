"use client";

import { createBookmark } from "@/actions/create-bookmark";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  url: z.string().url("invalid url format"),
});

type FormInputs = z.infer<typeof formSchema>;

export function CreateBookmarkForm({ userId }: { userId: string }) {
  const router = useRouter();

  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  });

  const submit = useCallback(
    async (inputs: FormInputs) => {
      const bookmarkCreated = await toast.promise(
        createBookmark({ userId, url: inputs.url }),
        {
          loading: "Saving...",
          success: (data) => {
            if (!data.success) {
              throw data.error.message;
            }

            return "Finished!";
          },
          error: (err) => {
            return `${err}`;
          },
        },
      );

      if (bookmarkCreated.success) {
        router.push("/");
        router.refresh();
      }
    },
    [router, userId],
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <div className="flex flex-col gap-2">
          <FormField
            name="url"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>

                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <hr className="my-4" />

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
