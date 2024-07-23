import Big from "big.js";

export const Operate = (x, y, operation) => {
  let first = Big(x)
  let second = Big(y)
  let op = operation
  switch(op) {
    case ('÷'):
      return first.div(second).toString()
      break
    case ('%'):
      try {
        return first.mod(second).toString();
      } catch (err) {
        return 'Cannot find modulo as cant divide by 0';
      }
      break
    case ('+'):
      return first.plud(second).toString()
      break
    case ('-'):
      return first.minus(second).toString()
      break 
    case ('x'):
      return first.times(second).toString()
      break
    default:
    throw Error(`Unknown operation '${op}'`);
  }
}
