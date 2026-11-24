// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Mathilde Sauvage";
export const SITE_DESCRIPTION = "Welcome to my digital garden!";

/** Names accepted by `components/icons/Vegetable.astro`. */
export type VegetableName =
  | "blueberries"
  | "beetroot"
  | "chili"
  | "mushroom"
  | "pea-pod"
  | "seedling"
  | "gate";

/**
 * The topics of the garden, in menu order.
 * - `slug`: URL segment (`/frontend`, `/frontend/<note>`) and page folder.
 * - `name`: full name (topic list, menu, topic page title).
 * - `shortName`: name in the TopicTag on note cards.
 * - `collection`: content collection holding the topic's notes.
 * - `vegetable`: the topic's drawing; a new topic gets "seedling" until it has its own.
 */
export const TOPICS = [
  {
    slug: "frontend",
    name: "Frontend",
    shortName: "Frontend",
    collection: "frontendPosts",
    vegetable: "blueberries",
  },
  {
    slug: "architecture",
    name: "Architecture",
    shortName: "Architecture",
    collection: "architecturePosts",
    vegetable: "beetroot",
  },
  {
    slug: "js",
    name: "JavaScript / TypeScript",
    shortName: "JavaScript",
    collection: "jsPosts",
    vegetable: "chili",
  },
  {
    slug: "ci-cd",
    name: "CI/CD",
    shortName: "CI/CD",
    collection: "cicdPosts",
    vegetable: "mushroom",
  },
] as const satisfies readonly {
  slug: string;
  name: string;
  shortName: string;
  collection: string;
  vegetable: VegetableName;
}[];

export type Topic = (typeof TOPICS)[number];
export type TopicSlug = Topic["slug"];
export type TopicCollection = Topic["collection"];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((topic) => topic.slug === slug);
}
