---
layout: page
title: trying to make sense ...
tagline: 
---
{% include JB/setup %}

Welcome to my little webspace. 
<table width="75%"  border='0'>
<tr>
<td rowspan="2"><img src="/imgs/kai.png" alt="that's me ;)" /></td>
<td></td>
</tr>
<tr>
<td>
I strive to make technology more accessible and our lives more predictable. </br>
-General love for science, hacking and playing with tech- </br> 
I work as an Assistant Professor in Computer 
Science and Intelligent Systems at Osaka Prefecture University, Japan.</br>
contact: firstname.lastname@gmail.com
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
 <span>12 Jul 2012</span> will attend the <a href="http://activitycontext.org/">Activity Context Representation Workshop</a> at the AAAI Symposium in Toronto. <br/>
 <span>04 Jul 2012</span> started working as Assistant Professor in Osaka.<br/>
 <span>01 Aug 2011</span> began to work for the <a href="http://futurict.eu/">FuturICT</a> project proposal.<br/>

 </ul>



