import './Backpack.css'

const Backpack = ({
    strength_box,
    weightless_box,
    little_heavy_box,
    very_heavy_box,
    total_weight_box,
    gold_box 
}) => {

  return (
    <div className='backpack_container'>
        <div className='strength_box'>
            <p>{strength_box}</p>
        </div>
        <div className='weight_box'>
            <div className="display_flex_container">
                <div className='weightless_box'>
                    <p>{weightless_box}</p>
                </div>
                <div className='little_heavy_box'>
                    <p>{little_heavy_box}</p>
                </div>
                <div className='very_heavy_box'>
                    <p>{very_heavy_box}</p>
                </div>
            </div>
            <div className='total_weight_box'>
                <p>{total_weight_box}</p>
            </div>
        </div>
        <div className='gold_box'>
            <p>{gold_box} <span>PO</span></p>
        </div>
    </div>
  )
}

export default Backpack