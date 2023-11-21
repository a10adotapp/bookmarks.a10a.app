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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { zodResolver } from "@hookform/resolvers/zod";
import { Reducer, useCallback, useReducer, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  file: z.string().min(1, "required"),
});

type FormInputs = z.infer<typeof formSchema>;

type ImportState = {
  total: number;
  data: {
    url: string;
    error?: string;
  }[];
};

type ImportStateReducerAction =
  | {
      kind: "set-total";
      value: number;
    }
  | {
      kind: "push";
      dataItem: {
        url: string;
        error?: string;
      };
    }
  | {
      kind: "reset";
    };

const initialImportState: ImportState = {
  total: 0,
  data: [],
};

export function ImportBookmarksForm({ userId }: { userId: string }) {
  const [importState, setImportState] = useReducer<
    Reducer<ImportState, ImportStateReducerAction>
  >((prevState, action) => {
    if (action.kind === "set-total") {
      return {
        ...prevState,
        total: action.value,
      };
    }

    if (action.kind === "push") {
      return {
        ...prevState,
        data: [...prevState.data, action.dataItem],
      };
    }

    if (action.kind === "reset") {
      return initialImportState;
    }

    return prevState;
  }, initialImportState);

  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const fileFieldRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: "",
    },
  });

  const submit = useCallback(
    async (inputs: FormInputs) => {
      setFormDisabled(true);

      const file = fileFieldRef.current?.files?.[0];

      if (!file) {
        setFormDisabled(false);

        return toast.error("Failed to read file");
      }

      const fileReader = new FileReader();

      fileReader.addEventListener("load", async () => {
        await toast.promise(
          new Promise(async (resolve, reject) => {
            if (typeof fileReader.result !== "string") {
              return reject("file must be formatted as JSON");
            }

            const data = JSON.parse(fileReader.result);

            if (!Array.isArray(data)) {
              return reject("file content must be an array");
            }

            setImportState({
              kind: "set-total",
              value: data.length,
            });

            for (const url of data.map((dataItem) => `${dataItem}`)) {
              const bookmarkCreated = await createBookmark({ userId, url });

              setImportState({
                kind: "push",
                dataItem: {
                  url,
                  error: bookmarkCreated.success
                    ? undefined
                    : bookmarkCreated.error.message,
                },
              });
            }

            return resolve(undefined);
          }),
          {
            loading: "Importing...",
            success: (data) => {
              return "Finished!";
            },
            error: (err) => {
              return `${err}`;
            },
          },
        );

        setFormDisabled(false);
      });

      fileReader.readAsText(file);
    },
    [userId],
  );

  return (
    <div className="flex flex-col gap-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <div className="flex flex-col gap-2">
            <FormField
              name="file"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      ref={fileFieldRef}
                      type="file"
                      accept="application/json"
                      disabled={formDisabled}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <hr className="my-4" />

            <Button type="submit" disabled={formDisabled}>
              Submit
            </Button>
          </div>
        </form>
      </Form>

      {importState.total > 0 && (
        <Progress value={(importState.data.length / importState.total) * 100} />
      )}

      <div className="flex flex-col">
        {importState.data.map((dataItem) => (
          <div
            key={dataItem.url}
            className="flex w-full max-w-sm items-center space-x-2"
          >
            <Input value={dataItem.url} readOnly />

            {dataItem.error && (
              <Popover>
                <PopoverTrigger>📛</PopoverTrigger>

                <PopoverContent>{dataItem.error}</PopoverContent>
              </Popover>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
