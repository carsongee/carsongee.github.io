---
layout: default
title: Root
description: Clipped Compound Randomizer
---
# Hello

Welcome to CarsonOS, please choose from the following menu options:
<dl>
{% for page in site.pages %}
  {% if page.title and page.description and page.title != 'Root' %}
  <dt>
    <a href="{{ page.url | prepend: site.baseurl }}">{{page.title }}</a>
  </dt>
  <dd>{{ page.description }}</dd>
  {% endif %}
{% endfor %}
</dl>
