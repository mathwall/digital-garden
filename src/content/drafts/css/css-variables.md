css variables are inheritable -> when we define a custom property on a given element, all of its descendants can access its value
they are only available to the element thy're defined on and its descendants

for theme variables, it's common to hand them on the to-level `html`tag, which makes them global, but they are not global by default

`:root` == `html`

we can access the css variables in JS with `getPropertyValue`, and update it in JS with `setProperty`
