import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Button } from "@/components/ui/button"

export default function QuestionsPage({ data }) {
  return (
    <div className="fade-in sm:mt-16 px-4 sm:px-8 pt-8 lg:mt-16 ">
      <div className='flex items-center justify-between'>
        <h1 className=" text-2xl font-semibold mb-4 text-gray-100">Questions</h1>
        <Button className='bg-indigo-600 text-white px-4 py-2 rounded mb-4' onClick={() => {localStorage.removeItem("questions"); window.location.reload()}}>Start New Interview</Button>
      </div>


      <ScrollArea className="h-[80vh] w-full p-4 rounded-lg border border-gray-700 shadow-sm bg-gray-900">
        <ul className="space-y-4">
          {data.map((x) => (
            <li key={x.id}>
              <div className="flex items-start gap-3 p-4 rounded-md bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors">
                <span className="font-bold text-indigo-400">{x.id}.</span>
                <p className="text-gray-200 leading-relaxed">{x.question}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
