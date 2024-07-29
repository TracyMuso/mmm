import Big from "big.js";
import Operate from "./operate";

const num =  '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' 

const initialState = {
  total: null,
  next: null,
  operation: null,
};

const Calculate = (state, btn) => {
  // let { total, next, operation } = state;

  // console.log(`Calculate called with state: ${JSON.stringify(state)}, btn: ${btn}`);

  // switch (btn) {
  //   case 'AC':
  //     return { ...initialState };

  //   case '+/-':
  //     if (next) {
  //       next = Big(next).times(-1).toString();
  //     } else if (total) {
  //       total = Big(total).times(-1).toString();
  //     }
  //     return { total, next, operation };

  //   case '=':
  //     if (operation && next) {
  //       total = Operate(total, next, operation);
  //     }
  //     next = null;
  //     operation = null;
  //     return { total, next, operation };

  //   case '+':
  //   case '-':
  //   case 'x':
  //   case '÷':
  //   case '%':
  //     if (operation && next) {
  //       total = Operate(total, next, operation);
  //       next = null;
  //     }
  //     operation = btn;
  //     return { total, next, operation };

  //   default:
  //     if (btn === '.') {
  //       if (next) {
  //         if (!next.includes('.')) {
  //           next += '.';
  //         }
  //       } else {
  //         next = '0.';
  //       }
  //     } else {
  //       next = next ? next + btn : btn;
  //     }
  //     return { total, next, operation };
  // }
};

export default Calculate;
