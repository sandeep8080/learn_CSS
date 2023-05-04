let counter = 0;

function handleInputFunction() {
  console.log('Called' + counter++);
}

const debounceFunc = (cb, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  }
};

const debounce = debounceFunc(handleInputFunction, 1000);

let counter2 = 1;

function handleSecInput() {
  console.log('Called!' + '' + counter2++);
}

const throttle = throttleFunc(handleSecInput, 2000);

function throttleFunc(cb, d) {
  let timer;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      timer = 0; // setting the timer as 0 once the timer is over
      cb();
    }, d);
  }
};


