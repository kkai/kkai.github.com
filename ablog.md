---
layout: page
title: "blog"
description: "blog"
group: navigation
---
{% include JB/setup %}

<table class="table table-striped">
  <tbody>
	{% for post in site.posts %}	
    <tr>
      <td>
		  <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
          <i>{{ post.summary }}</i>
    <p><small>{{ post.date | date: "%B %e, %Y" }} {{ post.category }} </small></p>
	  </td>
    </tr>
	{% endfor %}			
  </tbody>
</table> 

