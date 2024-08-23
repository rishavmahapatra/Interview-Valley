"use client";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  
  return (
    <div className="relative h-96 px-6 pt-14 lg:px-8">
      <div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-28 sm:py-38 lg:py-28">
          <div className=" hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-20 ring-1 ring-primary-600/10 hover:ring-primary-600/20">
              Level up your interview game with real-time AI-Generated
              Questions.{" "}
              <a href="#" className=" font-semibold text-primary-600 ">
                <span aria-hidden="true" className=" absolute inset-0 " />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="  text-center">
            <h1 className="animate-pulse delay-100 duration-800 text-4xl  font-bold tracking-tight  drop-shadow-2xl sm:text-6xl">
              Boost your confidence, ace the job interview
            </h1>
            <p className="mt-6 text-lg leading-8 ">
              Practice job interview questions tailored to your job description.
              Get instant AI score and feedback.
            </p>
            <Button className="m-10" onClick = { ()=>navigate('/login') } >Login</Button>
            
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
// onClick = {Navigate to="/login"}