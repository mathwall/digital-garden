import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cssPosts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/css` directory.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts/css" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.union([z.string(), z.date()]),
    description: z.string(),
  }),
});

const cicdPosts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/ci-cd` directory.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts/ci-cd" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.union([z.string(), z.date()]),
    description: z.string(),
  }),
});

const architecturePosts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/architecture` directory.
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts/architecture",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.union([z.string(), z.date()]),
    description: z.string(),
  }),
});

export const collections = { cssPosts, cicdPosts, architecturePosts };
