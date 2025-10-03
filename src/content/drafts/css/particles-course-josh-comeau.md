DOM elements are a finite resource : Google recommends that the entire page should have a maximum of 1500 DOM nodes

## Containment strategies

When creating particles with a `top` and `left` value, we end up with particles overflowing on the right and bottom sides
It is because we are controlling the position of the element's top-left corner, whereas the percentages refer to the size of the container

### Solution

1. adjust the anchor point of the element
   instead of positioning the particle element based on its top-left corner, anchor it based on its center point
   for that, we can use `transform: translate(-50%, -50%)``
   but this doesn't prevent overflow
2. perfect containment

- create a new container for the element, which is inset by half of the element's size
  -> the element is still overflowing, but from the nested container
  downside: we need to know how large the element is
  if we don't know, we can use JS getBoundingClientRect to measure the element, or try a grid-based solution with a hidden copy of the element

## Unsupported CSS rules

If we want to use a CSS rule that has few support, we can test what it looks like in browsers that don't support it by simply removing it
Then, we can decide to provide a fall-back value, eg.:

```
.thing {
  /* This will be applied on browsers that don't support overflow clip */
  overflow: hidden;
  overflow: clip;
}
```

Or, to apply an alternative set of styles with `@supports`, eg.:

```
.parent {
  display: grid;
  gap: 1rem;
}
@supports not (gap: 1rem) {
  /*
    Any CSS in here will be applied only if the “gap”
    property is unsupported.
  */
  .child {
    margin-inline: 0.5rem;
  }
}
```

Careful sometimes the feature is recognized by the browser but not fully supported -> can give weird results

To know if a feature is supported among your user's browsers, use caniuse! It has a cool feature where you can connect your Google Analytics account and use your own data to create the % of support

## Use transform instead of top-left to animate your element

`transform` is one of the most optimized properties in the CSS language, so browsers easily handle the workload of updating the UI dozens of times per second
the animation will be smoother if we use `transform: translate(${x}px, ${y}px)` instead of `top` and `left` to define the end position of the element
because it produces the illusion that the display has more pixels than it actually does -> makes animations feel more fluid
careful, transforms can't be used on elements that contain text (`scale`)
