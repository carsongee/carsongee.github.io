---
layout: default
title: Blog
permalink: /blog/
description: Journal of my everyday
---
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h2>
        <img src="{{ post.img }}" />
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <p>
        {{ post.description }}
      </p>
    </li>
  {% endfor %}
</ul>
