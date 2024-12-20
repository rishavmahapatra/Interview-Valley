"use client";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";
// import Blackhole from "./Blackhole";

import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen">
        {/* only for portfolio purpose- uncomment first line and comment below line */}
        {/* <div className="sm:max-h-screen mt-32"> */}
        <img
          className="absolute -z-10 blur-sm object-contain h-[650px] opacity-30 brightness-50  w-full top-16"
          src="bg-transparent.png"
          alt="bg"
        />
        {/* bg-gradient-to-r from-[#1f0505] via-[#440464] to-[#010736] */}
        {/* <Blackhole /> */}
        <div className="relative">
          <div>
            <div className="relative mx-auto mt-16 lg:my-20 sm:py-38 ">
              <div className="lg:mt-24"></div>
              <div className=" hidden sm:mb-8 sm:flex sm:justify-center">
                {/* <div className="fade-in bg-neutral-950 shadow-sm shadow-indigo-500 relative antialiased rounded-full px-3 py-2 text-md leading-6 text-blue-100 ring-1 ring-primary-600/10 hover:ring-primary-600/20">
                  Level up the interview game with real-time AI-Generated
                  Questions.{" "}
                  <a href="#" className=" font-semibold text-primary-600 ">
                    <span aria-hidden="true" className=" absolute inset-0 " />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div> */}
              </div>
              <div className="fade-in antialiased text-center mx-auto ">
                {/* animate-pulse delay-100 duration-800 */}
                <h1 className=" translate text-5xl antialiased py-2 sm:text-8xl font-semibold bg-clip-text text-transparent bg-primary dark:bg-gradient-to-r from-[#c4e0fb] to-[#6a12f7]  ">
                  {/* <h1 className="text-5xl py-2 sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 tracking-tight "> */}
                  {/* <h1 className="text-5xl py-2 sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 tracking-tight "> */}
                  Interview Smarter,
                  <br />
                  Hire Faster
                </h1>
                <p className="mt-20 sm:mt-8 antialiased mx-auto max-w- sm:max-w-3xl text-sm sm:text-lg rounded-full px-3 py-2 text-md leading-1 dark:text-blue-100 ring-1 ring-primary-600/10 hover:ring-primary-600/20">
                  Makes hiring easier by using AI to create questions based on
                  Resumes, JD & skills
                </p>

                <Button
                  className=" mt-32 antialiased sm:mt-20 py-3 w-48 px-8 rounded-lg text-lg transition-transform transform "
                  onClick={() => navigate("/signin")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-0">
        <h1 className=" mx-auto text-center p-4 text-5xl dark:bg-black sticky top-16 ">
          Features
        </h1>
        <FeatureCard />
      </div>

      <div className="Product-Demo ">
        <h1 className=" mx-auto text-center p-4 text-5xl w-full dark:bg-black font-semibold  top-16">
          Product Demo
        </h1>
        <iframe
          // shadow-md shadow-indigo-400 border-opacity-50 border-2 border-indigo-400
          className="rounded-lg mt-10 mx-auto ring-1 sm:w-[640px] sm:h-[360px] w-[360px] h-[198px]"
          src="https://www.youtube.com/embed/1OCiv1ypo3k?mute=1&autoplay=0&controls=0&rel=0&loop=1&playlist=1OCiv1ypo3k&cc_load_policy=0"
          title="How to Use"
          alt="How to Use-Video"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Footer/>
      </div>
    </div>
  );
}
// onClick = {Navigate to="/login"}
