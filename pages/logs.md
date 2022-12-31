---
layout: page
title: Logs
permalink: /logs/
---

<h1><small>Logs</small></h1>

Just another log for myself. Hopefully, it'll help me decide where to visit and what to focus on in the near future.

<hr>

<h2>Travel</h2>

{% assign sortedCountries = site.data.countries | sort: 'name' %}
<details>
<summary>🌏 I have visited roughly <b>{{ sortedCountries.size }} / 195~</b> {% if sortedCountries.size == 1 %}country{% else %}countries{% endif %} (excluding Japan)</summary>
{% for country in sortedCountries %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ country.name }} {{ country.flag  }}</li></ul>
{% endfor %}
</details>

{% assign sortedCities = site.data.cities | sort: 'name' %}
<details>
<summary>🌃 I have visited roughly <b>{{ sortedCities.size }} / 10,000~</b> {% if sortedCities.size == 1 %}city{% else %}cities{% endif %} (excluding cities in Japan)</summary>
{% for city in sortedCities %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ city.name }}, {{ city.country }}</li></ul>
{% endfor %}
</details>

{% assign sortedPrefectures = site.data.japanese_prefectures | sort: 'name' %}
<details>
<summary>🗾 I have visited roughly <b>{{ sortedPrefectures.size }} / 47</b> {% if sortedPrefectures.size == 1 %}prefecture{% else %}prefectures{% endif %} in Japan</summary>
{% for prefecture in sortedPrefectures %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ prefecture.name }}</li></ul>
{% endfor %}
</details>

<h2>Activities</h2>

{% assign mountaineering = site.data.mountaineering %}
{% assign recentMountaineeringItem = mountaineering[0] %}
<details>
<summary>🏔 I did <b>{{ recentMountaineeringItem.activities.size }}</b> mountaineering {% if recentMountaineeringItem.activities.size == 1 %}activity{% else %}activities{% endif %} in {{ recentMountaineeringItem.year }}</summary>
{% for item in mountaineering %}
<p><b>{{ item.year }}</b></p>
<ul style="margin-top:0;margin-bottom:0;">
{% for activity in item.activities %}
<li>{{ activity.flag }} {{ activity.name }}, {{ activity.category | default: '-' }}, {{ activity.altitude | default: '-' }}, {{ activity.date | default: '-' }}
{% if activity.note != '' %}
<blockquote><p>{{ activity.note }}</p></blockquote>
{% endif %}
</li>
{% endfor %}
</ul>
{% endfor %}
</details>

{% assign sortedMountains = site.data.japanese_mountains | sort: 'name' %}
<details>
<summary>🗻 I have climbed roughly <b>{{ sortedMountains.size }} / 100</b> famous {% if sortedMountains.size == 1 %}mountain{% else %}mountains{% endif %} in Japan (<a href="https://en.wikipedia.org/wiki/100_Famous_Japanese_Mountains#List_by_region">Wikipedia</a>)</summary>
{% for mountain in sortedMountains %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ mountain.name }}, {{ mountain.area }} ({{ mountain.altitude }})</li></ul>
{% endfor %}
</details>

<h2>Learnings</h2>

{% assign done_qualifications = site.data.qualifications | where: 'status', 'done' %}
<details>
<summary>📖 I got roughly <b>{{ done_qualifications.size }}</b> {% if done_qualifications.size == 1 %}qualification{% else %}qualifications{% endif %}</summary>
<ul style="margin-top:0;margin-bottom:0;">
{% for qualification in site.data.qualifications %}
<li>{{ qualification.name }}, {{ qualification.date | default: '-' }}</li>
{% endfor %}
</ul>
</details>
