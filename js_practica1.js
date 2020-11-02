// let hello = 'Hello';
//
// alert(hello);
// console.log(hello);
// document.write(hello);
//
// let owu = 'Owu';
//
// alert(owu);
// console.log(owu);
// document.write(owu);
//
// let com = 'com';
//
// alert(com);
// console.log(com);
// document.write(com);
//
// let ua = 'ua';
//
// alert(ua);
// console.log(ua);
// document.write(ua);
//
// let one = 1;
//
// alert(one);
// console.log(one);
// document.write(one);
//
// let numeral2 = 10;
//
// alert(numeral2);
// console.log(numeral2);
// document.write(numeral2);
//
// let numeral3 = -999;
//
// alert(numeral3);
// console.log(numeral3);
// document.write(numeral3);
//
// let numeral4 = 123;
//
// alert(numeral4);
// console.log(numeral4);
// document.write(numeral4);
//
// let numeral5 = 3.14;
//
// alert(numeral5);
// console.log(numeral5);
// document.write(numeral5);
//
// let numeral6 = 2.7;
//
// alert(numeral6);
// console.log(numeral6);
// document.write(numeral6);
//
// let numeral7 = 16;
//
// alert(numeral7);
// console.log(numeral7);
// document.write(numeral7);
//
// let answer = true;
//
// alert(answer);
// console.log(answer);
// document.write(answer);
//
// let answer2 = false;
//
// alert(answer2);
// console.log(answer2);
// document.write(answer2);
//
// ///
//
// hello = 'Hi !';
// owu = 'okten';
// com = 'web';
// ua = 'Pupkin';
// one = 'Vasya';
// numeral2 = '7777777';
// numeral3 = '555';
// numeral4 = '0';
// numeral5 = '888';
// numeral6 = 'good';
// numeral7 = 'day';
// answer = '!!!!!';
// answer2 = ')))))';
//
// ///
//
// let variable1 = 777;
// let variable2 = 55;
// let variable3 = -111;
// let variable4 = '777';
// let variable5 = '44';
// let variable6 = '000';
//
// console.log(variable1);
// console.log(variable2);
// console.log(variable3);
// console.log(variable4);
// console.log(variable5);
// console.log(variable6);
//
// ///
//
// let myname = prompt('Ваше имя?');
//
// alert(myname);
// console.log(myname);
// document.write(myname);
//
// let mysurname = prompt('Ваша фамилия?');
//
// alert(mysurname);
// console.log(mysurname);
// document.write(mysurname);
//
// let mypatronymic = prompt('Ваше отчество?');
//
// alert(mypatronymic);
// console.log(mypatronymic);
// document.write(mypatronymic);
//
// /// задание 5
//
// alert(myname+' '+mypatronymic+' '+mysurname);
// console.log(myname+' '+mypatronymic+' '+mysurname);
// document.write(myname+' '+mypatronymic+' '+mysurname);
//
// ///задание 6
//
// let name = prompt('Ваше имя?');
//
// alert(name);
// console.log(name);
// document.write(name);
//
// let surname = prompt('Ваша фамилия?');
//
// alert(surname);
// console.log(surname);
// document.write(surname);
//
// let patronymic = prompt('Ваше отчество?');
//
// alert(patronymic);
// console.log(patronymic);
// document.write(patronymic);
//
// /// задание 7
//
// let age = + prompt('Сколько Вам лет?');
//
// console.log(age);
//
// let drive = + prompt('Сколько лет Вы ездите за рулем автомобиля?');
//
// console.log(drive);
//
// let driverlicense = + prompt('Во сколько лет Вы получили права?');
//
// console.log(driverlicense)

/// задание 8
// при помощи prompt() получить 4 числа.
// Привести их к числовому типу при помощи parseInt.
// Сложить их между собой записав
// результат в переменную result и вывести в консоль браузера
//
// let age1 = parseInt(prompt('Сколько Вам лет?'))
// let age2 = parseInt(prompt('Сколько Вы за рулем?'))
// console.log(age1);
// console.log(age2);
// let experience = parseInt(prompt('Какой у Вас стаж работы?'));
// console.log(experience);
// let children = parseInt(prompt('Сколько у Вас детей?'));
// console.log(children);
// let result = (age1+age2+experience+children);
// console.log(result);

// задание 9
// при помощи prompt()  получить 3 числа с плавающей точекой.
// при помощи parseFloat привести их к соответсвующему типу.
// Сложить их между собой записав
// результат в переменную result и вывести в консоль браузера
//
// let age3 = parseFloat(prompt('Сколько Вам лет?'));
// let age4 = parseFloat(prompt('Сколько Вы за рулем?'));
// let experience2 = parseFloat(prompt('Какой у Вас стаж работы?'));
// let number = parseFloat(prompt('Сколько будет 3,75 добавить 3,75 ?'));
//
// console.log(age3);
// console.log(age4);
// console.log(experience2);
// console.log(number);
//
// let result = (age3+age4+experience2+number);
// console.log(result);

// задание 10
// при помощи prompt()  получить 3 числа с плавающей точекой.
// Округлить их при помощи Math.round Сложить их между собой записав
// результат в переменную  и вывести в консоль браузера
//
// let number2 = parseFloat(prompt('Сколько будет 15,5 добавить 16,3?'));
// let experience3 = parseFloat(prompt('Какой у Вас стаж работы?'));
// let time = parseFloat(prompt('Который час?'));
//
// let totalNumber = Math.round(number2+experience3+time);
// console.log(totalNumber);

// задание 11
// при помощи prompt()  получить 2 целых числа.
// Привести их к целочисленному типу.
// Первое число - это число которое будут возводить в степень.
// Второе число - это число которое является степенью.
// При помощи Math.pow возвести первое число в степень второго числа.
//
// let question1 = + prompt('Сколько будет 2+2?');
// let question2 = + prompt('Сколько будет 3+2?');
//
// let answer = Math.pow(question1, question2);
// console.log(answer);

// задание 12
//  При помощи оператора опредеоения типа typeof
//  определить типы следующих переменных и вывести
//  их в консоль let a = 100; let b = '100'; let c = true;
//  let d = undefined;
//
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined;
//
// console.log(typeof a, typeof b, typeof c, typeof d);

// задание 13
// Поставьте соответствующий оператор
// в выражениях что бы получился соответсвующий результат.
//Каждое выражение вложить в свою переменную.
//
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 == 10);
// console.log(10 !== 10);
// console.log(10 > 10);
// console.log(10 < 10);
// console.log(123 === '123');
// // console.log(123 !== '123');

// Дополнительно:
// Посмотрев на следюующие выражения, скажите,
// каков будет вывод в консоль
//
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((111 === 11 || 45 < 111) && (99 > 100 && 45 > 12 ));
//
// js_practica1.js:266 false
// js_practica1.js:267 true
// js_practica1.js:268 false
// js_practica1.js:269 true
// js_practica1.js:270 true
// js_practica1.js:271 true
// js_practica1.js:272 true
// js_practica1.js:273 false
// js_practica1.js:274 true
// js_practica1.js:275 true
// js_practica1.js:276 true
// js_practica1.js:277 true
// js_practica1.js:278 true
// js_practica1.js:279 true
// js_practica1.js:280 false
// js_practica1.js:281 true
// js_practica1.js:282 false

// 1.Определите переменные str, num, flag и txt со значениями
// «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения
// переменных принадлежат типам: string, number и  boolean.
//
// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';
// console.log(typeof str, typeof num, typeof flag, typeof txt);

// 2. Создайте переменные a1, a2, a3, a4, a5.
// При помощи математических операторов (сложение, вычитание
// и т.д.) найдите значения выражений:
// 5 + 3,    5 - 3,    5 * 3,    5 / 3,    5 % 3
// поместив результат каждого выражения в соответствующую переменную.
// Например, let a1 = 5 + 3.
//
// let a1 = 5 + 3;
// console.log(a1);
//
// let a2 = 5 - 3;
// console.log(a2);
//
// let a3 = 5 * 3;
// console.log(a3);
//
// let a4 = 5 / 3;
// console.log(a4);
//
// let a5 = 5 % 3;
// console.log(a5);

// 3.  Создайте переменные a6, a7, a8, a9, a10.
// Поместите в них результат выражений:
//   5 % 3,   3 % 5,   5 + '3',   '5' - 3,   75 + 'кг'
//
// let a6 = 5 % 3;
// console.log(a6);
//
// let a7 = 3 % 5;
// console.log(a7);
//
// let a8 = 5 + '3';
// console.log(a8);
//
// let a9 = '5' + 3;
// console.log(a9);
//
// let a10 = 75 + 'кг';
// console.log(a10);

// 4. Напишите код, который находит площадь
// прямоугольника высота 23см. (переменная height),
// шириной 10см (переменная width), значение площади
// должно хранится в числовой переменной s.
//
// let heigest = 23;
// let width = 10;
// let s = (heigest * width);
// console.log(s);

// 5.  Напиши код, который находит объем цилиндра
// высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//результат поместите в переменную v.
//
// let heightC = 10;
// let dC = 4;
// let pi = 3.14;
//
// let v = (pi/4 * (Math.pow(dC,2)) * heightC);
// console.log(v);
//
// let v1 = (pi * (Math.pow(dC/2,2)) * heightC);
// console.log(v1);

// 6. У прямоугольного треугольника две стороны n
// (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора
// (нужно использовать функцию Math.pow(число, степень)
// или оператор возведения в степень ** ).
//
// let a = 3;
// let b = 4;
// let c = Math.sqrt((Math.pow(3,2) + Math.pow(4,2)));
// console.log(c);

// 7. Напишите скрипт, который выводит "Hello world",
// создавши переменную str и выводить спомощью document.write,
// alert и console.log
//
// let hW = 'Hello world' ;
// alert(hW);
// console.log(hW);
// document.write(hW);

// 8. Вывести в окно браузера при помощи метода alert()
// следующие данные: Ваше ФИО, возраст, хобби (каждой
// на новой строки спомощью \n).
//
// let FullName = 'Татьяна Григорьевна Либерман ';
// let age = 35;
// let hobby = ' вокал';
// alert(FullName + "\n" + age + "\n" + hobby + "\n");

// 9. Создать 4 переменные с использованием ключевого слова let
// с именами str1, str2, str3, concatenation.
// Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘,
// str3 – ‘такой?’
// Локальной переменной concatenation присвоить результат
// конкатенации 3-х строк: str1, str2, str3.
// Вывести в документ содержимое переменной concatenation
// с помощью document.write
//
// let str1 = 'Кто ';
// let str2 = 'ты ';
// let str3 = 'такой?';
// let concatenation = (str1 + str2 + str3);
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий
// фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
//
// 205
// 15
// 40
// 10

// 11. Какие значения выведет в окно консоли следующий
// фрагмент кода если его поместить в console.log?
// console.log(parseInt("3.14"));
// console.log(parseInt("-7.875"));
// console.log(parseInt("435"));
// console.log(parseInt("Вася"));
//
// js_practica1.js:438 3
// js_practica1.js:439 -7
// js_practica1.js:440 435
// js_practica1.js:441 NaN
// обрезает числа до целого

// 12.  С помощью окна ввода, вызываемого методом prompt,
// пользователь может ввести данные, которые будут
// использоваться далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);
//
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt,
// сделать сложение двух чисел, а вывод результата при
// помощи метода alert
//
// let str = + prompt("Сколько будет 4+4 ?");
// alert(str);

// 14. С помощью окна ввода, вызываемого методом prompt,
// пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 ,
// а вывод результата при помощи метода alert
//
// let str1 = prompt("Ваше имя отчество?");
// let str2 = + prompt("Сколько Вам лет?");
// alert('Доброго вечера ' + str1 + ', мои поздравления что вам ' + str2);


// =====================
// ======ДОП============
// =====================
//
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання.
//     (відсортувати по зростанню)


// 2. Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let color = prompt('Какой сейчас цвет сигнала сфетофора?')
//
// if (color === 'green') {
//     document.write('<h>ИДИ</h>')
// } else {
//     if (color === 'yellow') {
//         document.write('<h>ПОДОЖДИ</h>')
//     } else {
//         if (color === 'red') {
//             document.write('<h>СТОЙ</h>')
//         }
//     }
// }
//
// if (color === 'green') {
//     document.write('<h>ИДИ</h>')
// } else if (color === 'yellow') {
//     document.write('<h>ПОДОЖДИ</h>')
// } else if (color === 'red') {
//     document.write('<h>СТОЙ</h>')
// }

//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует
// наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди
//     пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
// let color = prompt('Какой сейчас цвет сигнала сфетофора?');
// let car = prompt('На дороге есть машины?');
// let isRoadClear = (color + car)
//
// switch(isRoadClear){
//     case 'green' + 'no':
//         document.write('<h>ИДИ</h>');
//         break;
//     case 'green' + 'yes':
//         document.write('<h>Подожди пока нарушители проедут</h>');
//         break;
//     case 'yellow' + 'yes':
//         document.write('<h>ЖДИ</h>');
//         break;
//     case 'yellow' + 'no':
//         document.write('<h>Все равно ЖДИ</h>');
//         break;
//     case 'red' + 'no':
//         document.write('<h>Стой все равно</h>');
//         break;
//     case 'red' + 'yes':
//         document.write('<h>Стой и жди</h>');
//         break;
//     default:
//         document.write('<h>делай что хочешь</h>');
//         break;
// }

