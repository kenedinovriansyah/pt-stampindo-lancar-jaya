const range = 100;
const array = [];

var from = 3;
var to = 5;

for (let i = 1; i <= 100; i++) {
  const division_from_3 = `${i / from}`;
  const division_from_5 = `${i / to}`;
  if (!division_from_3.split(".")[1]) {
    array.push("boleh");
  } else if (!division_from_5.split(".")[1]) {
    array.push("boleh");
  } else array.push(i);
}

console.log(array);
