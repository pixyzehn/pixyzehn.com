---
layout: page
title: Logs
permalink: /logs/
---

<h1><small>Logs</small></h1>

Just another log for myself. Hopefully, it'll help me decide where to visit and what to focus on in the near future.

---

### Travel

<p>🌏 I have visited roughly <b>{{ site.data.places.countries.size }} / 195</b> countries so far (excluding Japan).</p>

<details>
<summary>Details</summary>
{% assign sortedCountries = site.data.places.countries | sort: 'name' %}
{% for country in sortedCountries %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ country.name }} {{ country.flag  }}</li></ul>
{% endfor %}
</details>

<p>🌃 I have visited roughly <b>{{ site.data.places.cities.size }}</b> cities so far (excluding cities in Japan).</p>

<details>
<summary>Details</summary>
{% assign sortedCities = site.data.places.cities | sort: 'name' %}
{% for city in sortedCities %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ city.name }}, {{ city.country }}</li></ul>
{% endfor %}
</details>

<p>🗾 I have visited roughly <b>{{ site.data.places.prefectures.size }} / 47</b> prefectures in Japan so far.</p>

<details>
<summary>Details</summary>
{% assign sortedPrefectures = site.data.places.prefectures | sort: 'name' %}
{% for prefecture in sortedPrefectures %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ prefecture.name }}</li></ul>
{% endfor %}
</details>

### Accomplishments

<p>⛰ I have climbed roughly <b>{{ site.data.places.mountains_in_japan.size }} / 100</b> famous mountains in Japan so far (<a href="https://en.wikipedia.org/wiki/100_Famous_Japanese_Mountains#List_by_region">Wikipedia</a>).</p>

<details>
<summary>Details</summary>
{% assign sortedMountains = site.data.places.mountains_in_japan | sort: 'name' %}
{% for mountain in sortedMountains %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ mountain.name }}, {{ mountain.area }} ({{ mountain.altitude }})</li></ul>
{% endfor %}
</details>

<p>🏔 Mountaineering activities by year (Trekking, Climbing, etc). Total <b>{{ site.data.mountaineering[0].activities.size }}</b> this year.</p>

<details>
<summary>Details</summary>
{% for item in site.data.mountaineering %}
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

<p>📖 Qualifications by year. Total <b>{{ site.data.qualifications[0].qualifications.size }}</b> this year.</p>

<details>
<summary>Details</summary>
{% for item in site.data.qualifications %}
<p><b>{{ item.year }}</b></p>
<ul style="margin-top:0;margin-bottom:0;">
{% for qualification in item.qualifications %}
<li>{{ qualification.name }}, {{ qualification.date | default: '-' }}
</li>
{% endfor %}
</ul>
{% endfor %}
</details>
