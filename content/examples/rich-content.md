---
title: "Rich Content and Hugo Shortcodes"
date: 2024-07-20T22:51:27+05:30
weight: 2
---
Hugo ships with several built-in shortcodes for rich content, along with a privacy config and a set of simple shortcodes that enable static and no-JS versions of various social media embeds.

<!--more-->

## YouTube
Below is an example using the built-in youtube shortcode.

```markdown
{{</* youtube ErMSHiQRnc8 */>}}
```
{{< youtube ErMSHiQRnc8 >}}

## Twitter
This example uses the twitter shortcode to output a Tweet. It requires two named parameters user and id.

```markdown
{{</* twitter user="HugoConf" id="1684306258533441540" */>}}
```
{{< twitter user="HugoConf" id="1684306258533441540" >}}

## Gist
The gist shortcode can be used to embed a GitHub Gist. It requires two unnamed parameters: the username and ID of the Gist.

```markdown
{{</* gist mnjm 5857c03e619f805f579929e0d8b04d34 */>}}
```
{{< gist mnjm 5857c03e619f805f579929e0d8b04d34 >}}

## Vimeo
The vimeo shortcode will embed a Vimeo video.

```markdown
{{</* vimeo 64575379 */>}}
```
{{< vimeo 64575379 >}}


## Highlight
Code block can be highlighted with Hugo's internal highlight shortcode. Available [options](https://gohugo.io/content-management/syntax-highlighting/#highlight-shortcode).

```html
{{</* highlight html */>}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{</* /highlight */>}}
```
