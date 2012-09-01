---
layout: page
title: trying to make sense ...
tagline: 
---
{% include JB/setup %}

<div class="container">
	<div class="marketing">
		<div class="content">	  
			<div class="row">			
      
      <div class="span4 columns well">
				 <h2>Hi. I'm Kai</h2>
<table border='0' width='100%'>
<td><img src='/imgs/kai.png' alt='that&apos;s me ;)' /></td>

<tr>
<td>
I strive to make technology more accessible and our lives more predictable. <br />
-General love for science, hacking and playing with tech- <br /> 
I work as an Assistant Professor in Computer 
Science and Intelligent Systems at Osaka Prefecture University, Japan.<br />
contact: firstname.lastname@gmail.com

</td>
 </tr>
</table>
<p><a href="https://twitter.com/k_garten" class="twitter-follow-button btn btn-mini" data-show-count="false">Follow @k_garten</a> &nbsp; <a href="https://twitter.com/share" class="twitter-share-button" data-via="k_garten">Tweet</a>
</p>

<h3>News</h3>
<span>01 Aug 2012</span>  finalizing coordination of a <a href="http://www.dagstuhl.de/en/program/calendar/semhp/?semnr=12492">Dagstuhl Seminar</a>.<br/>
<span>23 Jul 2012</span>  attending the <a href="http://activitycontext.org/">Activity Context Workshop</a>.  <br/>
<span>12 Jul 2012</span>  invited talk at <a href="http://activitycontext.org/"> AAAI Workshop</a> in Toronto. <br/>
<span>04 Jul 2012</span>  started working as Assistant Professor in Osaka.<br/>
<span>01 Aug 2011</span>  began to work for the <a href="http://futurict.eu/">FuturICT</a> project proposal.<br/>

</div>
				<div class="span6 columns">
        <h3>Recent Blog Posts</h3>
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
				</div>	
				<!-- <div class="span4 columns">								
					{% include tag_sidebar.html %}
					{% include archive.html %} 
				</div>	-->
				<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
			</div>
		</div>
	</div>
 </div>
