// console.log("FR-52");

//! let, const, var

// console.log(num1);
// let num1 = 10
// num1 = 15

// const num2 = 10
// num2 = 15
// console.log(num2);

// console.log(num3);
// var num3 = 10
// num3 = 15

//! Data Types

//? 1 Number
// let num = 5
// console.log(typeof num);

//? 2 String
// let str = "Azamat"
// console.log(typeof str);

//? 3 Boolean
// let bool = false
// console.log(typeof bool);

//? 4 Null
// let n = null
// console.log(typeof n);

//? 5 Undefined
// let und = undefined
// console.log(typeof und);

//? 6 Object
// let obj = {}
// console.log(typeof obj);

//? 7 BigInt
// let big = 123456789912345n
// console.log(typeof big);

//? Symbol
// let symb = Symbol("go")
// console.log(typeof symb);

// let num1 = 6
// let num2 = 3
// console.log(num1 - num2); //! -
// console.log(num1 + num2); //! +
// console.log(num1 * num2); //! *
// console.log(num1 / num2); //! /
// console.log(num1 ** num2); //! **
// console.log(num1 % num2); //! %

// let str = "Hello World";
// console.log(typeof str);

// let a = 10
// let b = 5

// console.log(a - b);

// let num = 10

// num = "Azamat"

// num = "Raatbek"

// console.log(num);

// let obj = {};

// console.log(typeof obj);

// let und = undefined
// console.log(typeof und);

// let unde
// console.log(unde);

// let symb = Symbol("foo")
// console.log(typeof symb);

// let str = ""

// console.log(typeof str);

// let str1 = "5 "
// let str2 = " 10"

// console.log(str1 + str2);

// let str = "6"
// console.log(str);
// let name = "        "
// console.log(name.length);

// let str1 = "5";
// let str2 = "10";
// console.log(str1 - str2);

// let motion_web_it_academy = "frontend"
// let motionWebItAcademy = "frontend"

// let a = 5
// let b = 7

// console.log(a + b);

// let number = 100
// console.log(number);

// let str = "Azamat"
// console.log(typeof str);

// alert("Hello World")

// confirm()

// let p = prompt()
// console.log(p);

// Задание №1
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае
//  false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// Задание №2
// Найдите самое длинное слово в строке и выведите его в консоли
// const str = "I am a Megalodon, oceans feeling like a pond"

// Задание №3
// Дана функция checkTask(arr) которая принимает массив с предложениями.
// Необходимо вернуть новый массив с количеством слов в каждом предложении.

// Пример: ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

// Задание №4
// Дана функция checkTask(arr) которая принимает массив c числами.
// При помощи метода reduce необходимо вернуть новый массив без дубликатов.

// Пример: Дан массив: [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]. Результат: [18, 21, 1, 51, 5, 7, 10]

// let numbers = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

// Задание №5
// Посчитать сумму чисел до первого нуля.

// [12, 23, 3, 77, 42, 0, 6, 9, 12, 10]

// Задание №6
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное
// значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести
// в консоль аргументы в обратном порядке (использовать цикл while)

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// function limit(num) {
//   let newNum = num;
//     while (num < 1000) {
//       console.log(num);
//       num = num * 2;
//     }
//     while (num > newNum) {
//       num = num / 2;
//       console.log(num);
//     }
//   }
// limit(50);

// let arr = [5, 5, 5, 0, 577, 3];

// let newArr = arr.reduce((acc, el) => {
//   let answer = 0;
//   if (el === 0) {
//     answer = acc;
//   } else {
//     return acc + el;
//   }
//   console.log(answer);
// });
function check(str) {
  let maxStr = "";
  for (let i of str) {
    if (maxStr.length < i.length) {
      maxStr = i;
    }
  }
  return maxStr;
}
console.log(
  check(["hghgkjh", "hghjgjhgkjhkgfgfhgfhghjghgj", "SULTAAAAAAAAAAAAAn"])
);
