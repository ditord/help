import type { Route } from "../../routes/hy/+types/blogs";
import BlogsMain from "../BlogsMain";
import { metadata } from "~/routes";
import type { Language } from "~/Types";

const lang: Language = "hy";

export function meta({}: Route.MetaArgs) {
  return metadata.blogs[lang];
}

export default function Blogs() {
  return (
    <BlogsMain lang={lang} />
  );
}
