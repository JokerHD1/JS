// 1. Написать скриптик, который сосчитает и выведет, результат от возведения 2 в степень 10

//без циклов
console.log(2 ** 10);

//с циклом
let a = 2;
let b = 1;
while (b < 10) {
  a = a * 2;
  b++;
}
console.log(a);

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

//без циклов
function count(b) {
  let result = 2 ** b;
  console.log(result);
}
count(10);

//циклом
function count(c) {
  let a = 2;
  let b = 1;
  while (b < c) {
    a = a * 2;
    b++;
  }
  console.log(a);
}
count(10);

//2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее

for (let i = 1; i <= 5; i++) {
  console.log(":)".repeat(i));
}

//Преобразовать 2 задачу в функцию, принимающую на вход строку,
//которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода

function printSmth(smth, numRows) {
  for (let i = 1; i <= numRows; i++) {
    smth = String(smth);
    console.log(smth.repeat(i));
  }
}
printSmth(":)", 5);

//3**.  Написать функцию, которая принимает на вход слово.
//Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.

let vowels = "aeiouyаиеёоуыэюя";
let consonants = "bcdfghjklmnpqrstvwxzбвгджзйклмнпрстфхцчшщ";
let vcount = 0;
let ccount = 0;
let res = "";
function wordStruc(wrd) {
  wrd = wrd.toLowerCase();
  for (let pos = 0; pos < wrd.length; pos++) {
    res += wrd[pos];
    for (let v = 0; v < vowels.length; v++) {
      if (wrd[pos] == vowels[v]) {
        vcount++;
      }
    }
    for (let c = 0; c < consonants.length; c++) {
      if (wrd[pos] == consonants[c]) {
        ccount++;
      }
    }
  }
  console.log(
    "Слово " +
      wrd +
      " состоит из " +
      vcount +
      " гласных и " +
      ccount +
      " согласных букв."
  );
}
wordStruc("Balalaikaлайка");

//4**. Написать функцию, которая проверяет, является ли слово палиндромом

function CheckPalindrome(str) {
  str = str.toLowerCase();
  if (str == str.split("").reverse().join("")) {
    console.log("This string is palindrome!");
  } else console.log("This string is not palindrome");
}
CheckPalindrome("Лол");
