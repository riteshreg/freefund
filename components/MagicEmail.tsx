import React, { useState, useRef, useEffect } from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

export default function MagicEmail() {
  const [showConfetti, setShowConfetti] = useState(false);
 

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <>
      <motion.div 
        animate={{scale: [1, 2, 2, 1, 1]}}
        className='flex flex-col items-center justify-center h-screen'
      
      >
        <div className='flex items-center justify-center h-full'>
          {showConfetti && (
            <Confetti
            className='h-full'
            />
          )}
  
          <div className='flex flex-col items-center justify-center bg-green-500 px-5 py-5 shadow-md rounded-md'>
            <div className='my-4'>
              <EnvelopeOpenIcon className='w-60 h-80 text-white text-center' />
            </div>

            <div className='my-4'>
              <h1 className='text-4xl font-bold'>Email Sent Successfully! Check Your Email</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
