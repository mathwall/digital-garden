# Transform functions

`transform` is a collection of subfunctions that each modify the element in a different way (slide, rotate, stretch, tilt...)
they don't work on inline elements and flow layout

they are cool for performance because they are applied on what the browser has already computed (no need to recompute)

## Translate

`translate`: move the element on the x and y value relatively to its computed position in its layout. When we use a percentage value in `translate`, the percentage refers to the element's own size (not the available space in the parent container)

## Scale

`scale`: multiple the element's size by the given value. We can scale x and y differently. It transforms the entier element and all its descendants

## Rotate

`rotate`: rotate by a nb of degrees

## Skew

`skew`
