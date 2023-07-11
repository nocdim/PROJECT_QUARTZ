﻿Перем ВестиНаблюдение;

&НаСервере
Процедура ПротестироватьНаСервере()
	
	НоменклатураОб = Объект.Номенклатура.ПолучитьОбъект();
	НоменклатураОб.НаименованиеEN = Объект.НаименованиеНоменклатурыEN;
	Попытка
	
		НоменклатураОб.Записать();
	
	Исключение
		
		Сообщить(ОписаниеОшибки());
		
	КонецПопытки; 
КонецПроцедуры

&НаКлиенте
Процедура Протестировать(Команда)
	ПротестироватьНаСервере();
КонецПроцедуры

&НаСервере
Процедура ПриОткрытииНаСервере()
	ЭтаОбработка = РеквизитФормыВЗначение("Объект");
	ВестиНаблюдение = RRT_NNET_M_НаблюдательИзменений.ВестиНаблюдение(ЭтаОбработка);	
КонецПроцедуры


&НаКлиенте
Процедура ПриОткрытии(Отказ)
	ПриОткрытииНаСервере();
КонецПроцедуры
 
