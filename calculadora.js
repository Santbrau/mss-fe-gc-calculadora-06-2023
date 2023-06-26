document.addEventListener('DOMContentLoaded', () => {
  let inputScreen = document.querySelector('.input-screen');
  let buttons = document.querySelectorAll('.btn');
  let errorUp = false;

// entrada valores

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      let value = button.getAttribute('value');
      buttonPress(value);
    });
  });

// comprueba si ha dado error la operación anterior y opera

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

// cambia el simbolo "x" por "*" y opera

  function evaluar(expresion) {
    expresion = expresion.replace(/x/g, '*');
    return eval(expresion);
  }
});