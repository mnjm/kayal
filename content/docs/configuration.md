---
title: 'Configuration :nut_and_bolt:'
date: 2024-07-21T21:28:49+05:30
draft: false
weight: 2
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
summary: "This page contains configuration instructions for customizing Kayal according to your specific needs."
tags: ["kayal", "config"]
---

The config files that included with Kayal contain all of the possible settings that the theme recognises. By default, many of these are commented out but you can simply uncomment them to activate or change a specific feature.

> The configuration files are provided in TOML format, which is the default syntax used by Hugo. Feel free to convert to YAML or JSON if you wish.

{{< callout >}}
As outlined in the [installation]({{< ref "getting-started#set-up-theme-configuration-files" >}}) instructions, you should adjust your theme configuration by modifying the files in the `config/_default/` folder of your Hugo project and delete the `hugo.toml` file in your project root.
{{< /callout >}}

## Basic Site Configuration

The site configuration is managed through `config/_default/hugo.toml` file.

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/hugo.toml" type="toml" showLineNos=true >}}

## Menus

Menu configuration is managed through `config/_default/menus.toml` file.

Menus appear at the top of the header on your page. Each menu entry includes:

- `name`: unique identifier
- `title`: Displayed text
- `url`: Link destination for the menu item.
- `pre` - This is used as an icon name. All available icons are listed [here](https://github.com/mnjm/kayal/tree/main/assets/icons).
- `weight`: Position within the menu. Lighter weights float to the top or appear first.

Also new icons can be added, Check [Icons Section]({{< ref "advanced-customization/#icons" >}}) in Advanced Customization

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/menus.toml" type="toml" showLineNos=true >}}

## Theme Parameters

Kayal provides large number of configuration options to fit and suite your needs. These configurations are managed through `config/_default/params.toml`.

### Global

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=5 endLine=24 type="toml" showLineNos=true >}}

{{< callout >}}
`logo` is optional and should be the path to the site logo image relative to the `site/assets/` folder with Minimum size of 64x64px.
{{< /callout >}}

### Homepage

By default Kayal uses a profile layout for homepage. You can override this by providing a layout html file in your site's `layout/partials/homepage.html`. Check [here]({{<ref "advanced-customization#custom-homepage" >}}) for more info.

{{< callout >}} The content for the homepage is sourced from `content/_index.md`. {{</ callout >}}

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=33 endLine=51 type="toml" showLineNos=true >}}

{{< callout >}}
`image` is optional and should be a path to the profile image in the `site/assets/` folder. Minimum size: 200x200 px.
{{< /callout >}}

### Article Settings

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=53 endLine=72 type="toml" showLineNos=true >}}

These settings can be overridden by page-specific front matter with the same name. Additionally, two additional front matter parameters are provided:

1. `hidden`: When set to true, hides the page from appearing in the recent homepage section.
2. `externalURL`: Links to third-party published pages as list entries. Specifying a URL prevents generating a content page, linking directly to the third-party website.

### List template settings

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=74 endLine=79 type="toml" showLineNos=true >}}
These settings can be overridden by page-specific front matter (in `_index.md` files for lists) with the same name.

### Taxonomy and Term Settings

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=81 endLine=93 type="toml" showLineNos=true >}}

### Social Links

Social links are provided as a TOML list, with each entry containing
- `name`
- `icon`: Icon name. All available icons are listed [here](https://github.com/mnjm/kayal/tree/main/assets/icons).
- `url`

Also new icons can be added, Check [Icons Section]({{< ref "advanced-customization/#icons" >}}) in Advanced Customization

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=95 type="toml" showLineNos=true >}}
