let randomNumber = Math.round(Math.random() * 100);

function guessTheNumber(randomNumber_) {
  try {
    let startNumber = 0;
    let finishNumber = 100;

    for (let i = 0; i < finishNumber; i++) {
      let inputNumber = +prompt(
        `Программа загадала рандомное число. Ваша задача угадать его. Введите число от ${startNumber} до ${finishNumber}`
      );

      if (inputNumber == randomNumber_) {
        alert("Вы угадали!");
        break;
      } else if (inputNumber > randomNumber_) {
        if (finishNumber > inputNumber) {
          finishNumber = inputNumber;
        }

        alert(
          `Вы ввели число ${inputNumber} и это слишком большое значение. Введите число от ${startNumber} до ${finishNumber}`
        );
        continue;
      } else if (inputNumber < randomNumber_) {
        if (startNumber < inputNumber) {
          startNumber = inputNumber;
        }
        alert(
          `Вы ввели число ${inputNumber} и это слишком маленькое значение. Введите число от ${startNumber} до ${finishNumber}`
        );
        continue;
      }
    }
  } catch (error) {
    return error.message;
  }
}

guessTheNumber(randomNumber);
