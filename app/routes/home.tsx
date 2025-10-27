import type { Route } from "../routes/+types/home";
import metadata from "~/metadata";
import { useLocation } from "react-router";
import { HeroSection, PartnersSection, AdvertSection, BlogsSection, HelpSection } from "~/components";
import type { Language } from "~/Types";
import { useEffect, useState } from "react";

export function meta({ location }: Route.MetaArgs) {
  const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

  return metadata.home[lang];
}

type Blog = {
  title: string;
  image: string;
  id: string;
  link: string;
}

export default function Home() {
  const lang: Language = useLocation().pathname.includes("/hy") ? "hy" : "en";
  const [blogs, setBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    fetch('https://cyberhub.am/wp-json/wp/v2/posts?categories=399&per_page=10&_embed')
      .then(res => res.json())
      // .then(console.log)
      .then(res => setBlogs(res.map((res: any) => (
        {
          title: res?.title?.rendered,
          image: res?._embedded["wp:featuredmedia"][0]?.media_details?.sizes['featured-thumb']?.source_url,
          id: res?.id,
          link: res?.link,
        }
      ))))
  }, [])

  return (
    <main>
      <HeroSection lang={lang} />
      <HelpSection lang={lang} />
      <div className="relative after-shape" />
      <AdvertSection lang={lang} />
      {blogs?.length ? <BlogsSection lang={lang} blogs={blogs} /> : null}
      <PartnersSection lang={lang} />
    </main>
  );
}
