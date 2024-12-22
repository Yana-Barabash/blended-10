// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).
// function getCode (min) {
//  if (min > 0 && min < 15) {
//     return "first";
//  }
//  if (min >= 15 && min < 30) {
//     return "second";
//  }
//  if (min >= 30 && min < 45) {
//     return "third";
//  }
//  if (min >= 45 && min <= 59) {
//     return "fourth";
//  }
//   return "Incorrect";
// }
// console.log(getCode(60))

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// function getSeason(num) {
//    let result
//    switch (num) {
//       case 1:
//          result = "winter";
//          break;
//       case 2:
//          result = "spring";
//          break;
//       case 3:
//          result = "summer";
//          break;
//       case 4:
//          result = "autumn";
//          break;
//       default: result = "notFound";
//          break;
//    }
//    return result;
// }

// console.log(getSeason(3));
//~ Створи функцію logNumbers яка приймає min і max
//~ і виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max і поверніть результат з функції
//function logNumbers(min, max) {
//let sum = 0;
//for (let i = max; i >= min; i--) {
// if (i % 2 === 0) {
//sum += i
// }
// console.log(i)
//}
// return sum;
//}
//console.log(logNumbers(2, 10));

//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
//інакше виводити рядок "Невірний пароль!"

// const userRule = prompt("Введіть логін");
// console.log("userRule: ", userRule);

// if (userRule === "Адмін") {
//   const password = prompt("Введіть passsword");
//   if (!password) {
//     console.log("скасовано");
//   } else if (password === "Я головний") {
//     console.log("Добрий день!");
//   } else {
//     console.log("Невірний пароль!");
//   }
// } else {
//   console.log("Я вас не знаю");
// }
