document.addEventListener('DOMContentLoaded', () => {
  let inputScreen = document.querySelector('.input-screen');
  let buttons = document.querySelectorAll('.btn');
  let errorUp = false;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let value = button.getAttribute('value');
      buttonPress(value);
    });
  });

  function buttonPress(value) {
    if (errorUp) {
      inputScreen.value = '';
      errorUp = false;
    }

    if (value == 'reset') {
      inputScreen.value = '';
    } else if (value == '=') {
      try {
        let result = evaluar(inputScreen.value);
        inputScreen.value = result;
      } catch (error) {
        inputScreen.value = 'Error';
        errorUp = true;
      }
    } else {
      inputScreen.value += value;
    }
  }

  function evaluar(expresion) {
    expresion = expresion.replace(/x/g, '*');
    return eval(expresion);
  }
});