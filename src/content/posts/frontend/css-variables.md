---
title: Understand CSS variables
slug: css-variables
publishDate: 29 Sept 2025
description: Good-to-know things about CSS variables
---

## CSS variables are inheritable

They are only available to the element they're defined on and its descendants.

For theme variables, it's common to hand them on the top-level `html`tag, which makes them global, but they are not global by default.

`:root` == `html`

## Access CSS variables in JS

We can access the css variables in JS with `getPropertyValue`, and update it in JS with `setProperty`
