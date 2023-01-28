---
layout: page
title: Things I like
permalink: /things_i_like/
---

Here are things I like and occasionally revisit. There may be worth reading or checking if you don't know.
The idea comes from [Things I Love by Khanlou](http://khanlou.com/love/).

<hr>

{% for item in site.data.things_i_like %}
<h2>{{ item.category }}</h2>
<ul style="list-style: none; margin-left: 0;">
{% for link in item.links %}
<li><a href="{{ link.url }}">{% include icons/link.html %} {{ link.title }}</a></li>
{% endfor %}
</ul>
{% endfor %}
