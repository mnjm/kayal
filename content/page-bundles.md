---
title: 'Article / Page Folder Structure'
date: 2024-08-16T18:15:25+05:30
draft: false
hidden: false
externalURL: false
showDate: true
showModDate: true
showReadingTime: true
showTags: true
showPagination: true
invertPagination: true
showToC: false
openToC: false
showComments: false
showHeadingAnchors: true
---

Kayal makes use of  [Page bundles](https://gohugo.io/content-management/page-bundles/) to serve page resources such as images, videos, and audio files.

## Folder Structure

Suppose you have a markdown content file (`posts/awesome-post.md`) what to include a cover image, a (in-content) image, and a video,

**Steps**

1. Create a directory with the same name as your article's markdown file.
2. Inside this directory, create an `index.md` file with your markdown content.
3. Place all assets used by the markdown file in this folder.

Now your folder structure should look like this,

```
content
└── posts
    └── awesome-post
        ├── index.md
        ├── cover-image.jpg
        ├── img.png
        ├── video.mp4
        └── ....
```

## Adding assets to article

You can refer to these assets in your markdown using relative paths.

To add a cover image, include this line in your markdown frontmatter:

```toml
coverImg: "cover-image.jpg"
```

To include images and videos in your content, use the following markdown syntax:

```markdown
![Image](img.png)
![Video](video.mp4)
```
