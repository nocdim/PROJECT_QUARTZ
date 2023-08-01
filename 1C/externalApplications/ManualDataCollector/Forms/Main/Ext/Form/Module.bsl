﻿
&НаСервере
Процедура СобратьИнформациюНаСервере()
	РежимРаботы = Объект.РежимРаботы;
	Если РежимРаботы Тогда
		// запрос простой
	Иначе	
		// запрос с фильтрами в зависимости от типа документа
	КонецЕсли
	
КонецПроцедуры

&НаКлиенте
Процедура СобратьИнформацию(Команда)
	Инфо = ПолучитьИнформациюФормы(Объект.РежимРаботы);
	Инфо.Вставить("РежимРаботы", Объект.РежимРаботы);
	СобратьИнформациюНаСервере();
КонецПроцедуры

&НаКлиенте
Функция ПолучитьИнформациюФормы(ИспользоватьТолькоОсновныеФильтры)
	
	ОсновныеФильтры = Новый Структура;
	ОсновныеФильтры.Вставить("ТипДокумента", Объект.ТипДокумента);
	ОсновныеФильтры.Вставить("ДатаОт", Объект.ДатаОт);
	ОсновныеФильтры.Вставить("ДатаДо", Объект.ДатаДо);
	
	Если НЕ ИспользоватьТолькоОсновныеФильтры Тогда
		
		ДопФильтры = Новый Структура;
		
		// здесь будут фильтры
		// по типу "Контрагент", "Организация", "КассаККМ" и т.д.
		
		ОсновныеФильтры.Вставить("ДопФильтры", ДопФильтры);
		
	КонецЕсли; 
	
	Возврат ОсновныеФильтры;
	
КонецФункции // ()
 