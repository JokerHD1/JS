//1*:Преобразовать написанный код в 26-33 пунктах ("hw_2.js") в функцию, принимающую на вход возраст.
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

function CheckAge(age_1) {
  age_1 = String(age_1);
  age_1 = Number(age_1);
  age_1_type = typeof age_1;
  age_2 = 18;
  age_3 = 60;
  if (age_1 < age_2 && age_1_type === "number") {
    return (
      "You don`t have access cause your age is " +
      age_1 +
      ". It`s less than " +
      age_2 +
      "."
    );
  } else if (age_1 >= age_2 && age_1 < age_3 && age_1_type === "number") {
    return "Welcome!";
  } else if (age_1 >= age_3 && age_1_type === "number") {
    return 'Keep calm and watch the channel "Culture".';
  } else return "Technical work in progress";
}

console.log(CheckAge(false));
console.log(CheckAge(18));
console.log(CheckAge(61));
