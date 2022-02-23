---
layout: page
title: Tags
permalink: /tags/
---

<h1><small>Tags</small></h1>

{% assign tag_names = "" | split: "|"  %}
{% for posts_by_tag in site.tags %}
{% assign tag_names = tag_names | push: posts_by_tag.first %}
{% endfor %}
{% assign tag_names = tag_names | sort %}

{% include tags_cloud.html tag_names=tag_names %}

---

{% include posts_by_tags.html %}

---

{% include post_internal_links.html %}
