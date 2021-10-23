---
layout: page
title: Logs
permalink: /logs/
---

<h1><small>Logs</small></h1>

This page is used to collect my logs just for myself. Hopefully, it'll help me decide where to visit in the next trip.

---

<p>I have visited roughly <b>{{ site.data.places.countries.size }} / 195</b> countries so far.</p>

<details>
<summary>Details</summary>
{% assign sortedCountries = site.data.places.countries | sort: 'name' %}
{% for country in sortedCountries %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ country.name }} {{ country.flag  }}</li></ul>
{% endfor %}
</details>

<p>I have visited roughly <b>{{ site.data.places.cities.size }}</b> cities so far.</p>

<details>
<summary>Details</summary>
{% assign sortedCities = site.data.places.cities | sort: 'name' %}
{% for city in sortedCities %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ city.name }}, {{ city.country }}</li></ul>
{% endfor %}
</details>

<p>I have visited roughly <b>{{ site.data.places.prefectures.size }} / 47</b> prefectures in Japan so far.</p>

<details>
<summary>Details</summary>
{% assign sortedPrefectures = site.data.places.prefectures | sort: 'name' %}
{% for prefecture in sortedPrefectures %}
<ul style="margin-top:0;margin-bottom:0;"><li>{{ prefecture.name }}</li></ul>
{% endfor %}
</details>

<p>Mountaineering activities by year.</p>

<details>
<summary>Details</summary>
{% for item in site.data.mountaineering %}
<p><b>{{ item.year }}</b></p>
<ul style="margin-top:0;margin-bottom:0;">
{% for activity in item.activities %}
<li>{{ activity.flag }} {{ activity.name }}, {{ activity.category }}, {{ activity.altitude }}, {{ activity.date }}
{% if activity.note != '' %}
<blockquote><p>{{ activity.note }}</p></blockquote>
{% endif %}
</li>
{% endfor %}
</ul>
{% endfor %}
</details>
