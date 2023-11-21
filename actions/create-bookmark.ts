"use server";

import { sharedClient } from "@/lib/prisma-client";
import { Bookmark } from "@/prisma/client";
import { JSDOM } from "jsdom";
import { ActionResult } from "./action-result";
import { downloadImage } from "./download-image";

export async function createBookmark({
  userId,
  url,
}: {
  userId: string;
  url: string;
}): Promise<
  ActionResult<{
    bookmark: Bookmark;
  }>
> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `fetch failed (${JSON.stringify({ response: response.statusText })})`,
      );
    }

    const responseData = await response.text();

    const dom = new JSDOM(responseData);

    let imageUrl = await newImageUrls(dom, new URL(url));

    if (imageUrl) {
      const imageDownloaded = await downloadImage(imageUrl, "bookmarks");

      if (imageDownloaded.success) {
        imageUrl = imageDownloaded.result.imageUrl;
      }
    }

    const bookmark = await sharedClient.bookmark.create({
      data: {
        userId,
        url,
        title: dom.window.document.title,
        imageUrl,
      },
    });

    return {
      success: true,
      result: { bookmark },
    };
  } catch (err) {
    console.error(`[createBookmark] err: ${err}`);

    return {
      success: false,
      error: {
        message: `${err}`,
      },
    };
  }
}

async function newImageUrls(
  dom: JSDOM,
  baseUrl: URL,
): Promise<string | undefined> {
  let imageUrl = dom.window.document
    .querySelector(`meta[property="og:image"]`)
    ?.getAttribute("content");

  if (imageUrl) {
    return imageUrl;
  }

  imageUrl = dom.window.document
    .querySelector(`meta[property="twitter:image"]`)
    ?.getAttribute("content");

  if (imageUrl) {
    return imageUrl;
  }

  imageUrl = Array.from(dom.window.document.querySelectorAll("img")).map(
    (img) => {
      if (img.src.startsWith("//")) {
        return baseUrl.protocol + img.src;
      }

      if (img.src.startsWith("/")) {
        return baseUrl.origin + img.src;
      }

      return img.src;
    },
  )[0];

  if (imageUrl) {
    return imageUrl;
  }
}
