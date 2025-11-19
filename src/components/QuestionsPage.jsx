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
  const [visible, setVisible] = useState({});
  const [loadingId, setLoadingId] = useState(null);
  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answer));
    console.log(answer);
  }, [answer]);
  
  const handleGetAnswer = (id) => {
    const question = data.find((q) => q.id === id)?.question;
    async function fetchAnswer() {
      setLoadingId(id);
      try {
        const response = await fetch(`${url}/get_answer/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question }),
        });

        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();
        setAnswer((prev) => ({ ...prev, [id]: data.answer }));
        // show generated answer when it arrives
        setVisible((prev) => ({ ...prev, [id]: true }));
      } catch (err) {
        console.error("Failed to fetch answer:", err);
        setAnswer((prev) => ({ ...prev, [id]: "Error fetching answer." }));
        setVisible((prev) => ({ ...prev, [id]: true }));
      } finally {
        setLoadingId(null);
      }
    }
    fetchAnswer();
  };
  const handleShowAnswer = (id) => {
    setVisible(prev => ({ ...prev, [id]: true }));
  }
  return (
    <div className="fade-in flex flex-col justify-center align-center mt-10 sm:mt-8 px-4 sm:px-8 py-8 lg:mt-9 ">
      {/* <Button onClick={() => {console.log(localStorage.getItem('answers'))}}>Log Answer</Button> */}
      <div className='flex items-center justify-between'>
        <h1 className=" text-2xl font-semibold mb-4 text-neutral-800 dark:text-gray-100"> 🗒️ Resume based Questions</h1>
        <Button className='bg px-4 py-2 rounded mb-4' onClick={() => {localStorage.removeItem("questions"); window.location.reload()}}>Start New Interview</Button>
      </div>


  <ScrollArea className="h-[80vh] w-full p-4 rounded-lg border border-gray-200 shadow-sm bg-white dark:bg-gray-900 dark:border-gray-700">
        <ul className="space-y-4">
          {data.map((x) => (
           <li key={x.id}>
  <div className="flex items-start gap-3 p-4 rounded-md bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700/50 transition-colors">
    <span className="font-bold">{x.id}.</span>
    <div>
      <p className="text-gray-900 dark:text-gray-200 leading-relaxed">{x.question}</p>
      
      {visible[x.id] && (
        <p className="text-sm mt-1 font-semibold fade-in text-gray-500 dark:text-gray-400"><span className='text-green-600 dark:text-green-400 '>Answer: </span>{x.answer}</p>
      )}
      <div className="flex gap-2 mt-2">
      <Button variant="outline" className={` text-xs ${visible[x.id] ? 'hidden' : 'block'}`} onClick={() => handleShowAnswer(x.id)}>Show AI generated answer ➤</Button>
      {answer[x.id] ? (
        <div className="mt-2 fade-in">
          <h3 className="text-sm  font-semibold text-green-600 dark:text-green-400 ">New answer:</h3>
          <div className="text-sm font-semibold leading-relaxed text-gray-500 dark:text-gray-400">
            <ReactMarkdown>{answer[x.id]}</ReactMarkdown>
          </div>

          {/* <Button className="mt-2" onClick={() => handleSpeak(answer[x.id])}>
        {speaking ? 'Stop Speaking' : 'Read Aloud'}
      </Button> */}
      
        </div>)
        : (
          <>
            <Button
              variant="outline"
              className={`mt-0 text-xs ${visible[x.id] ? "block" : "hidden"}`}
              onClick={() => handleGetAnswer(x.id)}
              disabled={loadingId === x.id}
            >
              {loadingId === x.id ? "Generating..." : "Generate new answer ➤"}
            </Button>
          </>
        )}
         </div>
    </div>
  </div>
</li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
