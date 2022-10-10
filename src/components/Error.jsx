import React from 'react'

function Error({ children }) {
  return (
    <div className='text-center py-4 bg-red-600 text-white font-bold uppercase'>
        {children}
    </div>
  )
}

export default Error