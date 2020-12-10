---
layout: page
title: Things I like
permalink: /things_i_like/
---

Here are things I like and I occasionally revisit. There may be worth reading or checking if you don't know.
The idea comes from [Things I Love by Khanlou](http://khanlou.com/love/).

---

{% for item in site.data.things_i_like %}
<h2>{{ item.category }}</h2>
<ul>
{% for link in item.links %}
<li><a href="{{ link.url }}">{{ link.title }}</a></li>
{% endfor %}
</ul>
{% endfor %}
