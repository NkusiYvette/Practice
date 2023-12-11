let counter = 1;
let intervalId;

function printNumber() {
  console.log(counter);

  if (counter === 10) {
    clearInterval(intervalId);
  } else {
    counter++;
  }
}
intervalId = setInterval(printNumber, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 20000);
