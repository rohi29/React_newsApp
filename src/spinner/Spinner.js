import React  from 'react'
import loading from '../loading.gif' 
// export default class Spinner extends Component {
//   render() {
  const Spineer = ()=>{
    return (
      <div className='Container'>
          <img className='rounded mx-auto d-block' src={loading} alt="loading" />
      </div>
    )
  }
export default Spineer
