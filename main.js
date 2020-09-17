//1.  Знайдіть суму всіх цифр від 1 до 100.

// let i;
// let sum;

// for (i = 1; i <=100; i++ ) {
//     sum = (i* (i + 1)) / 2;
// };
// console.log(sum);

//2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

// let arr = [1, 2, 3, 4, 5,];

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення.

// let arr = [-1, 22, 3, 44, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(Math.max(...arr));
// }

// let min = +Infinity;
// let max = -Infinity;

// let arr = [-1, 22, 3, 44, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//       max = arr[i];
//   };
  
//   if (arr[i] < min) {
//       min = arr[i];
//   }
// }

// console.log(max);


//4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. 
//Також достатньо тільки 1 змінної для отримання даних від юзера.

// let question = prompt ('Введіть 8 чисел, розділених пробілом').split(' ');

// let minus = 0, equalZero = 0, plus = 0;
// console.log(question);

// if (question.length == 8) {
//         for (let i = 0; i < question.length; i++) {
//             question[i] = +question[i];
//             console.log(question, 'second');
//             if (question.length <= 8)
//                 if (question[i] < 0) {
//                     minus += 1;
//                 } else  if (question[i] == 0) {
//                     equalZero += 1;
//                 } else if (question[i] > 0 ) {
//                     plus += 1;
//                 } else {
        
//                 }           
//         }
//     console.log(`Ви ввели ${minus} від'ємних чисел`);
//     console.log(`Ви ввели ${plus} додатніх чисел`);
//     console.log(`Ви ввели ${equalZero} нулів`);
//     } else {
//         alert('Некоректно введені дані');
//     }

//5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

// let number = 8;

// let counter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (i = 0; i < counter.length; i++) {
//     console.log(number * counter[i]);
// }

//6. Є масив з елементами 2, 5, 9, 15, 0, 4. 
//З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

// let arr = [2, 5, 9, 15, 0, 4];
// let i;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// };

//7. Створити калькулятор який буде зациклений.
// Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

// let num1, num2, sign, result, retry;

// do {
//     num1 = +prompt('Введіть перше число');
//     num2 = +prompt('Введіть друге число'); 

//     if (num1 && num2 && isNaN(num1) == false && isNaN(num2) == false) {
//             sign = prompt('Введіть знак проведення математичної операцїї (+, -, * або /');
//         switch (sign) {
//             case '+':
//                 result = num1 + num2;
//                 break;
//             case '-':
//                 result = num1 - num2;
//                 break;
//             case '*':
//                 result = num1 * num2;
//                 break;
//             case '/':
//                 result = num1 / num2;
//                 break;
//             default:
//                 alert('Введіть коректний знак');
//         }
//         alert(`${num1} ${sign} ${num2} = ${result}.`);
//     } else {
//         alert('Введіть корректні дані');
//     }

//     retry = confirm('Запустити калькулятор ще раз?');

// } while (retry == true);
