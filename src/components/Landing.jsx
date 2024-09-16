"use client";
import Blackhole from "./Blackhole";

import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();
  
  return (
    <div>
    <div className="relative min-h-screen bg-[#030014]">
      <Blackhole />
    <div className="relative">
      <div>
        <div className="relative mx-auto max-w-2xl py-20  sm:py-38 ">
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
            <p className=" text-teal-100 my-10 text-lg leading-8 ">
              Practice job interview questions tailored to your job description.
              Get instant AI score and feedback.
            </p>
            <Button className="lg:mt-14 hover:bg-[#43219D]" variant="outline" onClick = { ()=>navigate('/signin') } >Get Started</Button>
            {/* <Button
          className="mt-10 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition hover:bg-gradient-to-br"
          onClick={() => navigate("/signin")}
        >
          Get Started
        </Button> */}
          </div>
          {/* YouTube Autoplay Video */}
      <div className="relative mx-auto mt-20 sm:mt-7  pt-0 flex justify-center max-w-4xl w-full">
        <iframe
          className="rounded-lg shadow-2xl w-[800px] h-[210px] sm:h-[377px] border-white"
          src="https://www.youtube.com/embed/1OCiv1ypo3k?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=1OCiv1ypo3k&cc_load_policy=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </div>
        
      </div>
    </div>
    </div>
    <div className="relative min-h-32 bg-[#030014]"></div>
    </div>
  );
}
// onClick = {Navigate to="/login"}