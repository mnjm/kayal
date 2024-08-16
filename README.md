# Kayal

Kayal is a Hugo theme designed to be minimal and lightweight, with markdown-ish aesthetics for personal blog sites.

<p styles="font-size: 2em; font-weight:bold;" align="center">🌐<a href="https://mnjm.github.io/kayal/">Demo site</a></p>
<p align="center">
<img src="https://github.com/mnjm/kayal/actions/workflows/main.yaml/badge.svg" alt="Demo Site GH Pages">
<img src="https://img.shields.io/github/license/mnjm/kayal" alt="GitHub License">
<img src="https://img.shields.io/github/languages/code-size/mnjm/kayal" alt="GitHub code size in bytes">
<a href="https://themes.gohugo.io/themes/kayal/"><img src="https://img.shields.io/badge/Hugo--Themes-@Kayal-blue" alt="Kayal"></a>
</p>

| Desktop | Mobile |
| ---- | ---- |
|![Desktop](https://github.com/mnjm/kayal/blob/main/images/tn.png?raw=true)|![Mobile](https://github.com/mnjm/kayal/blob/main/images/mobile.png?raw=true)|

Source for the Demo site is available in [exampleSite](https://github.com/mnjm/kayal/tree/exampleSite) branch.

## Features
- Clean and Responsive Design
- Light and Dark Color Modes: Automatically adjusts based on browser preferences and/or manual toggle.
- Profile Homepage
- Customizable Configuration: Easily adjust settings to personalize
- Shortcodes: Includes Callouts, Markdown and Code import from 3rd Party sites.
- KaTeX Support
- Mermaid Diagrams Support
- Client-side search powered by [Fuse.js](https://www.fusejs.io/)
- Cross-linking: Ability to link posts on third party sites.
- RSS Feed
- Table of Contents
- Code Copy
- Heading Anchors
- Google Analytics
- SVG Icons from FontAwesome 6
- SEO Friendly.
- Breadcrumbs
- Article Cover image
- Responsive Image optimization
- Extensibility: Includes placeholders for
    - Custom Homepage
    - Other Analytics
    - Comments
    - Custom CSS
    - Custom header
- Site hosted assets / no CDNs
- And many more...

## Installation
Kayal supports several installation methods: as a git submodule, a Hugo Module, or through manual installation.

Detailed instructions on how to install Kayal can be found in [Installation](https://mnjm.github.io/kayal/docs/getting-started/) on the demo site. Here's a quick guide on how to install the theme as a git submodule:

1. In your Hugo site directory, run the following command:

    ```bash
    git submodule add -b main https://github.com/mnjm/kayal.git themes/kayal
    ```

2. Copy config files from `themes/kayal/config/_default` to `config/_default` at the root of your Hugo project. Make necessary configuration changes in these files. Refer to [Configuration](https://mnjm.github.io/kayal/docs/configuration/) on the demo site for more information.
3. Remove `hugo.toml` if present, and build the site.

## Configuration

The config files included with Kayal contain all possible settings recognized by the theme. By default, many of these settings are commented out, but you can simply uncomment them to activate or modify.

Refer to [Configuration](https://mnjm.github.io/kayal/docs/configuration/) on the demo site for more details.

## Contribution
Found a bug or have a new feature idea? Create an issue to let me know, or even better, submit a pull request directly!

## Addendum
While building this theme, I constantly referred to the source codes of [Blowfish](https://github.com/nunocoracao/blowfish) and [Hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod). The idea for using markdown aesthetics came from [Archie](https://github.com/mnjm/archie), another Hugo theme.

## License
This theme is released under the [MIT License](./LICENSE).
