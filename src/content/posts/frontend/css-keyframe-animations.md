---
title: Create cool animations with keyframes!
slug: css-keyframe-animations
publishDate: 29 Sept 2025
description: How to use CSS keyframe animations
---

## Basic syntax for keyframe animations

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

- The keyframe can go `from`/`to`, but it can also be more specific with percentages to define the steps: `0%`/`25%`/`50%`/`100%`... You can also only specify a `to` or a `from` value. In this case it will start from the element's current value, or end to the element's current value.

- Each keyframe animation needs a name, then it can be used anywhere in the css code, as a value of the `animation` css property, like this:

```css
.element {
  animation: fadeIn 1000ms;
}
```

## Take full benefit from the `animation` property

`animation` needs:

1. the name of the keyframe animation to apply
2. the duration of the animation: the `from` block is applied immediately, then the element transitions smoothly to the `to` block content during that duration.

Optionally, the `animation` property can be assigned other keywords (in any order):

- `infinite` (useful for loading spinners!), or a number to specify how many times we want to repeat the animation
- `linear`/`ease-in-out`... a timing function
- `alternate`/`reverse`: the animation "direction": `reverse` will play the animation from 100% to 0%, `alternate` will alternate (start at 0% the first time, start at 100% the next time)
- a delay. As it requires a time value, it must be specified after the duration.
- a "fill mode": `forwards` will persist the final css of the keyframe animation forwards in time. `backwards` will apply the `from` css properties to the element before the animation starts (eg. if we apply a delay). If we want to persist both the starting css and the ending css, we can use `both`

`animation` is a shorthand property. We could also write:

```css
.element {
  animation-name: fadeIn;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
  /* not very coherent with the previous styles applied */
  animation-fill-mode: forwards;
}
```

## Keyframes are full of possibilities!

- Several keyframes can be applied to the element (but it's usually not recommended because keyframes can overwrite each other).

- The keyframe can be defined anywhere in the css code, doesn't have to be defined before it's used (it's hoisted).
