/*Дан массив с числами. Выведите последовательно его элементы 
используя рекурсию и не используя цикл.*/

// const arr = [1, 2, 3];
// function sequence(arr) {
//   console.log(arr[0]);
//   arr.splice(0,1);
//   if (arr.length > 0) {
//     sequence(arr);
//   }
// }

// sequence(arr);

 /*Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
 опять сложите его цифры. И так, пока сумма не станет 
 однозначным числом (9 и менее).*/

// function sumOfNumbers(num) {
//   let sum = 0;
//   let str = String(num);
//   for(let digits of str) {
//     sum += +digits;
//   }
//   if (sum > 9) {
//     sum = sumOfNumbers(sum);
  
// }
// return sum;
// }

// console.log(sumOfNumbers(1467));

//сортировка вставками
/*есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
отсортировать по возрастанию написав алгоритм сортировки вставками.*/

// const arr = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let x = arr[i];
//     let j = i;
//     while(j > 0 && arr[j-1] > x) {
//       arr[j] = arr[j-1];
//       j = j - 1;
//       arr[j] = x;
//     }
//   }
//   return arr;
// }

// console.log(insertionSort(arr));

//сортировка пузырьком
/*есть массив [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3]
отсортировать по возрастанию(1) и по убыванию(2) 
написав алгоритм сортировки пузырьком.*/

// const arr = [5, 12, 2, 7, 6, 9, 19, 25, 4, 1, 3];

// function bubbleSort(arr) {

//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length - 1; j++) {
//       if(arr[j] > arr[j + 1]) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j+1]];
//       }
//     }
//   }

//   return arr;
// }

// console.log(bubbleSort(arr));

//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// let fib = (num) => num <= 1 ? num : fib(num - 1) + fib(num - 2);
// console.log(fib(7));

// function fib(num) {
//   let fib1 = 1;
//   let fib2 = 1;
//   let fib3 = 0;
//     for(let i = 3; i <= num; i++) {
//       fib3 = fib1 + fib2;
//       fib1 = fib2;
//       fib2 = fib3;
//     }
//     return fib3;
// }
// console.log(fib(7));

// Напишите функцию range(), принимающую два аргумента: 
// начало и конец диапазона, и возвращающую массив, который 
// содержит все числа из диапазона, включая начальное и 
// конечное. Третий необязательный аргумент функции range() – 
// шаг для построения массива. Убедитесь, что функция range() 
// работает с отрицательным шагом: например, range(5, 2, -1) 
// возвращает [5, 4, 3, 2].

// function range(startNum, endNum, step) {
//   let arr = [];

//   if(step > 0) {
//   for(let i = startNum; i <= endNum; i += step) {
//     arr.push(i);
// }

//   } else {
//     for(let i = startNum; i >= endNum; i += step) {
//       arr.push(i);
//     }
// }

// return arr;
// }

// console.log(range(7, 1, -1));

// бинарный поиск

// let arr = [1, 2, 5, 7, 13, 15, 16, 18, 24, 28, 29];

// function binarySearch(num, arr) {

//   let start = 0;
//   let end = arr.length - 1;
//   let mid;
  
//   while(start <= end) {
//     mid = Math.round((start + end) / 2);

//     if(num === arr[mid]) {

//       return mid;

//     } else if (num < arr[mid]) {
//       end = mid - 1;

//     } else if (num > arr[mid]){
//       start = mid + 1;
//     } else{

//       return -1;
//     }
//   }

//   return num;
// }

// console.log(binarySearch(29, arr));

// Реализуйте функцию union(), которая объединит уникальные элементы 
// всех массивов, переданных ей
// [1, 2, 2, 3], [101, 2, 1, 10], [1, 2, 3, 101,10];

// let arr = ([1, 2, 2, 3], [101, 2, 1, 10], [1, 2, 3, 101,10]);

// function union(arr) {
//   let result = [...new Set(arr)];
//   return result;
// }

// console.log(union(arr));

// Создать функцию createMatrix(), принимающую количество строк и количество столбцов 
// матрицы и возвращающее матрицу(массив массивов), заполненную случайными 
// числами в диапозоне от 0 до 100.

// function createMatrix(rows, columns) {
//   let mainArray = [];
//   for(let i = 0; i < rows; i++) {
//     mainArray[i] = [];
//     for(let j = 0; j < columns; j++) {
//       mainArray[i][j] = (Math.floor(Math.random() * 100) + 1); 
//       mainArray.push();
//     }
//   }

//   return mainArray;
// } 

// console.log(createMatrix(3,3));

// Flatten. Напишите функцию, которая преобразует глубокий массив в одномерный. 
// Пожалуйста, не используйте array.flat(), чтобы сделать задачу интереснее. (рекурсия)

//   * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
//   * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
//   * Сложность задачи: 3 of 5
//   * @param {Array} array - Глубокий массив
//   * @returns {Array}

const flatten = (arr) => {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result = result.concat(flatten(arr[i]));
    }
  }
  return result;
 };

const data = [1, 2, [3, 4, [5]]];
console.log(flatten(data)); // [1, 2, 3, 4, 5]

