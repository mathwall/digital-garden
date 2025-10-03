---
title: Which font format should I use for my website?
slug: which-font-format-for-my-website
publishDate: 26 Sept 2025
description: A quick guide on font formats
---

Choose WOFF2!

## TTF TrueType Fonts

Developed by Apple on the late 80s. It was the main format used by the MacOS and Windows systems. But it's not compressed so it's quite heavy, affects page load speed.

## OTF OpenType Fonts

Developed by Microsoft and Adobe as an evolution of TTF. High quality -> good for desktop and design projects where you need typographic details. So it's a bit larger than TTF -> affects a bit more the load speed. And the additional features are not necessary for most web apps.

## WOFF2 Web Open Font Format

Developed by Mozilla. A pure web format. It's recommended by W3C.
Based on compressed OTF and TTF with metadata -> it's faster to load (file size -40% compared to TTF). Compatible with all modern browsers. WOFF2 is even more compressed than WOFF. Good balance of quality and speed.

## Other font formats

### EOT Embedded OpenType Fonts

Legacy font format developed by Microsoft specifically for web use. Compatible with older versions fo Internet Explorer. It's a compressed version of TTF and OTF.

### SVG Scalable Vector Graphics Fonts

XML-based vector format. Developed by the W3C, render text as scalable vector images -> graphics maintain high quality accross different resolutions. Good for icons, logos. Not widely supported for standard text on web pages.
