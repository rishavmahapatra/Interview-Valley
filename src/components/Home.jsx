import React from 'react'

export default function Home({ username = 'Interviewer' }) {
  
  const str= username.split("@",1);
  console.log(str);
  return (
    <div>
      <h1 className='mx-48 my-52 font-semibold text-2xl'>Hello {str} 👋</h1>
    </div>
  )
}
