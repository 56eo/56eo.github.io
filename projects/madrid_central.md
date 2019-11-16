---
layout: page
title: false
---
# Air-Panel
## Case study: Madrid-Central
----

![](https://56eo.github.io/assets/images/Madrid_Central.gif)


**Air-Panel** is an efficient air quality indicator panel based on satellite and ground sensor data, for regional and local policy makers. **Air-Panel** is a platform which provides comprehensive data and imagery on air-pollution and is meant to serve as a toolbox for air quality risk planning and to launch and grow successful action plans. It also provides individual cities and ports with a measure of climate change adaptability.

We work in the following case study called **Madrid Central**.

-------

#### Background:

Madrid's City Hall have introduced new restrictions on traffic in the heart of the capital. This measurement was taken at the same time as a new air quality strategy was launched for reducing the high values of pollution that were measured over the last years.

<br/>

#### Madrid Central's lifetime:
* **November 2018**: Started the 30th of November.
* **July - September 2019**: Fines were suspended as the new city hall team audits the system.
* **July 2019**: The European Commission has referred Spain to the Court of Justice of the EU for their failure to protect citizens from air pollution.
* [El Pais: Madrid takes historic step to becoming a car-free city center](https://elpais.com/elpais/2018/11/30/inenglish/1543565577_207058.amp.html)

<br/>

#### Case study:
Looking at the adverse air quality situation in Madrid, we conduct a new visualization of tropospheric NO<sub>2</sub> on a spatial and temporal scale by analyzing satellite images. NO<sub>2</sub> has been monitored by satellites since 1995 with GOME, since 2002 with SCIAMACHY, and since 2004 with the OMI instrument. These instruments had the disadvantage of a low spatial resolution. The newest satellite, Sentinel 5p, that is in charge to monitor atmosphere conditions, was launched in October 2017. It has a 6 times higher spatial resolution than is predecessor. This makes it possible to come up with a lot of new information on air quality in harbors on a day-to-day scale.

<br/>

#### Workflow
* Download vector layer (neighborhoods, buildings)
* Download shapefile of “zona restringida de trafico”
* GEE- extract NO2 and others
* Vectorizing all the tiffs
* Comparing output with ground data
