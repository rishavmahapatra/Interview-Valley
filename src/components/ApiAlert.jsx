import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Loader } from 'lucide-react'

function ApiAlert() {
  return (
      <div className=" absolute z-10 -translate-x-1/2 top-1/2 left-1/2 fade-in">
                <Alert className="bg-white dark:bg-black dark:shadow-neutral-800 shadow-sm" variant="default">
                  <Loader className="animate-spin"/>
  <AlertTitle>Please wait!</AlertTitle>
  <AlertDescription>
    We are using a free tier server which may take upto a minute to respond due to cold start.
  </AlertDescription>
</Alert>
              </div>
  )
}

export default ApiAlert
