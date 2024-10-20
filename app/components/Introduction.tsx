import React from 'react';
import { SELF_INTRO } from '../constants';

const Introduction = () => {
  return (
    <div className='w-full'>
          <div>
              <p className='font-bold text-3xl '>Hello there!</p>
              <p className='font-bold text-3xl mb-2'> I'm <span className='text-red-500'>Sahith Reddy</span></p>
              <p className='font-medium text-gray-400'>{SELF_INTRO}</p>
          </div>
    </div>
  )
}

export default Introduction;