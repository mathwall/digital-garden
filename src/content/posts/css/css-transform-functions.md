---
title: CSS Transform Functions
slug: transform-functions
publishDate: 9 Oct 2025
description: A basic title for a basic post about basics on transform functions
---

```css
.element {
  transform: translateX(100px) rotate(20deg);
  transform-origin: 0 -250px;
}
```

`transform` is a collection of subfunctions that each modify the element in a different way (slide, rotate, stretch, tilt...).

<strong>They are cool for performance because they are applied on what the browser has already computed (no need to recompute).</strong>

But they don't work on inline elements and flow layout.

## Translate

`translate` moves the element on the `x` and `y` value relatively to its computed position in its layout.

When we use a percentage value in `translate`, the percentage refers to the element's own size (not the available space in the parent container).

## Scale

`scale` multiplies the element's size by the given value. We can scale `x` and `y` differently. It transforms the entire element and all its descendants.

## Rotate

`rotate` rotates the element by a number of degrees.

## Skew

`skew` distorts the element in a weird way. Not sure to ever need it but it exists.
