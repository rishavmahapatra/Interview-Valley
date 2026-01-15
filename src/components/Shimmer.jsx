import { useState } from "react";
import ApiAlert from "./ApiAlert.jsx";


import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
export default function Shimmer() {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
      }, 6000);
  return (
    <>
    {loading && (<ApiAlert />)}
     
    <div className="fade-in flex flex-col justify-center items-center mx-auto px-4 sm:px-8 max-w-7xl w-full">
      <div className="max-w-7xl w-full mt-8 pt-4">
        <div className=" w-full p-4 rounded-lg shadow-sm bg-neutral-100/15 dark:bg-neutral-900/15 space-y-4 overflow-hidden">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="flex gap-3 p-4 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 animate-pulse"
            >
             
              <div className="h-4 w-6 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="flex-1 space-y-3">
                <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-4 w-2/4 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="flex gap-2 mt-2">
                  <div className="h-7 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
