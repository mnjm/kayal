---
title: 'Getting Started'
date: 2024-07-20T22:37:14+05:30
draft: true
---

> - **We'll be using `yml/yaml` format for all examples down below, it is recommend to use `yaml` over `toml` as it is easier to read.**
> - You can find any [YML to TOML](https://www.google.com/search?q=yml+to+toml) converters if needed.

---

## Getting Started 🚀

1. Follow **[Hugo Docs's - Quick Start](https://gohugo.io/getting-started/quick-start/)** guide to install
   <br>(Make sure you install **Hugo >= v0.112.4**)

2. Create a new site
   ```sh
   hugo new site MyFreshWebsite --format yaml
   # replace MyFreshWebsite with name of your website
   ```
   Note:
   - Older versions of Hugo may not support `--format yaml`
   - Read more here about [Hugo Docs's - hugo new site command](https://gohugo.io/commands/hugo_new_site/#synopsis)

After you have created a new site, follow the below steps to add **PaperMod**

### Installing/Updating PaperMod

- Themes reside in `MyFreshWebsite/themes` directory.
- PaperMod will be installed in `MyFreshWebsite/themes/PaperMod`

### Finally set theme as PaperMod in your site config

In `config.yml` add:

```yml {linenos=true}
theme: ["PaperMod"]
```

### Next up - Customizing PaperMod to suit your preferences.

- Your site will be blank after you set up for the very first time.
- You may go through this website's source code - [PaperMod's exampleSite's source](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite)
- Scroll below this page where you will find more specific details about each section.
- Kindly go through all of the pages below to know how to configure PaperMod.

---

## Support 🫶

- Star 🌟 PaperMod's Github repository.
- Help spread the word about PaperMod by sharing it on social media and recommending it to your friends. 🗣️
- You can also sponsor 🏅 on [Github Sponsors](https://github.com/sponsors/adityatelange) / [Ko-Fi](https://ko-fi.com/adityatelange).

---

## Videos featuring PaperMod

You can go through few videos which are available on YouTube for getting to know the creator's thoughts as well as the setup process.

▶️ https://youtube.com/playlist?list=PLeiDFxcsdhUrzkK5Jg9IZyiTsIMvXxKZP

---

## Quick Links

- ### [Papermod - Features](../papermod-features)

- ### [Papermod - FAQs](../papermod-how-to)

- ### [Papermod - Variables](../papermod-variables)

- ### [Papermod - Icons](../papermod-icons)

- ### [ChangeLog](https://github.com/adityatelange/hugo-PaperMod/releases)

---

## Sample `config.yml`

> **Example Site Structure is present here**: [exampleSite](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite/)

**Use appropriately**

```yml
baseURL: "https://examplesite.com/"
title: ExampleSite
paginate: 5
theme: PaperMod

enableRobotsTXT: true
buildDrafts: false
buildFuture: false
buildExpired: false

googleAnalytics: UA-123-45

minify:
  disableXML: true
  minifyOutput: true

params:
  env: production # to enable google analytics, opengraph, twitter-cards and schema.
  title: ExampleSite
  description: "ExampleSite description"
  keywords: [Blog, Portfolio, PaperMod]
  author: Me
  # author: ["Me", "You"] # multiple authors
  images: ["<link or path of image for opengraph, twitter-cards>"]
  DateFormat: "January 2, 2006"
  defaultTheme: auto # dark, light
  disableThemeToggle: false

  ShowReadingTime: true
  ShowShareButtons: true
  ShowPostNavLinks: true
  ShowBreadCrumbs: true
  ShowCodeCopyButtons: false
  ShowWordCount: true
  ShowRssButtonInSectionTermList: true
  UseHugoToc: true
  disableSpecial1stPost: false
  disableScrollToTop: false
  comments: false
  hidemeta: false
  hideSummary: false
  showtoc: false
  tocopen: false

  assets:
    # disableHLJS: true # to disable highlight.js
    # disableFingerprinting: true
    favicon: "<link / abs url>"
    favicon16x16: "<link / abs url>"
    favicon32x32: "<link / abs url>"
    apple_touch_icon: "<link / abs url>"
    safari_pinned_tab: "<link / abs url>"

  label:
    text: "Home"
    icon: /apple-touch-icon.png
    iconHeight: 35

  # profile-mode
  profileMode:
    enabled: false # needs to be explicitly set
    title: ExampleSite
    subtitle: "This is subtitle"
    imageUrl: "<img location>"
    imageWidth: 120
    imageHeight: 120
    imageTitle: my image
    buttons:
      - name: Posts
        url: posts
      - name: Tags
        url: tags

  # home-info mode
  homeInfoParams:
    Title: "Hi there \U0001F44B"
    Content: Welcome to my blog

  socialIcons:
    - name: x
      url: "https://x.com/"
    - name: stackoverflow
      url: "https://stackoverflow.com"
    - name: github
      url: "https://github.com/"

  analytics:
    google:
      SiteVerificationTag: "XYZabc"
    bing:
      SiteVerificationTag: "XYZabc"
    yandex:
      SiteVerificationTag: "XYZabc"

  cover:
    hidden: true # hide everywhere but not in structured data
    hiddenInList: true # hide on list pages and home
    hiddenInSingle: true # hide on single page

  editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link

  # for search
  # https://fusejs.io/api/options.html
  fuseOpts:
    isCaseSensitive: false
    shouldSort: true
    location: 0
    distance: 1000
    threshold: 0.4
    minMatchCharLength: 0
    limit: 10 # refer: https://www.fusejs.io/api/methods.html#search
    keys: ["title", "permalink", "summary", "content"]
menu:
  main:
    - identifier: categories
      name: categories
      url: /categories/
      weight: 10
    - identifier: tags
      name: tags
      url: /tags/
      weight: 20
    - identifier: example
      name: example.org
      url: https://example.org
      weight: 30
# Read: https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs#using-hugos-syntax-highlighter-chroma
pygmentsUseClasses: true
markup:
  highlight:
    noClasses: false
    # anchorLineNos: true
    # codeFences: true
    # guessSyntax: true
    # lineNos: true
    # style: monokai
```

---

## Sample `Page.md`

```yml
---
title: "My 1st post"
date: 2020-09-15T11:30:03+00:00
# weight: 1
# aliases: ["/first"]
tags: ["first"]
author: "Me"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Desc Text."
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---
```

You can use it by creating `archetypes/post.md`

```shell
hugo new --kind post <name>
```
