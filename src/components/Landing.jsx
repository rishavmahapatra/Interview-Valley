"use client";
// import Blackhole from "./Blackhole";

import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative min-h-screen ">
        {/* bg-gradient-to-r from-[#1f0505] via-[#440464] to-[#010736] */}
        {/* <Blackhole /> */}
        <div className="relative">
          <div>
            <div className="relative mx-auto max-w-full my-20  sm:py-38 ">
              <div className=" hidden sm:mb-8 sm:flex sm:justify-center">
                <div className=" relative antialiased rounded-full px-3 py-2 text-lg leading-6 text-blue-100 ring-1 ring-primary-600/10 hover:ring-primary-600/20">
                  Level up your interview game with real-time AI-Generated
                  Questions.{" "}
                  <a href="#" className=" font-semibold text-primary-600 ">
                    <span aria-hidden="true" className=" absolute inset-0 " />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center mx-auto ">
                {/* animate-pulse delay-100 duration-800 */}
                <h1 className="text-5xl py-2 sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tight drop-shadow-lg">
                  Boost your confidence, ace the job interview
                </h1>
                <p className="mt-8 text-lg sm:text-2xl">
                  Practice job interview questions tailored to your job
                  description. Get instant AI score and feedback.
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
                    className="rounded-lg shadow-2xl shadow-indigo-950 sm:w-[640px] h-[360px] w-full"
                    src="https://www.youtube.com/embed/1OCiv1ypo3k?mute=0&autoplay=0&controls=0&rel=0&loop=1&playlist=1OCiv1ypo3k&cc_load_policy=0"
                    title="How to Use"
                    // frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* <Button
          className="mt-10 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition hover:bg-gradient-to-br"
          onClick={() => navigate("/signin")}
        >
          Get Started
        </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-32"></div>
      {/* bg-[#030014] */}
    </div>
  );
}
// onClick = {Navigate to="/login"}
