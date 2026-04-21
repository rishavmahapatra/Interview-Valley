import { Loader } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

function ApiAlert() {
  return (
    <div className="fixed left-1/2 top-24 z-50 w-[min(92vw,420px)] -translate-x-1/2 fade-in">
      <Alert className="border-amber-500/30 bg-white shadow-xl dark:bg-zinc-950">
        <Loader className="h-4 w-4 animate-spin text-amber-500" />
        <AlertTitle>Still working</AlertTitle>
        <AlertDescription>
          The free server may need up to a minute to wake up. Your request is
          still in progress.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default ApiAlert;
