"use client";
import FeatureCard from "./FeatureCard";
// import Blackhole from "./Blackhole";

import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="sm:min-h-screen mt-32">
 {/* only for portfolio purpose- uncomment first line and comment below line */}
      {/* <div className="sm:max-h-screen mt-32"> */}
        <img className="absolute -z-10 object-contain h-[650px] opacity-30 brightness-50  w-full top-16" src="bg-transparent.png" alt="bg" />
        {/* bg-gradient-to-r from-[#1f0505] via-[#440464] to-[#010736] */}
        {/* <Blackhole /> */}
        <div className="relative">
          <div>
            <div className="relative mx-auto max-w-5xl my-20 sm:py-38 ">
             
              <div className="mt-24"></div>
              <div className=" hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="fade-in bg-neutral-950 shadow-sm shadow-indigo-500 relative antialiased rounded-full px-3 py-2 text-md leading-6 text-blue-100 ring-1 ring-primary-600/10 hover:ring-primary-600/20">
                  Level up the interview game with real-time AI-Generated
                  Questions.{" "}
                  <a href="#" className=" font-semibold text-primary-600 ">
                    <span aria-hidden="true" className=" absolute inset-0 " />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="fade-in antialiased text-center mx-auto ">
                {/* animate-pulse delay-100 duration-800 */}
                <h1 className="translate text-5xl py-2 sm:text-6xl font-extrabold bg-clip-text text-transparent bg-primary dark:bg-gradient-to-r from-cyan-200 dark:to-violet-600 tracking-tight ">
                {/* <h1 className="text-5xl py-2 sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 tracking-tight "> */}
                {/* <h1 className="text-5xl py-2 sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 tracking-tight "> */}
                  Interview Smarter,
                  <br/>
                  Hire Faster
                </h1>
                <p className="mt-8 mx-auto max-w-4xl text-lg sm:text-xl">
                Empowering interviewers with smarter tools and insights to streamline hiring and simplify selection
                </p>
                {/* <Button
                  className="my-2"
                  // variant="outline"
                  onClick={() => navigate("/signin")}
                >
                  Get Started
                </Button> */}
                <Button
                  className="mt-10 py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
                  onClick={() => navigate("/signin")}
                >
                  Get Started
                </Button>
                {/* YouTube Autoplay Video */}
                <div className="relative mx-auto mt-10 mb-16 flex justify-center max-w-4xl w-full">
                  <iframe
                  // shadow-md shadow-indigo-400 border-opacity-50 border-2 border-indigo-400
                    className="rounded-lg ring-1 sm:w-[640px] sm:h-[360px] w-[360px] h-[198px]"
                    src="https://www.youtube.com/embed/1OCiv1ypo3k?mute=1&autoplay=0&controls=0&rel=0&loop=1&playlist=1OCiv1ypo3k&cc_load_policy=0"
                    title="How to Use"
                    alt="How to Use-Video"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <h1 className=" mx-auto text-center p-4 text-3xl bg-black font-bold sticky top-16 ">Features</h1>
        <FeatureCard/>
      </div>
      {/* <div className="relative  min-h-screen bg-[#030014]">
        
      </div> */}
      
    </div>
  );
}
// onClick = {Navigate to="/login"}
