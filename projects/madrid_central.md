---
layout: page
title: false
---
# Air-Panel
## Case study: Madrid-Central
----

![](https://56eo.github.io/assets/images/Madrid_Central.gif)


**Air-Panel** is an efficient Air quality indicator panel based on satellite and ground sensor data for regional and local managers. **Air-Panel** displays indicator values with imagery that gives comprehensive data for air quality risk planning to launch and grow successful actionable plans. This is a measure of climate change adaption.

We work in the following case study called **Madrid Central**.

-------

#### Background:

Madrid's City Hall have introduced new restrictions on traffic in the heart of the capital. This measurement was aligned with the air quality strategy for reducing the high values of pollution were matched last years in the town.

<br/>

#### Madrid Central's lifetime:
* **November 2018**: Started the 30th of November.
* **July - September 2019**: Fines were suspended as the new city hall team audits the system.
* **July 2019**: The European Commission has referred Spain to the Court of Justice of the EU for their failure to protect citizens from air pollution.
* [El Pais: Madrid takes historic step to becoming a car-free city center](https://elpais.com/elpais/2018/11/30/inenglish/1543565577_207058.amp.html)

<br/>

#### Case study:
Looking at the adverse air quality situation in Madrid, we conduct a new visualization of tropospheric NO2 via spatial and temporal scale by analyzing satellite images.
NO2 has been monitored by satellite since 1995 with GOME, since 2002 with SCIAMACHY, and since 2004 with the OMI instrument; the latest two instruments having the disadvantage of a low spatial resolution.

As the last satellite, Sentinel 5P is in charge to monitor the atmosphere conditions launched in October 2017, and this one has 6 times the spatial resolution of  the last ones.
This is an experiment aiming at giving more transparency to the Madrid’s city managers for a better decision making for green policies according pollution trends.

<br/>

#### Workflow
* Download vector layer (neighborhoods, buildings)
* Download shapefile of “zona restringida de trafico”
* GEE- extract NO2 and others
* Vectorizing all the tiffs
* Comparing output with ground data
