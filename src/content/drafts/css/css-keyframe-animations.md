---
title: CSS Animations
slug: css-animations
publishDate: 29 Sept 2025
description: Fundamentals of CSS animations
---

2 main tools for CSS animations :

- transitions
- keyframe animations

## Keyframe animations

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

the keyframe can go `from`/`to`, but it can also be more specific with percentages to define the steps: `0%`/`25%`/`50%`/`100%`...
we can also only specify a `to` or a `from` value. In this case it will start from the element's current value, or end to the element's current value

each keyframe animation needs a name, then it can be used anywhere in the css code, as a value of the `animation` css property, like this:

```css
.element {
  animation: fadeIn 1000ms;
}
```

`animation` needs:

- the name of the keyframe animation to apply
- the duration of the animation: the `from` block is applied immediately, then the element transitions smoothly to the `to` block content

optionally, the `animation` property can be assigned other keywords (in any order):

- `infinite` (useful for loading spinners), or a number to specify how many times we want to repeat the animation
- `linear`/`ease-in-out`... a timing function
- `alternate`/`reverse`: the animation "direction": `reverse` will play the animation from 100% to 0%, `alternate` will alternate (start at 0% the first time, start at 100% the next time)
- a delay. As it requires a time value, must be specified after the duration
- a "fill mode": `forwards` will persist the final css of the keyframe animation forwards in time. `backwards` will apply the `from` css properties to the element before the animation starts (eg. if we apply a delay). If we want to persist both the starting css and the ending css, we can use `both`

we could also write:

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

several keyframes can be applied to the element (but it's usually not recommended because keyframes can overwrite each other)

the keyframe can be defined anywhere in the css code, doesn't have to be defined before it's used (it's hoisted)
