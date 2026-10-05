import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FC } from "react";

const postsDirectory = path.join(process.cwd(), "src/posts");

export interface PostData {
  date?: Date;
  title: string;
  subtitle?: string;
  author?: string;
  image?: string;
  status?: "published" | "draft";
  id: string;
  Markdown: FC;
}

type HeaderData = {
  date?: string;
  title: string;
  subtitle?: string;
  author?: string;
};

function getHeader({ date, ...props }: HeaderData) {
  return {
    date: getDate(date),
    ...props,
  };
}

function getDate(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  try {
    return new Date(value);
  } catch {
    return undefined;
  }
}

/**
 * Get file names under /posts
 */
export const getSortedPostsData = () =>
  fs
    .readdirSync(postsDirectory)
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...getHeader(data as any),
      } as PostData;
    })
    .filter(({ status }) => status != "draft")
    .sort((a, b) => {
      return (a.date?.getTime() ?? 0) < (b.date?.getTime() ?? 0) ? 1 : -1;
    });

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const Markdown = await importMarkdown(id);

  return {
    id,
    Markdown,
    ...getHeader(matterResult.data as any),
  } as PostData;
}

async function importMarkdown(id: string) {
  const fullPath = path.join("../posts", `${id}.mdx`);
  const { default: value } = await import(fullPath);
  return value;
}
