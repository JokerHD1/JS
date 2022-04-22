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
