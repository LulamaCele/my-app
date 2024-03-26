import React from 'react';
import './main.css';
import mainpicture from '../../images/main-picture.jpg';

export function Main() {
  return (
    <div className='main'>
     <img src={mainpicture} alt="" />
      <div className="titles">
        <p className='intro'>Perfect Weddings</p>
        <p className='sub-intro'>Bespoke Wedding Planners</p>
      </div>

    </div>
  )
}

