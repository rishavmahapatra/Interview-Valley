import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Error() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#f7f4eb] px-4 text-center dark:bg-zinc-950">
      <div className="max-w-md rounded-lg border border-zinc-900/10 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-zinc-900">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
          <SearchX className="h-7 w-7" />
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold text-zinc-950 dark:text-white">
          Page not found
        </h1>
        <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">
          The page you are looking for does not exist or has moved.
        </p>
        <Button asChild className="mt-6 rounded-lg">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back Home
          </Link>
        </Button>
      </div>
    </main>
  );
}

export default Error;
