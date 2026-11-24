import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** Front matter shared by every note collection. */
const noteSchema = z.object({
  title: z.string(),
  slug: z.string(),
  publishDate: z.union([z.string(), z.date()]),
  /** Last meaningful change ("Tended" on the note page); same formats as `publishDate`. */
  updatedDate: z.union([z.string(), z.date()]).optional(),
  /** How much the reader can trust the note right now (see the growth stages guide). */
  stage: z.enum(["seedling", "budding", "evergreen"]).default("seedling"),
  description: z.string(),
});

/** `seedling` | `budding` | `evergreen` */
export type GrowthStage = z.infer<typeof noteSchema>["stage"];

const jsPosts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/js` directory.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts/js" }),
  schema: noteSchema,
});

const frontendPosts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/frontend` directory.
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts/frontend",
  }),
  schema: noteSchema,
});

const cicdPosts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/ci-cd` directory.
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts/ci-cd" }),
  schema: noteSchema,
});

const architecturePosts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/architecture` directory.
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts/architecture",
  }),
  schema: noteSchema,
});

export const collections = {
  jsPosts,
  frontendPosts,
  cicdPosts,
  architecturePosts,
};
