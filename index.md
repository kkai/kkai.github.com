---
layout: page
title: 
tagline: 
---
{% include JB/setup %}

<table width="100%" border="0">
<tr>
<td rowspan="2"><img src="/imgs/kai.png" alt="that's me ;)" /></td>
<td>Welcome to my little webspace. I'm Kai.</td>
</tr>
<tr>
<td>I work as an Assistant Professor in Computer 
Science and Intelligent Systems at Osaka Prefecture University 
</td>
 </tr>
</table>

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



