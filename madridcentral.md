---
layout: page
title: false
subtitle: Case study: Madrid-Central
---
# Air-Pannel
## Case study: Madrid-Central
----

![](https://56eo.github.io/assets/images/Madrid_Central.gif)


**Air-Pannel** is an efficient Air quality indicator pannel based in satellite and ground sensor data for regional and local managers. **Air-Pannel** displays indicator values with imagery that gives comprehensive data for air quality risk planning to launch and grow successful actionable plans. This is a measure of climate change adaption.

We work in the following case study called **Madrid Central**.

-------

#### Background:

Madrid's City Hall have introduced new restrictions on traffic in the heart of the capital. This measurement was aligned with the air quality strategy for reducing the high values of pollution were matched last years in the town.

<br/>

#### Madrid Central's lifetime:
* **30th nov 2018**: Started
* **1st jul-30th sep 2019**: Admitted moratorium for citizens from 1-8th jul 2019.
* **Jul 2019**: Europe commission sentence Spain for: systematically violate “legal nitrogen dioxide (NO2) limits.
* [El Pais: Madrid takes historic step to becoming a car-free city center](https://elpais.com/elpais/2018/11/30/inenglish/1543565577_207058.amp.html)

<br/>

#### Case study:
Looking at the adverse air quality situation in Madrid, we conduct a new visualization of tropospheric NO2 via spatial and temporal scale by analysing satellite images.
NO2 has been monitored by satellite since 1995 with GOME, since 2002 with SCIAMACHY, and since 2004 with the OMI instrument; the latest two instruments having the disadvantage of a low spatial resolution.

As the last satellite, Sentinel 5p is in charged to monitor the atmosphere conditions launched in October 2017, and this one has 6 times spatial resolution more than the last ones.
This is an experiment aiming at giving more transparency to the Madrid’s city managers for a better decision making for green policies according pollution trends.

<br/>

#### Workflow
* Download vector layer (neightborhoods, buildings)
* Download sahpefile of “zona restringida de trafico”
* GEE- extract NO2 and others
* Vectorizing all the tiffs
* Comparing output with ground data
