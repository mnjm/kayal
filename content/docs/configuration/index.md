---
title: 'Configuration :nut_and_bolt:'
date: 2024-07-21T21:28:49+05:30
draft: false
weight: 2
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
summary: "This page contains configuration instructions for customizing Kayal according to your specific needs."
tags: ["kayal", "config"]
---

The config files that included with Kayal contain all of the possible settings that the theme recognises. By default, many of these are commented out but you can simply uncomment them to activate or change a specific configuration.

> The configuration files are provided in TOML format, which is the default syntax used by Hugo. Feel free to convert to YAML or JSON if you wish.

{{< callout >}}
As outlined in the [installation]({{< ref "getting-started#set-up-theme-configuration-files" >}}) instructions, you should adjust your theme configuration by modifying the files in the `config/_default/` folder of your Hugo project and delete the `hugo.toml` file in your project root.
{{< /callout >}}

## Basic Site Configuration

The site configuration is managed through the `config/_default/hugo.toml` file. The following outlines all of the settings that Kayal expects to function properly.

Note: the variable names provided in this table use dot notation to simplify the TOML data structure ie. `outputs.home` refers to

```toml
[outputs]
    home = ...
```

| Name                         | Default                  | Description                                                                                       |
| ---------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------- |
| `theme`                      | `"kayal"`                | The theme to use. Should be set to `"kayal"` for the theme to work. <br> **Required** if you didn't use Hugo Modules to install Kayal. |
| `baseURL`                    | `Not Set`                | **Required** The URL to the root of the website.                                                  |
| `languageCode`               | `en-us`                  | Language ISO 639 code for your site.                                                              |
| `title`                      | `Not Set`                | **Required**: The site’s title.                                                                    |
| `pagination.pagerSize`       | `5`                      | The number of articles listed on each page of the article listing.                               |
| `enableEmoji`                | `true`                   | Enables emoji processing in markdown.                                                             |
| `enableRobotsTXT`            | `true`                   | Enables the creation of a `robots.txt` file, which allows search engines to crawl your site.       |
| `summaryLength`              | `0`                      | Number of words for auto-generating an article summary if not provided in the front matter. A value of 0 uses the first sentence. |
| `buildDrafts`                | `true`                   | Includes pages with draft status while building the site.                                         |
| `buildFuture`                | `true`                   | Includes pages with future dates while building the site.                                         |
| `services.googleAnalytics`  | `Not Set`                | Used to enable Google Analytics service. Check [here]({{< ref "advanced-customization#google-analytics" >}}) for more details. |
| `outputs.home`              | `["HTML", "RSS", "JSON"]` | The types of outputs to generate for the homepage. RSS is required to create RSS feeds, and JSON is needed for the search functionality. <br> Kayal requires all 3 to be enabled. |

You can find the `hugo.toml` config file for this site [here](https://github.com/mnjm/kayal/blob/exampleSite/config/_default/hugo.toml) for reference.

## Menus

Menus appear at the top of the header on your page. Menu configuration is managed through `config/_default/menus.toml` file as a toml list.

Each menu entry in the toml list includes:

| Name | Description |
| ---- | ---- |
| `name` | Unique Identifier |
| `title` | Displayed text |
| `url` | Link destination for the menu item. |
| `pre` | _(Optional)_ Icon name to be used. All available icons are listed [here]({{< ref "examples/icons" >}}). |
| `weight` | Determines the position within the menu. Items with lighter weights appear higher or first |

Here's menu config file for this site.
{{< codeimport url="https://raw.githubusercontent.com/mnjm/kayal/exampleSite/config/_default/menus.toml" type="toml" showLineNos=true >}}

{{< callout >}}
Add a trailing `/` to local URLs. For example `/posts/` (not `/posts`). This is required for `highlightCurrentMenu` to work.
{{< /callout >}}

Also new icons can be added, Check [Icons Section]({{< ref "advanced-customization/#icons" >}}) in Advanced Customization

## Theme Parameters

Kayal provides large number of configuration options to fit and suite your needs. These configurations are managed through `config/_default/params.toml`.

You can find the `params.toml` config file for this site [here](https://github.com/mnjm/kayal/blob/exampleSite/config/_default/params.toml) for reference.

### Global

| Name                        | Default               | Description                                                                                                               |
| --------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `logo`                      | `Not set`             | **Optional**: Path to the site logo image located in the `assets/` folder in your site's root. <br> Displayed before the Site Title in the header. Minimum size: 64x64px. |
| `description`               | `"A Hugo Theme"`      | Site's description. This will be used by search engines when listing your site.                                           |
| `copyright`                 | `Not set`             | **Optional**: Copyright owner's name.                                                                                     |
| `optimizeImg`               | `true`                | Whether to optimize images per view port scales.                                                                          |
| `enableCodeCopy`            | `true`                | Whether to enable the copy button in code blocks.                                                                         |
| `showThemeSwitcher`         | `true`                | Show the icon that switches between dark and light themes when clicked.                                                   |
| `defaultTheme`              | `"auto"`              | Default theme to start from. Valid options: `"light"`, `"dark"`, `"auto"`. <br> If `"auto"`, Kayal will detect the previous preference. If no previous preference is found, Kayal will use the browser's preference. |
| `highlightCurrentMenu`      | `true`                | When enabled, highlights the current menu item in the menu bar.                                                           |
| `mainSections`              | `["posts"]`           | The sections to display in the recent articles list. If not provided, the section with the most articles is used.         |
| `removeAttribution`         | `false`               | Whether to remove Hugo and theme attribution in the footer.                                                               |
| `showHeadingAnchors`        | `true`                | Whether to show anchor links in headings. Can be overridden by Page-specific `showHeadingAnchors` in its front matter.    |
| `enableSearch`              | `true`                | Whether to enable search functionality. `JSON` homepage output is required for this to function. Check [site config]({{< ref "#basic-site-configuration" >}}). |

### Homepage

| Name              | Default    | Description                                                                         |
| ----------------- | ---------- | ----------------------------------------------------------------------------------- |
| `showRecent`      | `true`     | Whether to display recent items on the homepage.                                   |
| `showRecentLabel` | `"Featured"` | Label for the heading of recent items.                                              |
| `showRecentItems` | `4`        | Number of recent items to display.                                                   |
| `showMore`        | `true`     | Whether to show a "Show more" link at the end of the recent items section.         |
| `showMoreDest`    | `"/posts"` | Destination URL for the "Show more" link.                                           |

{{< callout >}} The content for the homepage page is read from `content/_index.md`. {{</ callout >}}

By default Kayal uses a profile layout for homepage. You can override this by providing a layout html file in your site's `layout/partials/homepage.html`. Check [here]({{<ref "advanced-customization#custom-homepage" >}}) for more info.

#### Profile settings

| Name      | Default                   | Description                                                                                     |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------- |
| `headline` | `Not set` | **Optional**: A brief, one-line intro displayed at the top of your profile.                  |
| `image`   | `Not set`      | **Optional**: Path to the profile image located in the `assets/` folder in your site's root. Minimum size: 200x200px. |
| `where`   | `"right"`                 | Position of the image. Valid options: `"right"`, `"left"`, `"top"`.                            |

### Article Settings

| Name                | Default    | Description                                                                                                      |
| ------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| `showDate`          | `true`     | Whether to display the published date in the article.                                                            |
| `showModDate`       | `true`     | Whether to display the modified date in the article.                                                             |
| `showReadingTime`   | `true`     | Whether to display the estimated reading time in the article.                                                     |
| `showTags`          | `true`     | Whether to display tags mentioned in the front matter.                                                            |
| `showPagination`    | `true`     | Whether to display next/previous article links in the article footer.                                             |
| `invertPagination`  | `true`     | Whether to reverse the direction of next/previous article links.                                                  |
| `showToC`           | `true`     | Whether to display the table of contents on article pages.                                                        |
| `openToC`           | `false`    | Whether to automatically open the Table of Contents when the page is loaded.                                      |
| `showComments`      | `false`    | Whether to display comments. Check [Comments]({{< ref "advanced-customization#comments" >}}) for more details.  |
| `showBreadcrumbs`   | `false`    | Whether to display breadcrumbs in the article.                                                                   |

These settings can be overridden by the page's front matter using the same names. For example, if you don't want to display the ToC on a specific page, you can add `showToC: false` to its front matter, as shown below:

```yaml
---
title: 'Example'
date: 2024-07-21T21:28:49+05:30
showToC: false
---
<!-- Markdown content -->
```

Additionally, a few extra front matter parameters are available:

| Name | Description |
| ---- | ---- |
| `coverImg` | The cover image for the article. This will be displayed at the top of the article page. This should be served as page resouce. Refer [here]({{< ref "page-bundles.md" >}})|
| `hidden` | When set to `true`, this hides the page from appearing in the recent homepage section. |
| `externalURL` | Links to third-party published pages as list entries. Specifying a URL prevents generating a content page and directly links to the third-party website. |

### List template settings

| Name             | Default | Description                                    |
| ---------------- | ------- | ---------------------------------------------- |
| `groupByYear`    | `false` | Whether to group articles by year.            |
| `showBreadcrumbs` | `false` | Whether to display breadcrumbs.               |
| `cardView`       | `true`  | Whether to display pages in a card view.      |
| `showRSS`        | `false`  | Whether to display RSS link.                  |

These settings can be overridden by page's front matter (in `_index.md` files for lists) with the same name.

### Taxonomy and Term Settings

#### Taxonomy settings

| Name        | Default | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| `showCount` | `true`  | Whether to display counts for each taxonomy term.           |
| `cardView`  | `true`  | Whether to display taxonomies as a grid of cards.            |

#### Term settings

| Name             | Default | Description                                    |
| ---------------- | ------- | ---------------------------------------------- |
| `groupByYear`    | `false` | Whether to group articles by year.            |
| `showBreadcrumbs` | `false` | Whether to display breadcrumbs.               |
| `cardView`       | `true`  | Whether to display pages in a card view.      |
| `showRSS`        | `false`  | Whether to display RSS link.                  |

### Social Links

Social links are configured as a TOML list, with each entry containing:

| Name   | Default | Description                                                                              |
| ------ | ------- | ---------------------------------------------------------------------------------------- |
| `name` | Unique Identifier | The unique identifier for the social link.                                               |
| `icon` | Icon name | The icon name. All available icons are listed [here]({{< ref "examples/icons" >}}). |
| `url`  | Link destination | The URL for the social media link.                                                          |

Example:
```toml {linenos=true}
[[social]]
name = "LinkedIn"
icon = "linkedin"
url = "https://linkedin.com"

[[social]]
name = "Email"
icon = "email"
url = "mailto:name@example.com"
```

Also, New icons can be added. Check the [Icons Section]({{< ref "advanced-customization/#icons" >}}) in the Advanced Customization documentation.

## Favicons

Place favicon assets in the `static` folder of your site (`mywebsite/static`). Use the filenames listed below. If you use [favicon.io](https://favicon.io), it will automatically generate these filenames for you.

```
static/
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon.ico
└── site.webmanifest
```
To override the default favicon inclusion, see [Overriding Favicons]({{< ref "advanced-customization#overriding-favicons" >}}).
