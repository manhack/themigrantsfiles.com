(function(){angular.module("tmf",["ngAnimate","ngSanitize","ui.bootstrap","headroom","duScroll"])}).call(this),function(){angular.module("tmf").controller("MainCtrl",["$scope","$window",function(e,a){return e.form={email:null},e.subscribe=function(t){var i;return i="http://themigrantsfiles.us9.list-manage.com/subscribe?u=d40f524f34bc0a3d2144216d0&id=a367e896c5",i+="&MERGE0="+t,a.open(i,"_blank"),e.form.email=""}}])}.call(this),angular.module("tmf").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="main"><div class="main__header"><iframe width="100%" height="100%" allowfullscreen="" frameborder="0" src="https://jplusplus.cartodb.com/viz/9284b33a-e903-11e4-8de1-0e0c41326911/embed_map" class="main__header__map"></iframe><div class="main__header__title"><div class="container"><div class="row"><div class="col-sm-6"><h1>The human and financial cost of 15 years of fortress Europe</h1><p class="lead">The Migrants Files is a consortium of journalists from over 10 EU countries. It is coordinated by <a href="http://jplusplus.org" target="_blank">Journalism++</a>.</p><p><img src="assets/images/laurels.svg" height="20">&nbsp; Winner, Data Journalism Awards 2014<br><img src="assets/images/laurels.svg" height="20">&nbsp; Winner, European PRESS Prize 2015</p></div></div></div></div></div><div id="newsletter" class="main__subscribe"><div class="container"><div class="row text-center"><div class="col-sm-6 col-sm-offset-3"><h2>Subscribe to the newsletter</h2><form name="subscribeForm" ng-submit="subscribe(form.email)"><div class="lead">Lorem ipsum dolor sit description</div><div class="input-group input-group-lg"><input type="email" placeholder="your@email.com" required="" ng-model="form.email" class="form-control input-lg"><span class="input-group-btn"><button type="submit" ng-disabled="!subscribeForm.$valid" class="btn btn-default">Subscribe</button></span></div></form></div></div></div></div><div class="main__links"><div class="container"><div class="row text-center"><div class="col-sm-4 col-sm-offset-1"><h2>The money trails <sup>new</sup></h2><div class="lead">The Migrants\' Files project was launched in August 2013 by a group of European journalists who joined forces to accurately calculate and report the deaths of emigrants seeking refuge in Europe.</div><a href="#the-money-trails" du-smooth-scroll="" class="btn btn-outline btn-white btn-lg">Read the story</a></div><div class="col-sm-4 col-sm-offset-2"><h2>Counting the dead</h2><div class="lead">The Migrants\' Files project was launched in August 2013 by a group of European journalists who joined forces to accurately calculate and report the deaths of emigrants seeking refuge in Europe.</div><a href="#counting-the-dead" du-smooth-scroll="" class="btn btn-outline btn-white btn-lg">Read the story</a></div></div></div></div><div id="the-money-trails" class="main__article main__article--first"><div class="container"><div class="row"><div class="main__article__body col-sm-7"><h2 class="main__article__title">The money trails</h2><p>They know their lives are at risk, yet each year thousands of people from Africa, the Middle East and beyond — war refugees, asylum seekers and economic migrants — leave their homes and try to reach the promised land of Europe. On the third of October 2013, more than 360 would-be emigrants drowned off the coast of the Italian island of Lampedusa. A catastrophe of this dimension grabbed the media’s attention for a while and won the sympathy of the general public.</p><p>In response, later that month, the European Council decided to implement measures aimed at preventing a repeat of such a tragedy at the European Union&#39;s borders .The Council called for strengthening the EU’s border security co-ordination system, Frontex, more formally known as the European Agency for the Management of Operational Cooperation at the External Borders of the Member States of the European Union. And the Europe-wide surveillance system Eurosur began operations on December 2, 2013. Thus, once again, a large tragedy spurred real, if belated, action.</p><p>Well-intended though they doubtless were, these measures only address the tip of the migration iceberg. Little is known about how many men, women and children actually have lost their lives on their journey to Europe. Believing that policy unsupported by facts cannot be optimal, a consortium of European journalists committed themselves to systematically assembling and analyzing the data on the deaths of Europe’s would-be migrants. The Migrants&#39; Files project is partially funded by the European non-profit organization Journalismfund.eu.</p><h3 id="data-sources">Data sources</h3><p>By compiling rigorous datasets from various sources, The Migrants&#39; Files team aims at creating a comprehensive and reliable database on migrants&#39; deaths. Principal data sources for this effort include United for Intercultural Action, a non-profit whose network comprises over 550 organizations across Europe, and Fortress Europe, founded by the journalist and author Gabriele Del Grande, which also monitors the deaths and disappearances of migrants to Europe. The Migrants&#39; Files’ database also uses data from Puls, a project run by the University of Helsinki, Finland and commissioned by the Joint Research Center of the European Commission.</p><p>A consistent methodology is applied to all data, starting with so-called “open-source intelligence” (OSINT). Originated by the intelligence services, this approach collects data from publicly available sources such as media reports, government publications and grey literature. In the case of The Migrants&#39; Files, the number migrants who die while seeking refuge in Europe is obtained by monitoring real-time global news on asylum seekers, migration and human trafficking activities in and around Europe.</p><p>United for Intercultural Action monitored emigrant fatalities from 1993 until 2012, documenting about 17,000 deaths. Gabriele Del Grande reports more than 19,000 deaths since 1988. The database of The Migrants&#39; Files covers the period from January 1, 2000, until today.</p><p>The journalists of The Migrants&#39; Files noted that the various data sources often lacked compatibility since each organization structures its intelligence differently. This required extensive data cleaning and fact-checking, using OpenRefine, an open source analysis tool. In a second stage, The Migrants&#39; Files journalists established a database on Detective.io, a web-based tool specifically designed to support information gathering efforts for large-scale investigative reporting projects.</p><p>Early in the process of establishing The Migrants&#39; Files’ data methodology, sixteen students from the Laboratory of Data Journalism at the University of Bologna, Italy, contributed valuable fact-checking of more than 250 incidents, supervised by Prof. Carlo Gubitosa.</p><p>The Migrants&#39; Files database of emigrant deaths now structures the data according to name, age, gender and nationality. Every fatal incident is recorded with its date, latitude, longitude, number of dead and/or missing as well as the cause.</p><h3 id="margins-for-error">Margins for error</h3><p>Overcoming the issue of data compatibility, The Migrants&#39; Files journalists have managed to create the most comprehensive survey of European migration fatalities available today. That said, the project team is aware that biases inherent in every dataset cannot be fully eliminated.</p><p>What’s more, aggregating several sources of data can easily produce duplicates. When duplicates are detected are manually removed, one at a time. Accuracy is laborious.</p><p>Beyond duplicates, some individuals had been registered as missing, say, identified by survivors of a shipwreck. If a body washes ashore in another location days or weeks later, it is virtually impossible to assign it to an earlier incident. And some fatal incidents have not been reported in any form. Hence, other sources of intelligence, such as testimonies, are carefully reviewed and double-checked before registering an incident in the database. Nonetheless, there is no getting around the fact that some individuals and events cannot be documented since no evidence offers confirmation. This sad reality cannot be redressed, rendering all fatality estimates conservative. The true numbers of dead are doubtless higher than recorded.</p><p>Moreover, assessing the geolocation and mapping the registered incidents imposes other kinds of difficulties. The map of The Migrants’ Files also presents incidents far from European borders due to the methodology used. For example, a boat capsized on its route from Algeria to Spain can be geolocated in Algeria and at the country’s center.</p><p>The Migrants’ Files is ongoing. The team continues to collect intelligence on the deaths of Europe’s would-be emigrants. The project aims to further improve the quality of its data, to shed more light on the situation of emigrants seeking refuge in Europe and to consistently track European asylum and migration policy, particularly because the broader media often ignores the issue until another large-scale emigrant tragedy thrusts it back to the top of the news cycle.</p><p>If you wish to contribute, please contact us by email debug@themigrantsfiles.com or through the Twitter hashtag #MigrantsFiles.</p></div><div class="main__article__sidebar col-sm-4 col-sm-offset-1"><h3 class="main__article__sidebar__title">Material</h3><h3 class="main__article__sidebar__title">Partners</h3><h3 class="main__article__sidebar__title">Credits</h3></div></div></div></div><div id="counting-the-dead" class="main__article main__article--second"><div class="container"><div class="row"><div class="main__article__body col-sm-7"><h2 class="main__article__title">Counting the dead</h2><p>They know their lives are at risk, yet each year thousands of people from Africa, the Middle East and beyond — war refugees, asylum seekers and economic migrants — leave their homes and try to reach the promised land of Europe. On the third of October 2013, more than 360 would-be emigrants drowned off the coast of the Italian island of Lampedusa. A catastrophe of this dimension grabbed the media’s attention for a while and won the sympathy of the general public.</p><p>In response, later that month, the European Council decided to implement measures aimed at preventing a repeat of such a tragedy at the European Union&#39;s borders .The Council called for strengthening the EU’s border security co-ordination system, Frontex, more formally known as the European Agency for the Management of Operational Cooperation at the External Borders of the Member States of the European Union. And the Europe-wide surveillance system Eurosur began operations on December 2, 2013. Thus, once again, a large tragedy spurred real, if belated, action.</p><p>Well-intended though they doubtless were, these measures only address the tip of the migration iceberg. Little is known about how many men, women and children actually have lost their lives on their journey to Europe. Believing that policy unsupported by facts cannot be optimal, a consortium of European journalists committed themselves to systematically assembling and analyzing the data on the deaths of Europe’s would-be migrants. The Migrants&#39; Files project is partially funded by the European non-profit organization Journalismfund.eu.</p><h3 id="data-sources">Data sources</h3><p>By compiling rigorous datasets from various sources, The Migrants&#39; Files team aims at creating a comprehensive and reliable database on migrants&#39; deaths. Principal data sources for this effort include United for Intercultural Action, a non-profit whose network comprises over 550 organizations across Europe, and Fortress Europe, founded by the journalist and author Gabriele Del Grande, which also monitors the deaths and disappearances of migrants to Europe. The Migrants&#39; Files’ database also uses data from Puls, a project run by the University of Helsinki, Finland and commissioned by the Joint Research Center of the European Commission.</p><p>A consistent methodology is applied to all data, starting with so-called “open-source intelligence” (OSINT). Originated by the intelligence services, this approach collects data from publicly available sources such as media reports, government publications and grey literature. In the case of The Migrants&#39; Files, the number migrants who die while seeking refuge in Europe is obtained by monitoring real-time global news on asylum seekers, migration and human trafficking activities in and around Europe.</p><p>United for Intercultural Action monitored emigrant fatalities from 1993 until 2012, documenting about 17,000 deaths. Gabriele Del Grande reports more than 19,000 deaths since 1988. The database of The Migrants&#39; Files covers the period from January 1, 2000, until today.</p><p>The journalists of The Migrants&#39; Files noted that the various data sources often lacked compatibility since each organization structures its intelligence differently. This required extensive data cleaning and fact-checking, using OpenRefine, an open source analysis tool. In a second stage, The Migrants&#39; Files journalists established a database on Detective.io, a web-based tool specifically designed to support information gathering efforts for large-scale investigative reporting projects.</p><p>Early in the process of establishing The Migrants&#39; Files’ data methodology, sixteen students from the Laboratory of Data Journalism at the University of Bologna, Italy, contributed valuable fact-checking of more than 250 incidents, supervised by Prof. Carlo Gubitosa.</p><p>The Migrants&#39; Files database of emigrant deaths now structures the data according to name, age, gender and nationality. Every fatal incident is recorded with its date, latitude, longitude, number of dead and/or missing as well as the cause.</p><h3 id="margins-for-error">Margins for error</h3><p>Overcoming the issue of data compatibility, The Migrants&#39; Files journalists have managed to create the most comprehensive survey of European migration fatalities available today. That said, the project team is aware that biases inherent in every dataset cannot be fully eliminated.</p><p>What’s more, aggregating several sources of data can easily produce duplicates. When duplicates are detected are manually removed, one at a time. Accuracy is laborious.</p><p>Beyond duplicates, some individuals had been registered as missing, say, identified by survivors of a shipwreck. If a body washes ashore in another location days or weeks later, it is virtually impossible to assign it to an earlier incident. And some fatal incidents have not been reported in any form. Hence, other sources of intelligence, such as testimonies, are carefully reviewed and double-checked before registering an incident in the database. Nonetheless, there is no getting around the fact that some individuals and events cannot be documented since no evidence offers confirmation. This sad reality cannot be redressed, rendering all fatality estimates conservative. The true numbers of dead are doubtless higher than recorded.</p><p>Moreover, assessing the geolocation and mapping the registered incidents imposes other kinds of difficulties. The map of The Migrants’ Files also presents incidents far from European borders due to the methodology used. For example, a boat capsized on its route from Algeria to Spain can be geolocated in Algeria and at the country’s center.</p><p>The Migrants’ Files is ongoing. The team continues to collect intelligence on the deaths of Europe’s would-be emigrants. The project aims to further improve the quality of its data, to shed more light on the situation of emigrants seeking refuge in Europe and to consistently track European asylum and migration policy, particularly because the broader media often ignores the issue until another large-scale emigrant tragedy thrusts it back to the top of the news cycle.</p><p>If you wish to contribute, please contact us by email debug@themigrantsfiles.com or through the Twitter hashtag #MigrantsFiles.</p></div><div class="main__article__sidebar col-sm-4 col-sm-offset-1"><h3 class="main__article__sidebar__title">Material</h3><h3 class="main__article__sidebar__title">Partners</h3><div class="main__article__sidebar__partner"><img alt="NZZ" src="https://detective-io.s3.amazonaws.com/img/partners/01%20-%20NZZ.png"></div><div class="main__article__sidebar__partner"><img alt="El Confidencial" src="https://detective-io.s3.amazonaws.com/img/partners/02%20-%20El%20Confidencial.png"></div><div class="main__article__sidebar__partner"><img alt="Radiobubble" src="https://detective-io.s3.amazonaws.com/img/partners/03%20-%20Radiobubble.png"></div><div class="main__article__sidebar__partner"><img alt="Sydsvenskan" src="https://detective-io.s3.amazonaws.com/img/partners/04%20-%20Sydsvenskan.png"></div><div class="main__article__sidebar__partner"><img alt="lespresso" src="https://detective-io.s3.amazonaws.com/img/partners/05%20-%20lespresso.png"></div><div class="main__article__sidebar__partner"><img alt="HLB" src="https://detective-io.s3.amazonaws.com/img/partners/06%20-%20HLB.png"></div><div class="main__article__sidebar__partner"><img alt="Le Monde Diplomatique" src="https://detective-io.s3.amazonaws.com/img/partners/07%20-%20Le%20Monde%20Diplomatique.png"></div><div class="main__article__sidebar__partner"><img alt="EUObserver" src="https://detective-io.s3.amazonaws.com/img/partners/08%20-%20EUObserver.png"></div><div class="main__article__sidebar__partner"><img alt="MO" src="https://detective-io.s3.amazonaws.com/img/partners/09%20-%20MO.png"></div><h3 class="main__article__sidebar__title">Credits</h3></div></div></div></div></div>'),e.put("app/components/header/header.html",'<header headroom="" class="header navbar navbar-default navbar-fixed-top"><div ng-init="collapse = true" class="container"><div class="pull-right visible-xs"><button type="button" ng-click="collapse = !collapse" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div class="navbar-header"><a class="navbar-brand header__brand">The Migrants\' Files</a></div><ul ng-class="{ collapse: collapse }" class="nav navbar-nav navbar-collapse header__links"><li du-scrollspy="newsletter"><a href="#newsletter" du-smooth-scroll="">Newsletter</a></li><li du-scrollspy="the-money-trails"><a href="#the-money-trails" du-smooth-scroll="">The money trails <sup>new</sup></a></li><li du-scrollspy="counting-the-dead"><a href="#counting-the-dead" du-smooth-scroll="">Counting the dead</a></li></ul></div></header>')}]);