﻿
&НаСервере
Процедура ПросмотретьНаСервере()
	// суть внешней обработки такова
	// по клику на кнопку будет перекидывать на локальную веб-страницу
	// где будут показаны все изменения
	// 
	// на сайте будет кнопка, которая позволит скачать все изменения по фильтрам
	
	//ВестиНаблюдение = RRT_NNET_M_НаблюдательИзменений.ВестиНаблюдение();
КонецПроцедуры

&НаКлиенте
Процедура Просмотреть(Команда)
	ПросмотретьНаСервере();      
КонецПроцедуры
