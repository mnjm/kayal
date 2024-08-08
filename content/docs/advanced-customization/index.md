---
title: 'Advanced Customization :toolbox:'
date: 2024-07-22T07:40:43+05:30
draft: false
weight: 3
coverImg: "cover.webp"
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
summary: "This page contains all advanced changes that Kayal supports."
tags: ["kayal", "advanced config", "partial"]
---

There are many ways you can make advanced changes to Kayal. Read below to learn more about what can be customized and the best way to achieve your desired result.

## Hugo's Lookup Order

{{< callout >}}
**TLDR**: Never directly edit theme files; instead, copy the file/template that you want to edit to your project root and make edits there.
{{< /callout >}}

If you don't like or want to modify something in the theme, it's best to follow Hugo's practice. Never modify the files in the `themes/kayal` directory; rather, copy the file that you want to modify to your site's directory and make modifications there. Hugo's file lookup order will prioritize your site's files over the theme's.

For example, if you want to modify the `single.html` template for articles, you can copy the file from `mywebsite/themes/kayal/layouts/_default/single.html` to `mywebsite/layouts/_default/single.html` and make modifications there.

Kayal also includes some placeholder partial templates that you can use to extend its capabilities. More details below.

## Custom Homepage

If you want to modify and provide a custom homepage, you can create a `mywebsite/layouts/partials/homepage.html` [partial template](https://gohugo.io/templates/partial/) to override the default. This will override the theme's _profile_ partial located in `themes/kayal/partials/home/profile.html`.

## Analytics

### Google Analytics

Kayal supports Google Analytics using Hugo's [Google Analytics embedded template](https://gohugo.io/templates/embedded/#google-analytics). To enable it, provide your Google Analytics ID in the `hugo.toml` config file.

```toml
[services]
  [services.googleAnalytics]
    ID = 'G-MEASUREMENT_ID' # <--- YOUR ID HERE
```

### Other Analytics

If you prefer to use a different analytics provider, you can override the analytics partial and provide your own script. Create `mywebsite/layouts/partials/analytics/custom.html` file with the code provided by your analytics provider.

## Comments

If you want to add comments to your site, Kayal can be extended to support any comments provider. Create a `mywebsite/layouts/partials/comments.html` partial template file containing the code needed to display comments from your chosen provider.

You can use either the built-in Hugo _Disqus_ template or provide your own custom code. Refer to the [Hugo documentation](https://gohugo.io/content-management/comments/) for more details.

After adding comments to your site, enable them in `params.toml` by setting `showComments: true`. Note that page front matter settings override those in params.toml, so to disable comments on a specific page, set `showComments: false` in its front matter.

## Overriding the stylesheet

If you wish to modify the site's theme, copy the `mywebsite/themes/kayal/assets/css/theme.css` file to `mywebsite/assets/css/theme.css`. Modify the stylesheet properties in the copied file.

Psst..., you can include a custom stylesheet by creating `mywebsite/assets/css/custom.css` and adding your styles there.

## Custom Head

The theme allows inserting additional code directly into the `<head>` section. Create `mywebsite/layouts/partials/extend-head.html` file the additional code, this will added at the end of `<head>` section.

## Icons

If you can't find the icons you need in this [list]({{< ref "examples/icons" >}}), you can add your own by including the icon's SVG file in `mywebsite/assets/icons/`. Kayal will recognize these icons for configurations in [socials]({{< ref "configuration#social-links" >}}) and [menu]({{< ref "configuration#menus" >}}).

{{< callout >}}
Modify the SVG file by changing the fill color attributes to `fill="currentColor"` to match Kayal's theme color.
{{< /callout >}}

You can also include these icons in your article content using the [Icon shortcode]({{< ref "shortcodes#icon" >}})

## Overriding Favicons

You can override the default [favicon]({{< ref "configuration#favicons" >}}) inclusion. Create `mywebsite/layouts/partials/favicons.html` file with favicon HTML tags and assets. This will be injected into the site <head> in place of the default inclusion.
