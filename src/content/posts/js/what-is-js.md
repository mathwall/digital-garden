---
title: What is JavaScript, by the way?
slug: what-is-js
publishDate: 9 Jan 2026
description: A reminder about what is JS and ECMAScript
---

As I was looking for new things to learn, I found a book in my library: _You don't know JS Yet_ by Kyle Simpson. This book was a gift from my former co-worker, one of the most talented programmers I've worked with. I had only read some of the chapters since then! I decided to tackle it little by little, section by section and chapter by chapter, as it is very dense but full of valuable information.

As a first step, here is what I learned (partly again) about JS.

## Why JavaScript?

> Java is to JavaScript as ham is to hamster<br>
> — <cite>Jeremy Keith, 2009</cite>

JS was created around 1995 by Brendan Eich, who worked at Netscape. He initially named the language "Mocha". Internally at Netscape, the language was branded as "LiveScript".

But when it was published in March 1996, it was publicly named "JavaScript" for purely marketing reasons:

- "Java" because it was designed to appeal to an audience of mostly Java programmers
- "Script" to refer to a lightweight program
  JavaScript positioned the language as a lightweight alternative to Java, designed to embed inside of pages of this new thing called "the web".

## Who makes JS? TC39 and ECMAScript

Actually, the JavaScript that runs in your browser or in Node.js is only an implementation of the ECMAScript specifications.

**TC39** is the technical committee that manages JavaScript and its official specifications. They meet regularly to vote on proposed changes, which are then submitted to ECMA, the standards organization. The ECMAScript (ES) specification defines JavaScript's syntax and behavior.

### How did we get there?

In March 1996, Netscape implemented the JavaScript engine in its web browser Netscape Navigator 2.0. The browser was a success, and JavaScript was rapidly adopted for web programming. Microsoft then developed JScript, an engine included in Internet Explorer 3.0 in August that same year. This is why Netscape asked **ECMA** (the European Computer Manufacturers Association), the international standards organization for information and communication systems, to standardize JavaScript. In 1997, the ECMAScript standard was created. The document containing JavaScript specifications is Standard ECMA-262. Today, all major browsers and device makers have committed to keeping their JavaScript implementations compliant with the ECMA specifications.
