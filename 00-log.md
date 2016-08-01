---
layout: default
title: Log
permalink: /log/
description: Journal of my everyday
class: log
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
          <img src="{{ post.img }}" /><br />{{ post.title }}</a>
      </h2>
      <p>
        {{ post.description }}
      </p>
    </li>
  {% endfor %}
</ul>
<div style="clear: both;">&nbsp;</div>
