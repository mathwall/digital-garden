import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog-posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.union([z.string(), z.date()]),
    description: z.string(),
  }),
});

export const collections = { posts };
