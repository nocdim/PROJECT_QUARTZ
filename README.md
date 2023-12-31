![alt text](https://github.com/nocdim/RRT-NNET-M_ChangeObserver_1C/blob/main/RRT-NNET-M.png?raw=true)
<br>
# *PROJECT_QUARTZ*
A multitask application that helps collect data primarily from 1C:Enterprise, also supports the collecting of data from specific web-sites. <br>
Приложение, которое записывает данные преимущественно из программы 1С:Предприятие, но также поддерживает сбор информации с определенных веб-сайтов.  <br>
주로 1C:Enterprise에서 데이터를 수집하는 데 도움이 되는 멀티태스킹 애플리케이션은 특정 웹 사이트에서 데이터 수집도 지원합니다. <br>
多任务应用程序主要帮助从 1C:Enterprise 收集数据，还支持从特定网站收集数据。<br>
主に 1C:Enterprise からのデータ収集を支援するマルチタスク アプリケーションは、特定の Web サイトからのデータ収集もサポートします。 <br>


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Stack used to create this app:

FrontEnd:
ReactJS + Redux + Typescript

BackEnd:
NodeJS + NestJS + express + Typescript

Database:
PostgreSQL

Main program:
1C:Enterprise

Other:
Batch files (.bat) (To connect different modules within the application)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Стек, используемый для создания этого приложения:

Внешний интерфейс:
ReactJS + Redux + Typescript

Бэкэнд:
NodeJS + NestJS + экспресс + Typescript

База данных:
PostgreSQL

Основная программа:
1С:Предприятие

Прочее:
Пакетные файлы (.bat) (Для соединения разных модулей внутри приложения)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
이 앱을 만드는 데 사용된 스택:

프런트엔드:
ReactJS + Redux + Typescript

백엔드:
NodeJS + NestJS + 익스프레스 + Typescript

데이터 베이스:
PostgreSQL

주요 프로그램:
1C:엔터프라이즈

다른:
배치 파일(.bat)(응용 프로그램 내에서 다른 모듈을 연결하기 위해)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
用于创建此应用程序的堆栈：

前端：
ReactJS + Redux + Typescript

后端：
NodeJS + NestJS + Express + Typescript

数据库：
PostgreSQL

主要程序：
1C：企业

其他：
批处理文件 (.bat)（用于连接应用程序内的不同模块）
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
このアプリの作成に使用されたスタック:

フロントエンド：
ReactJS + Redux + Typescript

バックエンド:
NodeJS + NestJS + Express + Typescript

データベース:
PostgreSQL

主なプログラム:
1C:エンタープライズ

他の：
バッチ ファイル (.bat) (アプリケーション内の異なるモジュールを接続するため)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This application is for self purposes only. It is not supposed to be used by others! <br>
Это приложение создавалось для собственных целей. Приложение не предназначено для стороннего использования! <br>
이 응용 프로그램은 자체 용도로만 사용됩니다. 다른 사람이 사용해서는 안 됩니다! <br>
此应用程序仅供个人使用。 它不应该被其他人使用！ <br>
このアプリケーションは個人的な目的のみに使用されます。 他人が使用するものではありません！<br>


# *PROJECT_QUARTZ LOG* 
(This is where I keep writing my updates on the application...)


<h2>CHANGES:</h2>


<b>10.07.2023</b> <br><br>
Project created. Nothing special just standart templates for frontend, backend. No database. <br><br>
<b>11.07.2023</b> <br><br>
Started to shape a global 1C module. + created an external 1C app that will allow me to watch the changes made in 1C on the Website.
Created an additional external 1C app for testing the primary app. <br><br>
<b>13.07.2023</b> <br><br>
1C: testing external app for testing - structure reworked; global 1C module structure reworked.
Also cleaned up a project a little bit. Gonna work on web part from now on. + added another .bat file for 
future tests of a connection to the web-server. I'm trying to remember how does React work? + exploring unknown territory (Redux, TS) 
1C UPDATE: I just realized that my external testing app for 1C is incorrect.. (there is no for cycle...).
So I think I'll create a new one based on the external app that I and others use while working. 
I won't delete the old one from GitHub though. <br><br>
<b>14.07.2023</b> <br><br>
I want to finish 1c part. It's almost done. The whole process. Then probably gonna do
.bat files. And then web. <br><br>
<b>17.07.2023</b> <br><br>
OK! Today I practiced some ~~TSX MAGIC~~. Started working on the FrontEnd part of the application. Did a lot of structuring..
But it doesn't work properly. But It's ok, probably gonna restructurize the whole frontend anyway. But still today I made a huge step forward!<br><br>
<b>18.07.2023</b> <br><br>
Fixed a lot of bugs including the one that prevented JSX Elements from rendering. Fixed the webpack v4 --> v5 error. Started working on design of the app. I remember little to nothing about css, but I'm getting there! I have an idea of how the frontpage (or welcome page) should look like. Also I'm thinking about creating a separate folder with screenshots of the app, showing progress I'm making and how the app looks early in development. I think it's a great idea! I will also post some screenshots in this README file.<br><br>
<b>19.07.2023</b> <br><br>
Slowly designing the application, currently stuck on the welcoming page. I made some animations for logo, I don't think this is the final result, but I'll leave it like that for a bit.<br><br>
<b>20.07.2023</b> <br><br>
Created development archive section. I'm planning on posting early build designs of the app and different stuff like sketches an so on.<br><br>
<b>21.07.2023</b> <br><br>
There's a lot of things that need changes. First of all, I need to understand the structure of the application (CSS web part). 
Right now it's just a mess of divs and other crap that needs to be removed. There are a lot of div blocks that are not necessary.
Also I think of changing the main logo to something more creative than a triangle. I plan to include my YT Logo to give the logo some character.
Working on the animations is hard, GODDAMN AMOGUS BRUH A<br><br>
<b>25.07.2023</b> <br><br>
So... There were no updates in a while so here we go! First of all, I decided to change the whole look of the web application. I want to make it a little bit more personal. But at the same time I need to create a new logo (vector logo), cuz I think my looks a bit outdated. Currently I'm working on a new logo design and learning how to make it with Adobe Illustrator. So there is a problem... I don't want to continue working on the app until I'm done with the logo, but sometimes my brain gets too smooth and I become too lazy to do anything. I think it might be some kind of mental illness. But here we are, I think on finishing the logo today and then move on and finally create a fully working ecosystem! LETS GOOOOOOOOOOOOOOOOOO. --- --- --- Ok so I nested interfaces in the separate folder so I don't have to find where the interfaces are. Changed some interface logic, for example for now there is 2 page templates: 1 is the foundation of all pages and 2 is the extended version that accepts all possible elements/components. I think this is pretty much how pages should function. Also I can endlessly add components to the extendedPage interface and use this template how I want.
<br><br>
<b>26.07.2023</b> <br><br>
I cba to explain what've done. Just messing with CSS.
<br><br>
<b>27.07.2023</b> <br><br>
Alright, I had this interesting idea. I want to make a theme changer that will always be on display (toggle thingy) / or maybe just the welcoming page and options page(?). Basically there will be 3 options to choose from: (chaos theme, light theme, minimalist theme). Chaos theme I'm workin on right now (red/black colours, chaotic animations e.t.c.). Light theme is gonna be the opposite of chaos theme (blue/white colours, calm animations..). And the last one - minimalist theme (only white/black colours, light glitch animations..). The one thing that I'm not sure about is how it's gonna work. I think based on the specific option choosed I'm gonna pass different className to APP div block OR render different app div blocks.. Not sure. |||UPDATE|||: There will be 2 theme options instead of 3. I will eliminate the light theme. |||ANOTHER UPDATE|||: <b>I'm getting to the point where redux knowledge is necessary.</b> So I'm gonna stop designing the interface and focus on the logic part of the web site. 
<br><br>
<b>28.07.2023</b> <br><br>
I think I'm going to expand functionality of the app, I will rewrite the JS part of another app I made called <b>Node.js_1C</b> (repository is private) and implement it into the web app. In other news, design for the welcoming page is almost done, just need to make some little tweaks and the most important - <b>CREATE A LOGO</b>. 
<br><br>
<b>31.07.2023</b> <br><br>
Little changes on the frontend part. Also I'm thinking about making an options page, that will allow users to set the page to default view (it does not even exist), because I noticed that some browsers <b>DO NOT SUPPORT</b> animations I'm using right now. So the key moment of this idea is to allow users to see all the necessary information properly without having troubles navigating through the interface. Or the better solution is to on will <b>disable the animations completely.</b> ////////// Also another note I want this web application to be an executable, so like a PC app. That would be cool. I consider using <b>electron</b> for this. ////////// I decided to change images to text because loading a bunch of images could lead to potential problems and troubleshooting. Now the CHAOS theme looks even more CHAOTIC.
<br><br>
<b>01.08.2023</b> <br><br>
I've had this idea for a long time now.. I want to make this app serve a lot of different purposes instead of a single one, that I planned on (observing changes). So now the project will be called <b>"PROJECT QUARTZ"</b>. The name is completely random, I just thought of cool looking words and eventually stumbled upon "QUARTZ" (It's my favourite rock from childhood. Mesmerizing... (I have mental problems xDDDDDDDDDDDDDDD )). Today I will probably just change the readme file and make small adjustments to the design. ////////// <b>THE MOST IMPORTANT CHANGE</b> ////////// --> I decided to get rid of the globalModules for 1C for now and create a <b>NEW EXTERNAL 1C APPLICATION</b>. It will be basic, simple as it can get. Basically, it's going to collect data from 1C and POST it to the database. This process won't be automated for now. Then I'll create an automated so called 1C "routine task" that will collect specific data (for now I'm thinking about collecting my salary). <b>THE PREVIOUS 1C APPLICATIONS WERE DELETED!</b>
<br><br>
<b>02.08.2023</b> <br><br>
CHANGES: I decided to integrate one of my previous works into the PROJECT_QUARTZ. (<b>NODEJS_1C</b>). So.. about how 1C part gonna work - I will create <b>GLOBAL EXTERNAL MODULE</b> that will provide all the functions i'll sooner or later need. That's it. Little by little I will expand and add different functions to 1C app part, but for now I think I need everything in order to move to the another parts of the application... Speaking of another parts of the app - I think it's time to work on server and database!
<br><br>
<b>03.08.2023</b> <br><br>
1C UPDATE: Working on a system thet will allow to write states of some object before and after changes. Also working on writing the data into the JSON-file.
CSS UPDATE: Correcting some stuff, <b>BUT THE FINAL ADJUSTMENTS WILL BE WHEN I FINISH THE LOGO</b>
<br><br>
<b>04.08.2023</b> <br><br>
Necessary part of 1C is now complete and ready to be integrated with the web. The next step will be writing API and backend part of my website and after that creating .bat files to connect 1C to JS/TS. Also I expanded the JS part for 1C OFD section.
<br><br>
<b>07.08.2023</b> <br><br>
Little changes made to 1c main form (stylistic changes, fixed bugs). Also completed the JS script for 1c OFD receipt checkup. The only thing left there is a second attempt to process the info after collapse...
<br><br>
<b>08.08.2023</b> <br><br>
*crying noises* Unfortunately MongoDB is no longer available in Russia... I wanted to use MongoDB to deploy my database, but I guess that will never happen. So I decided to switch to CockroachDB. (It's a shame that developers of MongoDB banned russian people from using their own products ( not everyone supports current situation... )) I started developing server side of application slowly but surely!! Also I want to make some sort of graph that will show the usage of programming languages day by day in my application. I already downloaded the archives, all I need to do is to set up the database, found a way to count lines of code of files with certain extensions and find out how to put the stats on the graph!
<br><br>
<b>09.08.2023</b> <br><br>
GLOBAL SUPER ULTRA MULTI INCREDIBLE CHANGES... <b>NO COCKROACHDB</b> Primary reason for me to switch to another solution is the fact that the more I use cockroachDB the more money I pay. So I decided to use the same old POSTGRESQL. I know how to work in it somewhat, I've done projects using POSTGRESQL before, so I think this decision is the right one. Another notes: I added a scheme of how the application should work. Functionality will grow and improve (at least I hope so). I started to shape the backend part of the application, but the process will go slowly.. (I'm making this project while at work and setting up a DB is not really possible.). <b>UPDATE:</b> I expanded the variety of web pages on the web site. In total right now we have "AboutPage", "AdminPage", "DocumentsPage", "ErrorPage", "HistoricalGalleryPage", "HomePage", "StatisticsPage" and "WelcomePage".
<br><br>
<b>11.08.2023</b> <br><br>
I finally fixed the problem with NavBar, Footer and Sidebar. Previously I Couldn't put them as reactElements on the page for some reason, well that got fixed. And from this point app is ready to be fully designed. Speaking about designing the web app, I decided to change the structure of the pages and make opne single template. Now I'll have an identical toggle container for three toggle buttons on the right side. The buttons are: <b>NavBar</b>, <b>Footer</b> and <b>SideBar</b> (NFS for short). These toggle will expand to the side to show more information. <b>ALSO THE WHOLE APP IS BROKEN AND I CAN'T BE ASKED TO FIX EVERYTHING RIGHT NOW.</b> I'll fix everything later... Let's see how it gonna be looking.
<br><br>
<b>... ... ... ... ...</b> <br><br>


<h2>DEVELOPMENT ARCHIVE:</h2>

![alt text](https://github.com/nocdim/RRT-NNET-M_ChangeObserver_1C/blob/main/developmentHistory/scheme_03082023.svg)
<br><br>


<b>THIS SECTION WILL BE FILLED WHEN THE PROJECT IS NEAR COMPLETION</b> <br><br>
<b>... ... ... ... ...</b> <br><br>
There is still more to come!
<br><br>

![alt text](https://github.com/nocdim/RRT-NNET-M_ChangeObserver_1C/blob/main/symbol_flag.png?raw=true)

