---
layout: default
title: "/"
description: Clipped Compound Root
command: ./display_menu
class: root
---
# Hello

Welcome to CarsonOS, please choose from the following menu options:
<dl>
{% for page in site.pages %}
  {% if page.title and page.description and page.title != '/' %}
  <dt>
    <a href="{{ page.url | prepend: site.baseurl }}">{{page.title }}</a>
  </dt>
  <dd>{{ page.description }}</dd>
  {% endif %}
{% endfor %}
</dl>
