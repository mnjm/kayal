+++
title = 'Collapse Footnotes'
date = 2026-05-10T00:00:00+05:30
draft = false
hidden = false
externalURL = false
showDate = true
showModDate = true
showReadingTime = true
showTags = true
showPagination = true
invertPagination = false
showToC = true
openToC = false
showComments = false
showHeadingAnchors = true
+++

This page verifies both normal collapsed Markdown rendering and footnotes inside the `collapse` shortcode.

Outer Markdown before the test cases includes **bold text**, `inline code`, and a [link](https://example.com/).

## Closed collapse without footnotes

This paragraph sits outside the collapse and does not use any footnotes.

{{% collapse summary="Closed plain collapse with **bold** and `code`" %}}
Collapsed text without footnotes.

- Bullet item with **strong text**
- Bullet item with a [link](https://example.com/plain)
{{% /collapse %}}

Outer Markdown after the closed plain collapse uses _emphasis_ and regular paragraph rendering.

## Open collapse without footnotes

This paragraph sits outside the open collapse and also does not use footnotes.

{{% collapse summary="Open plain collapse with _emphasis_ and [link](https://example.com/open)" open=true %}}
Collapsed text without footnotes in the default-open case.

1. Ordered item with `inline code`
2. Ordered item with **bold text**
{{% /collapse %}}

Outer Markdown after the open plain collapse includes another [link](https://example.com/docs).

## Closed collapse with footnotes

Normal text with a shared footnote reference.

{{% collapse summary="Closed collapse with footnote and **bold** summary" %}}
Collapsed text with the same footnote reference.[^shared]

> Blockquote content inside the collapsed body.

Additional body text with [Markdown link](https://example.com/footnote-closed).
{{% /collapse %}}

Outer Markdown after the closed footnote collapse includes `more inline code`.

## Open collapse with footnotes

Normal text with a second shared footnote reference.

{{% collapse summary="Open collapse with footnote, `code`, and _emphasis_" open=true %}}
Collapsed text with the same second footnote reference.[^open]

```md
Markdown code fence inside the collapsed body.
```

Additional body text with **strong text** and a [link](https://example.com/footnote-open).
{{% /collapse %}}

Outer Markdown after the open footnote collapse includes **strong text**.

[^shared]: Shared footnote content rendered for both references.
[^open]: Shared footnote content rendered for the default-open collapse references.
