---
title: 'Rich Content'
date: 2024-07-20T22:51:27+05:30
---
Hugo ships with several built-in shortcodes for rich content, along with a privacy config and a set of simple shortcodes that enable static and no-JS versions of various social media embeds.

YouTube
Below is an example using the built-in youtube shortcode.

{{< youtube ZJthWmvUzzc >}}

Twitter
This example uses the twitter_simple shortcode to output a Tweet. It requires two named parameters user and id.

{{< twitter_simple user="DesignReviewed" id="1085870671291310081" >}}

Alternatively, the tweet shortcode can be used to embed a fully marked up Twitter card.

Gist
The gist shortcode can be used to embed a GitHub Gist. It requires two unnamed parameters: the username and ID of the Gist.

{{< gist nunocoracao 2779792841f7ffa7c7e62dc4d38626d4 >}}

Vimeo
The vimeo_simple shortcode will embed a Vimeo video.

{{< vimeo_simple 48912912 >}}
