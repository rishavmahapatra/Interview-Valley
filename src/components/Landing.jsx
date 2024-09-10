"use client";
import Blackhole from "./Blackhole";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  
  return (
    <div className="relative  bg-[#030014]">
      <Blackhole />
    <div className="">
      <div>
        <div className="relative mx-auto max-w-2xl py-28 sm:py-38 ">
          <div className=" hidden sm:mb-8 sm:flex sm:justify-center">
            <div className=" relative antialiased rounded-full px-3 py-1 text-sm leading-6 text-blue-20 ring-1 ring-primary-600/10 hover:ring-primary-600/20">
              Level up your interview game with real-time AI-Generated
              Questions.{" "}
              <a href="#" className=" font-semibold text-primary-600 ">
                <span aria-hidden="true" className=" absolute inset-0 " />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="  text-center">
          {/* animate-pulse delay-100 duration-800 */}
            <h1 className=" text-4xl antialiased font-bold tracking-tight  drop-shadow-2xl sm:text-6xl">
              Boost your confidence, ace the job interview
            </h1>
            <p className="  mt-6 text-lg leading-8 ">
              Practice job interview questions tailored to your job description.
              Get instant AI score and feedback.
            </p>
            <Button className="m-10 relative" variant="outline" onClick = { ()=>navigate('/signin') } >Get Started</Button>
            
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}
// onClick = {Navigate to="/login"}