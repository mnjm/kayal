---
title: 'Configuration'
date: 2024-07-21T21:28:49+05:30
draft: true
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

The config files that ship with Kayal contain all of the possible settings that the theme recognises. By default, many of these are commented out but you can simply uncomment them to activate or change a specific feature.

> Configuration files bundled with the theme are provided in TOML format as this is the default Hugo syntax. Feel free to convert your config to YAML or JSON if you wish

{{< callout >}}
As outlined in the [installation]({{< ref "getting-started#set-up-theme-configuration-files" >}} instructions, you should adjust your theme configuration by modifying the files in the `config/_default/` folder of your Hugo project and delete the `hugo.toml` file in your project root.
{{< /callout >}}

## Basic Site Configuration

The site configuration is managed through `config/_default/hugo.toml` file.

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/hugo.toml" type="toml" >}}

## Menus

Menu configuration is managed through `config/_default/menus.toml` file.

The menus are displayed in the header at the top of the page. Each entry con contain

- `name` - Name / Title that is displayed.
- `url` - URL where the menu will link to.
- `pre` - This is used as an icon id. All available icons are listed [here](https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/hugo.toml). Also new icons can be added, Check [here](TODO).
- `weight` - Position within Menus. Lighter menus float top / first.

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/menus.toml" type="toml" >}}

## Theme Parameters

Kayal provides large number of configuration options to fit and suite your needs. These configurations are managed through `config/_default/params.toml`.

### Global

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=5 endLine=24 type="toml" >}}

### Homepage

By default Kayal will use a profile layout for homepage. You can override this by providing a layout html file in your site's `layout/partials/homepage.html`. Check [here](TODO) for more info.

{{< callout >}} Homepage's content will be populated from `content/_index.md`. {{</ callout >}}

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=33 endLine=51 type="toml" >}}

### Article

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=53 endLine=72 type="toml" >}}

These settings can be overridden by Page specific front matter with same name. Along site these params, 2 additional page specific front matter params are provided.

1. `hidden` - when set to true, Kayal will hide that page from appearing in Homepage's recent
2. `externalURL` - Link a third party site published published pages as list entries. Providing a URL will prevent a content page being generated and any references to this article will link directly to the third-party website.

### List template settings

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=74 endLine=79 type="toml" >}}
These settings can be overridden by Page specific front matter (in `_index.md` file for the list) with same name.

### Taxonomy and Term settings
{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=81 endLine=93 type="toml" >}}

### Social Links

Social links are provided as a TOML list with each entry containing
- `name`
- `icon` - Icon name. All available icons are listed [here](https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/hugo.toml). Also new icons can be added, Check [here](TODO).
- 'url'

{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/main/config/_default/params.toml" startLine=95 type="toml" >}}
