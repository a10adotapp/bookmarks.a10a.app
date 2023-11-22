import { auth } from "@/lib/auth/auth";
import { sharedClient } from "@/lib/prisma-client";
import { createHash } from "crypto";
import { fileTypeFromBuffer } from "file-type";
import { readFileSync, writeFileSync } from "fs";
import getConfig from "next/config";
import path from "path";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  },
) {
  const requestUrl = new URL(request.url);

  try {
    const session = await auth();

    if (!session) {
      return Response.json({ message: "unauthorized" }, { status: 401 });
    }

    const bookmark = await sharedClient.bookmark.findFirst({
      where: {
        id: Number.parseInt(params.id),
      },
    });

    if (!bookmark) {
      return Response.json({ message: "not found" }, { status: 404 });
    }

    if (!bookmark.imageUrl) {
      return Response.json({ message: "not found" }, { status: 404 });
    }

    const { serverRuntimeConfig } = getConfig();

    if (!bookmark.imageUrl.startsWith("/file")) {
      const response = await fetch(bookmark.imageUrl);

      if (!response.ok) {
        console.error(
          `[${request.method} ${requestUrl.pathname}] err: ${new Error(
            `fetch failed (${JSON.stringify({
              url: bookmark.imageUrl,
            })})`,
          )}`,
        );

        return Response.json(
          { message: "internal server error" },
          { status: 500 },
        );
      }

      const responseData = await response.arrayBuffer();

      const fileName = createHash("sha256")
        .update(new Uint8Array(responseData))
        .digest("hex");

      const fileType = await fileTypeFromBuffer(responseData);

      if (!fileType) {
        console.error(
          `[${request.method} ${requestUrl.pathname}] err: ${new Error(
            `unexpected file type (${JSON.stringify({
              url: bookmark.imageUrl,
            })})`,
          )}`,
        );

        return Response.json(
          { message: "internal server error" },
          { status: 500 },
        );
      }

      const filepath = path.join(
        ...[
          serverRuntimeConfig.PROJECT_ROOT,
          "public/files/bookmarks",
          `${fileName}.${fileType.ext}`,
        ],
      );

      console.log(
        `[${request.method} ${
          requestUrl.pathname
        }] image downloaded (${JSON.stringify({
          filepath,
        })})`,
      );

      writeFileSync(filepath, Buffer.from(responseData));

      const bookmarkUpdated = await sharedClient.bookmark.update({
        where: {
          id: bookmark.id,
        },
        data: {
          imageUrl: `/${path.join(
            ...["files/bookmarks", `${fileName}.${fileType.ext}`],
          )}`,
        },
      });

      bookmark.imageUrl = bookmarkUpdated.imageUrl;
    }

    if (bookmark.imageUrl?.startsWith("/file")) {
      const filepath = path.join(
        ...[serverRuntimeConfig.PROJECT_ROOT, "public", bookmark.imageUrl],
      );

      const image = readFileSync(filepath);

      const fileType = await fileTypeFromBuffer(image);

      return new Response(image, {
        headers: {
          ...(fileType ? { "Content-Type": fileType.mime.toString() } : {}),
        },
      });
    }

    const image = readFileSync(
      path.join(...[serverRuntimeConfig.PROJECT_ROOT, "public/noimage.jpg"]),
    );

    const fileType = await fileTypeFromBuffer(image);

    return new Response(image, {
      headers: {
        ...(fileType ? { "Content-Type": fileType.mime.toString() } : {}),
      },
    });
  } catch (err) {
    console.error(`[${request.method} ${requestUrl.pathname}] err: ${err}`);

    return Response.json({ message: "internal server error" }, { status: 500 });
  }
}
