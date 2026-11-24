---
title: "The power of Maps: stop using Objects for everything!"
slug: map-vs-object
publishDate: 12 Jan 2026
description: Some basics about what a Map is and when to use it
---

I could store key-value pairs in a simple Object. I can retrieve those values, delete keys, and detect whether something is stored at a key. So why the hell should I use a Map instead of an Object???

Discover the power of Maps: less hairy bugs, better developer experience, better performance.

## Anything can be used as a key for a Map

While the keys of an Object must be Strings, any value can be used as key in a Map : a number will remain a number, and you can even use an Object as a key!

On the other hand, Objects automatically convert non-string keys into strings. If you try to use an object as a key, it might seem to work, but in reality, you will store `{[object Object]: "your value"}`, with `object Object` as a key! The next time you set a key with another object, you will simply overwrite your previous value. Good luck debugging those issues!

## Maps are not polluted with built-in keys

Another source of fun bugs is that Object has a prototype. This means it has many default keys: `valueOf`, `toString`, `toLocaleString`, etc. Nothing prevents you from writing `myObject["valueOf"] = "some stuff you want to store"`. I'll let you imagine the surprises that could result from that.
You can prevent this behavior by creating an object with `Object.create(null)` but who actually does that?

Maps don't have this issue. Maps are "clean" at creation time.

## Maps are more comfortable to use than Objects

### Built-in functions make the iteration more natural

In terms of programming comfort, `.keys()`, `.values()`, `.entries()` feel more natural than `Object.keys(myObject)` or `Object.entries(myObject)`.

### Maps keep the insertion order

Unlike Objects, Maps preserve insertion order and ensure consistent performance across all browsers. You can iterate through the elements with a `for (const [key, value] of myMap)` loop, which returns an array of `[key, value]` pairs. This is still simpler than `for (const [key, value] of Object.entries(myObject))`.

### It's easy to get the size of a Map

Just write `myMap.size`!

For an Object, you need `Object.keys(myObj).length`.

## Maps have better performance

Maps are optimized for key-value storage, making them faster than Objects for frequent insertions, deletions, or lookups. If you need to add and remove keys frequently, use Maps.

## When should I keep using an Object?

Use an Object when you need a plain data structure with a well-defined set of keys. For example, if you have many `Events` that all have a `title` and `date` property, Objects are optimized for fast reads and writes. Objects are also better suited for JSON serialization.
