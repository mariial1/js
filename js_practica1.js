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



// задание 13
// Поставьте соответствующий оператор
// в выражениях что бы получился соответсвующий результат.
