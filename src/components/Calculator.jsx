import '../App.css'
import { numsAndOps } from '../data';

const Calc = () => {
  return (
    <div className='container'>
      <div className='output'>0</div>
      <div className='nums-and-ops'>
        {numsAndOps.map((item, idx) => (
          <div key={idx} className='calc-child'>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calc;
