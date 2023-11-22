"use server";

import { auth } from "@/lib/auth/auth";
import { sharedClient } from "@/lib/prisma-client";
import { Bookmark } from "@/prisma/client";
import { JSDOM } from "jsdom";
import { ActionResult } from "./action-result";

export async function createBookmark({ url }: { url: string }): Promise<
  ActionResult<{
    bookmark: Bookmark;
  }>
> {
  try {
    const session = await auth();

    if (!session) {
      throw new Error("unauthorized");
    }

    const response = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(
        `fetch failed (${JSON.stringify({ response: response.statusText })})`,
      );
    }

    const responseData = await response.text();

    const dom = new JSDOM(responseData);

    const bookmark = await sharedClient.bookmark.create({
      data: {
        userId: session.user.id,
        url,
        title: dom.window.document.title,
        imageUrl: await newImageUrl(dom, new URL(url)),
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

async function newImageUrl(
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

  console.log(
    Array.from(dom.window.document.querySelectorAll("img")).map(
      (img) => img.src,
    ),
  );

  imageUrl = Array.from(dom.window.document.querySelectorAll("img"))
    .filter((img) => {
      if (!img.src) {
        return false;
      }

      if (img.src.includes(".svg")) {
        return false;
      }

      if (img.src.includes(".gif")) {
        return false;
      }

      return true;
    })
    .map((img) => {
      if (img.src.startsWith("//")) {
        return baseUrl.protocol + img.src;
      }

      if (img.src.startsWith("/")) {
        return baseUrl.origin + img.src;
      }

      return img.src;
    })[0];

  if (imageUrl) {
    return imageUrl;
  }
}
