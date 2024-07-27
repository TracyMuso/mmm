import Big from "big.js";

const Operate = (x, y, operation) => {
  let first = Big(x)
  let second = Big(y)
  let op = operation
  switch(op) {
    case ('÷'):
      return first.div(second).toString()
       
    case ('%'):
      try {
        return first.mod(second).toString();
      } catch (err) {
        return 'Cannot find modulo as cant divide by 0';
      }
       
    case ('+'):
      return first.plus(second).toString()
       
    case ('-'):
      return first.minus(second).toString()
        
    case ('x'):
      return first.times(second).toString()
       
    default:
    throw Error(`Unknown operation '${op}'`);
  }
}

export default Operate;
