const a = [
  "Cirilla",
  "Geralt",
  "Emhyr",
  "Yennefer",
  "Triss",
  "Dandelion",
  "Cahir",
  "Vilgefortz",
  "Dijktstra",
  "Regis",
];
const b = ["Emhyr", "Cahir", "Vilgefortz", "Dijktstra", "Regis"];
let test1 = a.filter((i) => !b.includes(i));
console.log(test1);
