import React from 'react'

function Footer1() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='max-w-7xl mt-0 dark:bg-neutral-950 mx-auto px-4 pb-6 sm:px-6 lg:px-8 '>
      <div className="border-t flex justify-center border-neutral-800 pt-6">
          <p className="text-gray-400 text-sm">© {currentYear} Interview Valley. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer1
