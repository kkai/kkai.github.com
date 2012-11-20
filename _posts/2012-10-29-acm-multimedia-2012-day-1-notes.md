---
layout: post
title: "ACM Multimedia 2012 Tutorials and Workshops"
tagline: 
description: "I attended the Tutorials ..."
category: conferences 
tags: [scratchpad, conference, acmmm2012]
summary: "I attended the following Tutorials ..."
---
{% include JB/setup %}
I attended the Tutorials "Interacting with Image Collections – Visualisation and Browsing of Image Repositories"
and "Continuous Analysis of Emotions for Multimedia Applications" on the first day.

The last day I went to "Workshop on Audio and Multimedia Methods for Large Scale Video Analysis" and 
to the "Workshop on Interactive Multimedia on Mobile and Portable Devices".


This is meant as a scratchpad ... I'll add more later if I have time.

### Interacting with Image Collections – Visualisation and Browsing of Image Repositories
Schaefer gave a overview about how to browse large scale image repositories. 
Interesting, yet of not really related to my research interests. 
He showed 3 approaches for retrieval: mapping-based, clustering-based and graph-based.
I would have loved if he could have gone a bit more in detail in the mobile section at the end.

### Continuous Analysis of Emotions for Multimedia Applications
Hatice Gunes and Bjoern Schuller introduced a state of the art in emotion analysis.
Their problems seem very similar to what we have to cope with in activity recognition,
especially in terms of segmentation and continuous recognition problems.
Their inference pipeline is comparable to ours in context recognition.

Where Affective Computing seems to have an edge is in the standardized data sets. 
There are already quite a lot (mainly focusing on video and audio). 
I guess it's also easier compared to the very multi-modal datasets we deal with in activity recogntion.

Hatice Gunes showed two videos of two girls, one is faking a laugh the other one is authentic.
Interestingly enough, the whole audience was wrong in picking the authentic laugh. 
The fake laughing girl was overdoing it and laughed constantly. 
However, authentic laughter has a time component (coming in waves: increasing, decreasing, increasing again etc.).

The tools section contained the obvious candidates (opencv, kinect, weka ...).
Sadly they did not mention the new set of tools I love to use. Check out [Pandas](http://pandas.pydata.org)
and [iPython](http://ipython.org).

Good overview about the state of the art. 
I would have loved to get more information about the subjective nature of emotion. For me it's not
as obvious as activity (already there is a lot of room of ambiguity). 
Also, depending on personal experience and cultural background, the emotional response to specific stimuli can be diverse.

#### interesting links

[Semaine Corpus](http://semaine-db.eu)

[Media Eval](http://www.multimediaeval.org/)

[EmoVoice Audio Emotion classifier](http://www.informatik.uni-augsburg.de/de/lehrstuehle/hcm/projects/tools/emovoice/)

[qsensor](http://www.affectiva.com/q-sensor/)

[London eye mood](http://cinimodstudio.com/project/london-eye-mood-conductor/)

### Workshop on Audio and Multimedia Methods for Large Scale Video Analysis

### Workshop on Interactive Multimedia on Mobile and Portable Devices
