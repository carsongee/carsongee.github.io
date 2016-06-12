---
layout: default
---
<div class="grd-row-col-6">
  <div class="index-base">
    <dl>
      {% for page in site.pages %}
        {% if page.title and page.description %}
          <dt>
            <a href="{{ page.url | prepend: site.baseurl }}">{{page.title }}</a>
          </dt>
          <dd>{{ page.description }}</dd>
        {% endif %}
      {% endfor %}
    </dl>
  </dl>
</div>
