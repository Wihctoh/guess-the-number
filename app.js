const inputNumber = Math.round(Math.random() * 100);
// const inputNumber = 46;

console.log(`Загаданное число ${inputNumber}`);

let targetNumber = +prompt("введите число от одного до 100");
// let targetNumber = 60;
let startNum = 0;
let finishNum = 100;
let averageNum = (startNum + finishNum) / 2;


if (targetNumber == inputNumber) {
  console.log("Вы угадали!");
} else if (averageNum > targetNumber) {
  finishNum = averageNum;
  console.log(
    `Вы ввели число ${targetNumber} и это слишком маленькое значение. Введите число от ${targetNumber} до  ${finishNum}`
  );
} else if (averageNum < targetNumber) {
  startNum = averageNum;
  console.log(
    `Вы ввели число ${targetNumber} и это слишком большое значение. Введите число от ${startNum} до ${targetNumber} `
  );
}

