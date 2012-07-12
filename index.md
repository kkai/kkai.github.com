---
layout: page
title: 
tagline: 
---
{% include JB/setup %}

![me](/imgs/kai.png)
Welcome to my little webspace ;)

I'm currenlty an assistant professor in computer science and intelligent systems
at Osaka Prefecture University.

## Recent Blog Posts 
<ul class="posts">
  {% for post in site.posts %}
    <span>{{ post.date | date_to_string }}</span>   &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a> <br />
  {% endfor %}
</ul>

## News
<ul class="news">
 <span>12 Jul 2012</span> will attend the AAAI Symposium in Toronto. <br/>
 <span>04 Jul 2012</span> started working as Assistant Professor in Osaka.<br/>

 </ul>



