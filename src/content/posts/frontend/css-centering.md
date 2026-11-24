---
title: How to center an element with position layout
slug: css-centering-trick
publishDate: 9 Oct 2025
description: A cool trick to easily center elements that have position absolute
---

```css
#my-element {
  position: absolute;
  inset: 0;
  width: 10px;
  height: 10px;
  margin: auto;
}
```

`inset` sets `top`, `left`, `right`, `bottom` to the same value.

With `inset: 0`, the element wants to stretch to fill the entire container, so that it's 0px from each edge.

Careful! `inset` is not supported on Internet Explorer.

If we want the element to be centered instead of stretched, we need to set it a fixed size, because the CSS rendering engine solves the contradiction between inset 0 and the fixed width by prioritizing the width constraint.

Finally, `margin: auto` centers the element instead of anchoring it by default to the top left in a left-to-right language page (-> top right in a right-to-left language).
