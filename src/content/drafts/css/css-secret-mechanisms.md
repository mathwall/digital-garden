Conf by Josh Comeau

# CSS layouts

## Flow layout

"the Microsoft Word algorithm on the web"
think about it as a word processing algorithm:

- limited horizontal space but infinate vertical space
- the layout uses blocks. Within the blocks, we can have sub-selections
- images are considered inline elements

at the time CSS was created, the world wibe web was a collection of hyperlinked documents -> the layout solved this problem

`inline` elements are pacifists -> they don't want to cause any problems, they just sit where they are, don't want to mess with the block direction layout
we can add some padding but can't apply an height

`inline-block`:
"the element generates a block box that will be flowed with surrounding content as if it were a single inline box"

- it's placed on the page like an inline element
- it has a vote when it comes to layout like a block element -> we can use the set of css properties that we can apply to block elements. Now, if we apply a height, it will be applied to the element, and the padding too. The element will grow and push the other elements around it

what is the super power of inline elements vs inline-block? `inline` elements can line-wrap, whereas `inline-block` elements will always look like a block, a rectangle

## Flexbox layout

"distribute a group if items along a primary axis"
it's about distributing a group of items along a primary axis
`flex-direction` rotates the primary axis `row` or `column` -> all the other rules will apply the same but on a different axis
`justify-content`: justify refers to the primary axis and the chunk of content, not the individual items -> how we control their position on the primary axis
`align-items` : each item has its own column (if we are in flex row). We could apply each child the `align-self` property but instead of doing it for every child, we can use `align-items` on the parent and it will apply to all children

## Positioned Layout (absolute, fixed, sticky, relative)

elements aren't tied to their calculated layout
instead, they are anchored to something else

`relative` = relative to its calculated, default position
then, we can add some properties: eg. top 32px shifts the element down by 32 pixels

`absolute` = think about a magazine. The position is defined by the nearest positionned ancestor (the nearest that has a `position` property)? If it goes all the way through the DOM without finding a suitable container, then it uses the initial containing block.

`fixed` = the element disconnects from its calculated layout and instead become anchored to the glass of our viewport

Positioned elements are promoted to sit in front of non-positioned elements -> no need for z-index for them to sit in front

`z-index` is implemented on some but not all the layout modes. If I want to use the property, I need to pair it with one of those layout modes (one of them is relative positioning, flexbox also implements the z-index property)
z-index compares elements within the same stacking context, not globally
how to create a stacking context ? one of the possible ways is to add `position: relative` -> it creates a stacking context with everything that's bellow

## Floating (different layout mode)

## Bonus

`inputs` have a size property, that is measured in characters!
