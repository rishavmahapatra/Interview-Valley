import React, { useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "@/components/ui/button";
import { url } from "@/components/config.jsx";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { File,Lightbulb } from "lucide-react";
import ApiAlert from "./ApiAlert.jsx";

export default function QuestionsPage({ data,setData }) {

  const [answer, setAnswer] = useState({});
  const [visible, setVisible] = useState({});
  const [loadingId, setLoadingId] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answer));
    console.log(JSON.stringify(answer));
  }, [answer]);
  
  useEffect(() => {
  if (loadingId !== null) {
    const timer = setTimeout(() => setLoading(true), 2000);
    return () => clearTimeout(timer);
  } else {
    setLoading(false);
  }
}, [loadingId]);


  const handleGetAnswer = (id) => {
    const question = data.find((q) => q.id === id)?.question;
    const answer = data.find((q) => q.id === id)?.answer;
    async function fetchAnswer() {
      setLoadingId(id);
      try {
        const response = await fetch(`${url}/get_answer/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question, answer }),
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
    setVisible((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <div className="fade-in h-[calc(100vh-64px)] flex flex-col justify-center align-center px-4 sm:px-8">
      {loading && (<ApiAlert />)}
      <div className="flex items-center justify-between my-2">
        <h1 className=" text-xl mb-2 my-auto text-neutral-700 dark:text-gray-300">
          {/* <File className="inline-block mr-2 mb-1 text-indigo-400 dark:text-indigo-300" /> */}
          🧾 Resume based Questions-
        </h1>
     < div> 
     <Button variant="ghost" className="mb-1" download>
        <a href={`${url}/view/696ec0db740876007820d083`}  target="_blank">
        <File className="mr-2 mb-1 inline-block text-indigo-400 dark:text-indigo-300" />Downaload Resume
        </a>
        </Button> 
        <Button
        variant="ghost"
          className="mb-1"
          onClick={() => {
            localStorage.removeItem("questions");
            setData([]);
          }}
        >
          Start New Interview
        </Button></div>
      </div>
<div className="max-w-7xl">
           <ScrollArea className="h-[78vh] w-full p-4 rounded-lg border border-gray-200 shadow-sm bg-white dark:bg-gray-900 dark:border-gray-700">
        <ul className="space-y-4 ">
          {data.map((x) => (
            <li key={x.id}>
              <div className="flex items-start gap-3 p-4 rounded-md bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700/50 transition-colors">
                <span className="font-bold">{x.id}.</span>
                <div>
                  <p className="text-gray-900 dark:text-gray-200 leading-relaxed">
                    {x.question}
                  </p>

                  {visible[x.id] && (
                    <p className="text- my-4 font-semibold fade-in text-gray-500 dark:text-gray-400">
                      <span className="text-green-600 dark:text-green-400 ">
                        Answer:{" "}
                      </span>
                      {x.answer}
                    </p>
                  )}
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="default"
                      className={`bg-blue-500 dark:text-neutral-50 dark:bg-blue-500 hover:bg-blue-500/90 hover:dark:bg-blue-600 text-xs ${
                        visible[x.id] ? "hidden" : "block"
                      }`}
                      onClick={() => handleShowAnswer(x.id)}
                    >
                      Show AI answer ➤
                    </Button>
                    
                    {answer[x.id] ? (
                      <div className="my-4 fade-in">
                        {/* <h3 className="  font-semibold text-green-600 dark:text-green-400 ">
                          New answer:
                        </h3> */}
                        <div className="prose dark:prose-invert max-w-none mt-2">
                          <ReactMarkdown >{answer[x.id]}</ReactMarkdown>
                        </div>

                        {/* <Button className="mt-2" onClick={() => handleSpeak(answer[x.id])}>
                          {speaking ? 'Stop Speaking' : 'Read Aloud'}
                          </Button> */}
                      </div>
                    ) : (
                      <div className={`flex gap-2 items-center ${visible[x.id] ? "flex" : "hidden"}`}>
                        <Button
                          variant="default"
                          className="text-xs px-5 py-1 inline-flex justify-center items-center"
                          onClick={() => handleGetAnswer(x.id)}
                          disabled={loadingId === x.id}
                        >
                          {loadingId === x.id
                            ? "Generating..."
                            : (<>Explain more<Lightbulb className="w-4 h-4" /></>)}
                        </Button>
                        {/* <Button
                          variant="outline"
                          className="text-xs px-2 py-1"
                          onClick={() => handleGetAnswer(x.id)}
                          disabled={loadingId === x.id}
                        >
                          {loadingId === x.id
                            ? "Generating..."
                            : "Generate new answer ➤"}
                        </Button> */}
                        
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
</div>
     
    </div>
  );
}
