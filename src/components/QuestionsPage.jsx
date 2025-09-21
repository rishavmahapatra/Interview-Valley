import React, { useEffect } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Button } from "@/components/ui/button"
import {url} from '@/components/config.jsx';
import { useState } from 'react'
import ReactMarkdown from 'react-markdown';
// import { useSpeechSynthesis } from 'react-speech-kit'

export default function QuestionsPage({ data }) {
  // const { speak, cancel, speaking } = useSpeechSynthesis();
  // const handleSpeak = (markdownText) => {
  //   if (speaking) {
  //     cancel();
  //     return;
  //   }

  //   // ReactMarkdown doesn't automatically give you plain text from a rendered component.
  //   // The most reliable way is to pass the original string to the speak function.
  //   speak({ text: markdownText }); 
  //   setIsSpeaking(true);
  // };
  const [answer, setAnswer] = useState({});
  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answer));
    console.log(answer);
  }, [answer]);
  
  const handleGetAnswer = (id) => {
    const question = data.find(q => q.id === id)?.question;
    async function fetchAnswer() {
      const response = await fetch(`${url}/get_answer/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(prev => ({...prev, [id]: data.answer}));
      console.log(answer);
    }
    fetchAnswer()
  }
  return (
    <div className="fade-in sm:mt-16 px-4 sm:px-8 py-8 lg:mt-16 ">
      {/* <Button onClick={() => {console.log(localStorage.getItem('answers'))}}>Log Answer</Button> */}
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
    <div>
      <p className="text-gray-200 leading-relaxed">{x.question}</p>
      <p className="text-sm text-gray-400 mt-1">Answer: {x.answer}</p>
      {answer[x.id]   ? (
        <div className="mt-4 p-4 bg-gray-900 rounded-md">
          <h3 className="text-lg font-semibold text-green-400 mb-2">Answer:</h3>
          <ReactMarkdown >{answer[x.id]}</ReactMarkdown>
          {/* <Button className="mt-2" onClick={() => handleSpeak(answer[x.id])}>
        {speaking ? 'Stop Speaking' : 'Read Aloud'}
      </Button> */}
        </div>)
        :(<Button className="mt-2" onClick={() => handleGetAnswer(x.id)}>Generate new answer ➤</Button> )}
    </div>
  </div>
</li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
