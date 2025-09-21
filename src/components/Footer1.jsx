import React from 'react'

function Footer1() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='max-w-7xl mt-0 dark:bg-neutral-950 mx-auto px-4 pb-6 sm:px-6 lg:px-8 '>
      <div className="border-t  border-neutral-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} GroxAI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="/" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="/" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer1
