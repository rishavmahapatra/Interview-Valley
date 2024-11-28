import React from 'react'
import { ScrollArea } from './ui/scroll-area'


export default function QuestionsPage({questions,data}) {
  return (
    
    <div className='fade-in sm:mt-16 px-3' >
        <h1 className='m-1 p-1'>Questions:</h1>
        <ScrollArea className= "h-[530px] w-full p-4 rounded-md border-indigo-50 border">
      <ul>
        {questions.map((x,index)=>(
            <li key={index}>
                <h2>{`${index+1})`} {x}</h2>
                <br/>
                <p><strong>Skill:</strong> {data.skills[index].join(", ")}</p>
                <p><strong>Grade:</strong> {data.grade[index]}</p>
                <br/>
            </li>
        ))}
      </ul>
      </ScrollArea>
    </div>
  )
}
