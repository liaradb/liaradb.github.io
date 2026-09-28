export type Author = {
  name: string;
  title?: string;
  email?: string;
  imageUrl?: string;
  socials?: Record<string, string>;
};

const authors: Record<string, Author> = {
  sjohnson: {
    name: "Sean Johnson",
    title: "Principal Software Engineer, LiaraDB maintainer",
    imageUrl: "https://avatars.githubusercontent.com/u/2746299",
    socials: {
      github: "sjohnsonaz",
      linkedin: "sjohnsonaz",
    },
  },
};

export function getAuthor(username: string | undefined): Author | undefined {
  return username ? authors[username] : undefined;
}
