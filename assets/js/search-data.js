---
layout: none
---

const data = [
{% for p in site.pages %}
  {% if p.nav and p.title %}
  {
    id: "page-{{ forloop.index }}",
    title: "{{ p.title | escape }}",
    icon: "<span class='icon'>📄</span>",
    section: "Pages",
    handler() {
      window.location.href = "{{ p.url | relative_url }}";
    },
  },
  {% endif %}
{% endfor %}
{% for post in site.posts %}
  {
    id: "post-{{ forloop.index }}",
    title: "{{ post.title | escape }}",
    icon: "<span class='icon'>📝</span>",
    section: "Blog Posts",
    handler() {
      window.location.href = "{{ post.url | relative_url }}";
    },
  },
{% endfor %}
];

window.addEventListener("DOMContentLoaded", function () {
  const ninjaKeys = document.querySelector("ninja-keys");
  if (ninjaKeys) {
    ninjaKeys.data = data;
  }
});
