---
title: 'Shortcodes'
date: 2024-07-20T22:53:59+05:30
showBreadcrumbs: false
summary: "in addition to all the default hugo shortcodes, kayals adds a few extras for additional functionality."
---

In addition to all the default Hugo shortcodes, Kayals adds a few extras for additional functionality.

## Callout

`callout` outputs its contents as a stylised message box within your article. It's useful for drawing attention to important information that you don't want the reader to miss.

| Parameter   | Description |
| ---- | ---- |
| `icon` | **Optional.** the icon to display on the left side.<br>**Default:** `triangle-exclamation` (Check out the [icon shortcode](#icon) for more details on using icons.) |
| `iconColor` | **Optional.** the color for the icon in basic CSS style.<br>Can be either hex values (`#FFFFFF`) or color names (`white`)<br>By default chosen based on the current color theme. |
| `cardColor` | **Optional.** the color for the card background in basic CSS style.<br>Can be either hex values (`#FFFFFF`) or color names (`white`)<br>By default chosen based on the current color theme. |
| `textColor` | **Optional.** the color for the text in basic CSS style.<br>Can be either hex values (`#FFFFFF`) or color names (`white`)<br>By default chosen based on the current color theme. |

**Example 1**
```markdown
{{</* callout */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum diam in lectus efficitur, in consequat purus ultricies.
{{</* /callout */>}}
```
Rendered as:
{{< callout >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum diam in lectus efficitur, in consequat purus ultricies.
{{< /callout >}}

**Example 2**
```markdown
{{</* callout github */>}}
Feel free to show your support by giving a star 🌟 on [GitHub](https://github.com/mnjm/kayal)
{{</* /callout */>}}
```
Rendered as:
{{< callout github >}}
Feel free to show your support by giving a star 🌟 on [GitHub](https://github.com/mnjm/kayal)
{{< /callout >}}

## Code Importer

`codeimport` can be used for importing code from external sources easily without copying and pasting.

| Parameter | Description |
| ---- | ---- |
| `url`     | **Required** URL to an externally hosted code file. |
| `type`    | Code type used for syntax highlighting. |
| `startLine` | **Optional** The line number to start the import from. |
| `endLine` | **Optional** The line number to end the import at.|
| `showLineNos` | **Optional** Whether to show line numbers <br> Default: `false` |

**Example 1**
```markdown
{{</* codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/layouts/shortcodes/mdimport.html" type="go" */>}}
```
Rendered as:
{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/layouts/shortcodes/mdimport.html" type="go" >}}

**Example 2**
```markdown
{{</* codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=95 type="toml" showLineNos=true */>}}

```
Rendered as:
{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=95 type="toml" showLineNos=true >}}

## Collapse

`collapse` shortcode generates an HTML `<details>` element. It allows for collapsible content sections on your Hugo site.

| Parameter | Description |
|-----------|-------------|
| `summary` | The summary text displayed as the clickable title of the collapsible section. |
| `open`    | **Optional** boolean parameter. If set to `true`, the `<details>` element will be initially expanded/open. <br> **Default** `false` |
| `Inner`   | The inner content of the shortcode. This can include any additional text or Markdown content that should be displayed within the collapsible section. |

**Example**

```markdown
{{</* collapse summary="Click to expand" open=true */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum diam in lectus efficitur, in consequat purus ultricies.
{{</* /collapse */>}}
```
Rendered as:
{{< collapse summary="Click to expand" open=true >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum diam in lectus efficitur, in consequat purus ultricies.
{{< /collapse >}}

## Icon

`icon` outputs an SVG icon and takes the icon name as its only parameter. The icon is scaled to match the current text size. [Here]({{< ref "examples/icons" >}}) you can find all available icons.

Also new icons can be added, Check [Icons Section]({{< ref "advanced-customization/#icons" >}}) in Advanced Customization

**Example**
```markdown
GitHub Icon {{</* icon "github" */>}}
```
Rendered as:

GitHub Icon {{< icon "github" >}}

## KaTeX

`katex` shortcode can be used to add mathematical expressions to article content using the KaTeX package. Refer [here]({{< ref "math" >}}) for more info.

**Example 1**
```markdown
{{</* katex */>}}
\\(f(a,b,c) = (a^2+b^2+c^2)^3\\)
```
Rendered as:

{{< katex >}}
\\(f(a,b,c) = (a^2+b^2+c^2)^3\\)


**Example 2**
```markdown
{{</* katex */>}}
$$
\det(A) = a_{11}
\begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix}
- a_{12}
\begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix}
+ a_{13}
\begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}
$$
```
Rendered as:
$$
\det(A) = a_{11} \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12} \begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13} \begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}
$$

## Markdown Importer

`mdimport` allows you to import markdown files from external sources. This is useful for including content from other repositories or websites without having to copy and paste the content.
| Parameter | Description |
| ---- | ---- |
| `url` | **Required** URL to an externally hosted markdown file. |

```markdown
<hr>
{{</* mdimport url="https://raw.githubusercontent.com/mnjm/mnjm/master/README.md" */>}}
<hr>
```
Rendered as:
<hr>
{{< mdimport url="https://raw.githubusercontent.com/mnjm/mnjm/master/README.md" >}}
<hr>

## Mermaid

`mermaid` can be used for create diagrams and visualizations using text and code. It uses [**Mermaid.js**](https://mermaid.js.org/) which is a JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams.

Refer [here]({{< ref "examples/diagram.md" >}}) for more examples.

**Example**
```markdown
{{</* mermaid */>}}
graph TD
    B[Boil Water] --> C[Add Tea Powder]
    C --> D[Add Milk]
    D --> E[Add Sugar]
    E --> F[Strain]
    F --> G[Drink]
    G --> |Repeat|B
{{</* /mermaid */>}}
```
Rendered as:
{{< mermaid >}}
graph TD
    B[Boil Water] --> C[Add Tea Powder]
    C --> D[Add Milk]
    D --> E[Add Sugar]
    E --> F[Strain]
    F --> G[Drink]
    G --> |Repeat|B
{{< /mermaid >}}
