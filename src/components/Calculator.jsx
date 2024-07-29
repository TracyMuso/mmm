import { useState, useEffect } from 'react';
import '../App.css'
import { numsAndOps } from '../data';
import Calculate from '../logic/calculate';

const Calc = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState((prevState) => Calculate(prevState, buttonName));
  };

  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const { total, next, operation } = state;
    if (!next && !total) {
      setDisplay('0');
    } else {
      const expression = next ?? total;
      if (operation && next !== null) {
        setDisplay(`${next} ${operation}`);
      } else if (operation && total !== null) {
        setDisplay(`${total} ${operation}`);
      } else {
        setDisplay(expression);
      }
    }
  }, [state]);

  return (
    <div className='container'>
       <div className="output">
        { display }
      </div>
      <div className='nums-and-ops'>
        {numsAndOps.map((item, idx) => (
          <div key={idx} onClick={() => handleClick(item)} className='calc-child'>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calc;
