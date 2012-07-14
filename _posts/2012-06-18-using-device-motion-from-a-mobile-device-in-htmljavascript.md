---
layout: post
title: "using device motion in html/javascript"
description: ""
tagline: A simple demonstration
category: 
tags: 
  - visualization
  - javascript 
  - accelerometer 
  - html
---
{% include JB/setup %}
A while ago, I built a simple demonstration on how to stream accelerometer 
data from a mobile device over websockets to a server just using
html and javascript. It consists of a nodejs web server and a processing.org
visualization. As soon as a mobile browser connects to the server a new red
cube is shown on the screen (placed between randomly generated cubes). 
The transparent area around the cube changes depending on how strong
one shakes the phone.

<iframe src="http://player.vimeo.com/video/45626605" 
width="500" height="281" frameborder="0"
>
</iframe> 
<p><a href="http://vimeo.com/45626605">Visualization based on mobile phone data</a> from <a href="http://vimeo.com/user8093378">Kai Kunze</a> on <a href="http://vimeo.com">Vimeo</a>.</p>
You can get the code from my [github page](https://github.com/kkai/devicemotion-demo)

It's based on these tutorials and sample code:

[a simple chat server node.js tutorial](http://martinsikora.com/nodejs-and-websocket-simple-chat-tutorial)

[3d css cube](http://www.paulrhayes.com/2009-07/animated-css3-cube-interface-using-3d-transforms/)

[3d cube world](http://openprocessing.org/sketch/19216)




