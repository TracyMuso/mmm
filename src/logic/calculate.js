import Big from "big.js";
import Operate from "./operate";

// Initial state
const initialState = {
  total: null,
  next: null,
  operation: null,
};

const Calculate = (state, btn) => {
  let { total, next, operation } = state;

  console.log(`Calculate called with state: ${JSON.stringify(state)}, btn: ${btn}`);

  switch (btn) {
    case 'AC':
      return { ...initialState };

    case '+/-':
      if (next && next !== '0') {
        next = (Big(next).times(-1)).toString();
      } else if (total && total !== '0') {
        total = (Big(total).times(-1)).toString();
      }
      return { total, next, operation };

    case '=':
      if (operation && next) {
        try {
          total = Operate(total, next, operation);
        } catch (error) {
          console.error("Invalid operation:", error);
          total = "Error";
        }
      }
      next = null;
      operation = null;
      return { total, next, operation };

    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      if (operation && next) {
        total = Operate(total, next, operation);
        next = null;
      } else if (!total) {
        total = next;
        next = null;
      }
      operation = btn;
      return { total, next, operation };

    case '.': 
      if (next) {
        if (!next.includes('.')) {
          next += '.';
        }
      } else {
        next = '0.';
      }
      return { total, next, operation };

    default:
      if (btn.match(/[0-9]+/)) {
        if (operation) {
          if (next) {
            next += btn;
          } else {
            next = btn;
          }
        } else if (next) {
          next = next === '0' ? btn : next + btn;
        } else {
          next = btn;
        }
      }
      return { total, next, operation };
  }
};

export default Calculate;
