import { useState } from 'react';
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

  const { total, next } = state;
  return (
    <div className='container'>
       <div className="output">
        {next || total || '0'}
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
