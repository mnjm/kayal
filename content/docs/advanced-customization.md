---
title: 'Advanced Customization :toolbox:'
date: 2024-07-22T07:40:43+05:30
draft: false
weight: 3
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

For example, if you want to modify the `single.html` template for articles, you can copy the file from `examplesite/themes/kayal/layouts/_default/single.html` to `examplesite/layouts/_default/single.html` and make modifications there.

Kayal also includes some placeholder partial templates that you can use to extend its capabilities. More details below.

## Custom Homepage

If you want to modify and provide a custom homepage, you can create a `examplesite/layouts/partials/homepage.html` [partial template](https://gohugo.io/templates/partial/) to override the default. This will override the theme's _profile_ partial located in `themes/kayal/partials/home/profile.html`.

## Analytics

### Google Analytics

Kayal supports Google Analytics using Hugo's [Google Analytics embedded template](https://gohugo.io/templates/embedded/#google-analytics). To enable it, provide your Google Analytics ID in the `hugo.toml` config file.

```toml
[services]
  [services.googleAnalytics]
    ID = 'G-MEASUREMENT_ID' # <--- YOUR ID HERE
```

### Other Analytics

If you prefer to use a different analytics provider, you can override the analytics partial and provide your own script. Simply create the file `examplesite/layouts/partials/analytics/custom.html` with the code provided by your analytics provider.

## Comments

To add comments to your articles, Kayal includes support for a comments partial that is included at the base of each article page. Simply provide a `examplesite/layouts/partials/comments.html` containg the code required to display your chosen comments.

You can use either the built-in Hugo _Disqus_ template or provide your own custom code. Refer to the [Hugo documentation](https://gohugo.io/content-management/comments/) for more details.

Once you've added comments to your site, ensure you enable them either in `params.toml` or in the front matter of your pages. Fyi, page-specific settings override those in `params.toml`.

## Overriding the stylesheet

If you wish to modify the site's theme, copy the `examplesite/themes/kayal/assets/css/theme.css` file to `examplesite/assets/css/theme.css`. Modify the stylesheet properties in the copied file.

Psst..., you can include a custom stylesheet by creating `examplesite/assets/css/custom.css` and adding your styles there.

## Custom Head

The theme allows inserting additional code directly into the `<head>` section. Simply provide a `examplesite/layouts/partials/extend-head.html`.

## Icons

If you can't find the icons you need in this [list](https://github.com/mnjm/kayal/tree/main/assets/icons), you can add your own by including the icon's SVG file in `examplesite/assets/icons/`. Kayal will recognize these icons for configurations in `socials` and `menu`.

{{< callout >}}
Modify the SVG file by changing the fill color attributes to `fill="currentColor"` to match Kayal's theme color.
{{< /callout >}}

You can also include these icons in your article content using the [Icon shortcode]({{< ref "shortcodes#icon" >}})
