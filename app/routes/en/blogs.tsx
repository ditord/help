import type { Route } from "../../routes/en/+types/blogs";
import BlogsMain from "../BlogsMain";
import { metadata } from "~/routes";
import type { Language } from "~/Types";

const lang: Language = "en";

export function meta({}: Route.MetaArgs) {
  return metadata.blogs[lang];
}

export default function Blogs() {
  return (
    <BlogsMain lang={lang} />
  );
}
