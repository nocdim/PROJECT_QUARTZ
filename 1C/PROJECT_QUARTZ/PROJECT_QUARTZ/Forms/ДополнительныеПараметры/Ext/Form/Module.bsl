﻿&НаКлиенте
Функция Далее(Команда)
	Если ДополнительныеПараметрыЗаполнены() Тогда
		ДП = Новый Структура;
		ДП.Вставить("ПутьJSON", Объект.ПутьJSONФайла);
		ДП.Вставить("ПутьBAT", Объект.ПутьBATФайла);
		ЭтаФорма.Закрыть(ДП);
	Иначе
		Предупреждение("Чтобы продолжить работу, необходимо заполнить дополнительные поля!", , "Заполните поля формы.");
	КонецЕсли;
КонецФункции

&НаКлиенте
Функция ДополнительныеПараметрыЗаполнены()
	
	Если НЕ ЗначениеЗаполнено(Объект.ПутьJSONФайла)
		ИЛИ НЕ ЗначениеЗаполнено(Объект.ПутьBATФайла) Тогда
	
		Возврат Ложь;
	
	КонецЕсли;
	
	Возврат Истина;

КонецФункции // ()


&НаКлиенте
Процедура ПутьJSONФайлаПриИзменении(Элемент)
	Если ПустаяСтрока(Элемент.ТекстРедактирования) Тогда
		Отказ = Истина;
		Возврат;
	КонецЕсли;
	
	Файл = Новый Файл(Элемент.ТекстРедактирования);
	Если Не Файл.Существует() Тогда
		Отказ = Истина;
		Возврат; 
	КонецЕсли;
КонецПроцедуры


&НаКлиенте
Процедура ПутьBATФайлаПриИзменении(Элемент)
	Если ПустаяСтрока(Элемент.ТекстРедактирования) Тогда
		Отказ = Истина;
		Возврат;
	КонецЕсли;
	
	Файл = Новый Файл(Элемент.ТекстРедактирования);
	Если Не Файл.Существует() Тогда
		Отказ = Истина;
		Возврат; 
	КонецЕсли;
КонецПроцедуры


&НаКлиенте
Процедура ПутьJSONФайлаНачалоВыбора(Элемент, ДанныеВыбора, СтандартнаяОбработка)
	СтандартнаяОбработка=ложь;
	ДиалогВыбораФайла =	Новый ДиалогВыбораФайла(РежимДиалогаВыбораФайла.Открытие);
	ДиалогВыбораФайла.Фильтр						=	"JSON-файл (*.json)|*.json|";
	ДиалогВыбораФайла.Расширение					=	"json";
	ДиалогВыбораФайла.Заголовок						=	"Выберите JSON-файл";
	ДиалогВыбораФайла.ПредварительныйПросмотр		=	Ложь;
	ДиалогВыбораФайла.ИндексФильтра					=	0;
	ДиалогВыбораФайла.ПолноеИмяФайла				=	Элемент.ТекстРедактирования;
	ДиалогВыбораФайла.ПроверятьСуществованиеФайла	=	Истина;
	
	Если ДиалогВыбораФайла.Выбрать() Тогда
		Объект.ПутьJSONФайла = ДиалогВыбораФайла.ПолноеИмяФайла;
		ПутьJSONФайлаПриИзменении(Элемент);	
	КонецЕсли;
КонецПроцедуры


&НаКлиенте
Процедура ПутьBATФайлаНачалоВыбора(Элемент, ДанныеВыбора, СтандартнаяОбработка)
	СтандартнаяОбработка=ложь;
	ДиалогВыбораФайла =	Новый ДиалогВыбораФайла(РежимДиалогаВыбораФайла.Открытие);
	ДиалогВыбораФайла.Фильтр						=	"BAT-файл (*.bat)|*.bat|";
	ДиалогВыбораФайла.Расширение					=	"bat";
	ДиалогВыбораФайла.Заголовок						=	"Выберите BAT-файл";
	ДиалогВыбораФайла.ПредварительныйПросмотр		=	Ложь;
	ДиалогВыбораФайла.ИндексФильтра					=	0;
	ДиалогВыбораФайла.ПолноеИмяФайла				=	Элемент.ТекстРедактирования;
	ДиалогВыбораФайла.ПроверятьСуществованиеФайла	=	Истина;
	
	Если ДиалогВыбораФайла.Выбрать() Тогда
		Объект.ПутьBATФайла = ДиалогВыбораФайла.ПолноеИмяФайла;
		ПутьBATФайлаПриИзменении(Элемент);	
	КонецЕсли;
КонецПроцедуры


&НаСервере
Процедура ЗаполнитьПоУмолчаниюНаСервере()
	Объект.ПутьJSONФайла = "C:\Users\nochevkin\Desktop\testingNodeJS_1C\temporaryData.json";
	Объект.ПутьBATФайла = "C:\Users\nochevkin\Desktop\testingNodeJS_1C\execute.bat";
КонецПроцедуры


&НаКлиенте
Процедура ЗаполнитьПоУмолчанию(Команда)
	ЗаполнитьПоУмолчаниюНаСервере();
КонецПроцедуры
 