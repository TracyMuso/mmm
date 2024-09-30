import { useState, useEffect } from 'react';
import '../App.css'
import { numsAndOps } from '../data';
import Calculate from '../logic/calculate';
import Quote from './Quote';

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
    const { total, next } = state;
    if (!next && !total) setDisplay('0');
    else setDisplay(next ?? total);
  }, [state]);


  return (
    <div>
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
    <Quote />
    </div>
  )
}

export default Calc;
