---
title: What is Islands architecture?
slug: islands-architecture
publishDate: 7 Nov 2025
description: Not an architecture designed by someone working from an archipelago
---

I built this website with [Astro](https://astro.build/).

Astro helps create fast web applications thanks to its Islands architecture: it renders HTML and only sends JavaScript for interactive components when needed. This article is a quick summary about this type of architecture.

## What is the idea of Islands architecture?

The term “component island” was coined by Etsy’s frontend architect Katie Sylor-Miller in 2019.
The idea was later expanded and documented by Preact creator Jason Miller in 2020.

> The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions […] that can then be “hydrated” on the client into small self-contained widgets, reusing their server-rendered initial HTML.<br>
> — <cite>Jason Miller, 2020</cite>

In Astro, an island is an interactive UI component on an otherwise static HTML page.

A **client island** is an interactive JavaScript UI component that is hydrated separately from the rest of the page.

A **server island** is a UI component that server-renders its dynamic content separately from the rest of the page.

## How does this differ from micro-frontends?

_Same goal:_ breaking an application into independent units.

_Different approach:_ in Islands architecture, the composition is achieved using HTML, rather than with separately deployed frontend applications.

## How does this differ from progressive hydration?

With progressive hydration, you make sure individual widgets on a page are loaded and initialized over time. This reduces initial load cost.

Islands architecture takes this further: each individual region of the page can be loaded in parallel and become interactive independently, without relying on a top-down initialization. A performance issue in one island won't necessarily block other islands from becoming interactive.
