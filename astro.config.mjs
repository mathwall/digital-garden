// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import rehypeExternalLinks from "rehype-external-links";

/**
 * Display names for the code block label (CodeBlock's `.mg-code__file` bar).
 * A language missing here (plain text included) gets no label.
 */
const CODE_LANGUAGE_NAMES = {
  css: "CSS",
  html: "HTML",
  svg: "SVG",
  xml: "XML",
  js: "JavaScript",
  javascript: "JavaScript",
  jsx: "JSX",
  ts: "TypeScript",
  typescript: "TypeScript",
  tsx: "TSX",
  json: "JSON",
  sh: "Shell",
  shell: "Shell",
  bash: "Shell",
  zsh: "Shell",
  yaml: "YAML",
  yml: "YAML",
  md: "Markdown",
  markdown: "Markdown",
  mdx: "MDX",
  astro: "Astro",
  diff: "Diff",
};

/**
 * Shiki transformer: wraps each highlighted `<pre>` in
 * `<figure class="code">`, with a `<figcaption>` naming the language
 * when it is known. Applies to Markdown and MDX notes alike.
 */
const codeFigure = {
  name: "code-figure",
  root(root) {
    const name = CODE_LANGUAGE_NAMES[this.options.lang?.toLowerCase()];
    const caption = name
      ? [
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [{ type: "text", value: name }],
          },
        ]
      : [];
    return {
      ...root,
      children: [
        {
          type: "element",
          tagName: "figure",
          properties: { className: ["code"] },
          children: [...caption, ...root.children],
        },
      ],
    };
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://mathwall.github.io",
  //   base: "/digital-garden",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      // Shiki has no SVG grammar: highlight ```svg fences as XML while
      // keeping "svg" as their language (so the label reads "SVG").
      langAlias: { svg: "xml" },
      transformers: [codeFigure],
    },
    remarkPlugins: [remarkGfm, remarkSmartypants],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
    ],
  },
});
