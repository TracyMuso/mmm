import Big from "big.js"
import Operate from "./operate"

const initialState = {
  total: null,
  operation: null,
  next: null
}

const Calculate = (state, btnName) => {
  let { total, next, operation } = state

  switch (btnName) {
    // if the buton is AC, then we return the initial state
    case 'AC':
      return { ...initialState }
      // in this case. we toggle the sign of the number
    case '+/-':
         if (next) {
          return Big(next).times(-1).toString()
        } else if (total) {
          return Big(total).times(-1).toString()
        }
        return {total, next, operation}
        // in this case we will display the total
    case '=':
        if (operation && next) {
          return Operate(total, next, operation)
        }
        next = null
        operation = null
        return { total, next, operation }
        // in operative cases, we will calculate
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      if (operation && next) {
          total = Operate(total, next, operation)
          next = null;
        }
        operation = btnName
        return {total, next, operation}
        // in the default case, we will efine standard button behavior. We willcover decimal cases
      default:
        if (btnName === '.') {
          if (next) {
            if (!next.includes('.')) {
              next += '.';
            }
          } else {
              next = '0.';
          }
          // we will also cover continuous number clicks and concatenate them eg 123.5
        } else {
          next = next ? next + btnName : btnName;
        }
        return { total, next, operation };
  }
}

export default Calculate;
