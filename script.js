const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const equalsButton = document.querySelector('.equals');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'C') {
      display.value = '';
    } else if (button.textContent !== '=') {
      display.value += button.textContent;
    }
  });
});

equalsButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
});
