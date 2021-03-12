---
layout: page
title: Mountaineering
permalink: /mountaineering
---

{% include map.html %}

This page is used to track my outdoor activity logs, such as trekking, rock climbing, and mountain climbing.

---

{% for item in site.data.mountaineering %}
<h2>{{ item.year }}</h2>
<ul>
{% for activity in item.activities %}
<li>{{ activity.flag }} {{ activity.name }}, {{ activity.category }}, {{ activity.altitude }}, {{ activity.date }}
{% if activity.note != '' %}
<blockquote><p>{{ activity.note }}</p></blockquote>
{% endif %}
</li>
{% endfor %}
</ul>
{% endfor %}

---

```
Use the following format.

・[National flag] Name, Category, Altitude, Date (yyyy/MM/DD)
> Additional notes
```
