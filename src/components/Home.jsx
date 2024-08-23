import React from 'react'

export default function Home({ username = 'Interviewer' }) {
  return (
   
    <div>
      <h1 className='mx-28 my-52 font-semibold text-2xl'>Hello {username} 👋</h1>
    </div>
  )
}
