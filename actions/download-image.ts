"use server";

import { createHash } from "crypto";
import { fileTypeFromBuffer } from "file-type";
import { writeFileSync } from "fs";
import getConfig from "next/config";
import path from "path";
import { ActionResult } from "./action-result";

export async function downloadImage(
  url: string,
  dirname?: string,
): Promise<
  ActionResult<{
    imageUrl: string;
  }>
> {
  const { serverRuntimeConfig } = getConfig();

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `fetch failed (${JSON.stringify({ response: response.statusText })})`,
      );
    }

    const responseData = await response.arrayBuffer();

    const fileName = createHash("sha256")
      .update(new Uint8Array(responseData))
      .digest("hex");

    const fileType = await fileTypeFromBuffer(responseData);

    if (!fileType) {
      throw new Error(
        `unexpected file type (${JSON.stringify({
          url,
        })})`,
      );
    }

    const filepath = path.join(
      ...[
        serverRuntimeConfig.PROJECT_ROOT,
        "public/files",
        ...(dirname ? [dirname] : []),
        `${fileName}.${fileType.ext}`,
      ],
    );

    console.log(`[downloadImage] filepath: ${filepath}`);

    writeFileSync(filepath, Buffer.from(responseData));

    return {
      success: true,
      result: {
        imageUrl: `/${path.join(
          ...[
            "files",
            ...(dirname ? [dirname] : []),
            `${fileName}.${fileType.ext}`,
          ],
        )}`,
      },
    };
  } catch (err) {
    console.log(`[downloadImage] err: ${err}`);

    return {
      success: false,
      error: {
        message: `${err}`,
      },
    };
  }
}
