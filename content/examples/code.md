---
title: 'Code Blocks Highlights'
date: 2024-07-29T10:08:36+05:30
weight: 3
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: true
openToC: false
showComments: false
showHeadingAnchors: true
---

This page provides examples on how to include code blocks with syntax highlighting.

<!--more-->

## Inline Code

To include inline code, use single backticks:
```markdown
This is `Inline code`.
```

Rendered as:

This is `Inline Code`.

## Code block with no highlights

For a basic code block without syntax highlighting, use the following:
{{< highlight markdown >}}

```
// ... code
```
{{< /highlight >}}

Rendered as:

```
#include <stdio.h>
int main(void)
{
    printf("Hello World\n");
    return 0;
}
```

## Code block with highlights

Mention the language for syntax highlighting, right next to the opening code fence:

{{< highlight markdown >}}
```c
// ... code
```
{{< /highlight >}}

Rendered as:

```c
#include <stdio.h>
int main(void)
{
    printf("Hello World\n");
    return 0;
}
```

## Code block with highlights and line numbers

{{< highlight markdown >}}
```c {linenos=true}
// ... code
```
{{< /highlight >}}

Rendered as:

```c {linenos=true}
#include <stdio.h>
int main(void)
{
    printf("Hello World\n");
    return 0;
}
```

{{< callout >}}
`linenos=inline` is _not_ supported.
{{< /callout >}}

## Code with highlighted lines.

{{< highlight markdown >}}
```c {linenos=true, hl_lines=[1,4]}
// ... code
```
{{< /highlight >}}
Rendered as:
```c {linenos=true, hl_lines=[1,4]}
#include <stdio.h>
int main(void)
{
    printf("Hello World\n");
    return 0;
}
```
