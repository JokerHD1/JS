/*И снова у нас #задачаДня !  Решения как всегда присылаем скрытым кодом или ссылкой на гитхаб в чат с хештегом решениеДня ! Удачи:)

Маркетинговая команда тратит слишком много времени на ввод хэштегов.
Давайте поможем им с нашим генератором хэштегов!

Вот задачка:

Строка должна начинаться с хэштега (#).
Во всех словах первая буква должна быть заглавной.
Если окончательный результат длиннее 140 символов, он должен вернуть false.
Если ввод или результат представляет собой пустую строку, он должен вернуть false.

Примеры:

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function ChangeHash(name_1) {
  name_1 = name_1.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
  name_1 = name_1.replace(/\s+/g, "");
  if (name_1.length > 0 && name_1.length <= 130) {
    alert("#" + name_1);
    return "#" + name_1;
  } else alert("false");
  return "false";
}
console.log(
  ChangeHash(prompt("Введите текст, который хотите преобразовать в хэштег"))
);
