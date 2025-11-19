"use client";
import FeatureCard from "./FeatureCard";
import Footer1 from "./Footer1";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Land() {
  const navigate = useNavigate();

  return (
    <div className="relative">
    
     
      <div className="h-[90vh] container pt-72 flex max-w-[64rem] flex-col items-center gap-4 text-center">
        {/* <a class="rounded-2xl border shadow-md bg-muted px-4 py-1.5 text-sm font-medium" target="_blank" href="https://www.buymeacoffee.com/sanketbagad">Buy me a coffee🍻</a> */}
        <h1 className="font-bold  text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
         Prepare Smarter,<br/><span className="bg-gradient-to-r from-[#245395] via-[#874a9a] to-[#d0190f] dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d] text-transparent bg-clip-text ">Land the Job Faster</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A quick way to prepare for your next interview. Practice key questions, get insights about your answers, and get more comfortable interviewing.
        </p>
        <div className="space-x-4 space-y-4">
          
          <Button
                className="my-8 px-8 z-50 bg-primary font-medium rounded-md h-11 text-sm transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate("/signin")}
              >
               <Bot className="mr-2" />
               Get Started for Free
              </Button>
        </div>
      </div>
     

      <FeatureCard />

      <section id="howItWorks" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              How Interview Valley Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Three simple steps to transform your hiring process with
              AI-powered interviews
            </p>
          </div>

          <div className="relative">
            {/* <!-- Connection Line --> */}
            <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-[#3980e3] via-[#d280eb] to-[#ea645d] -translate-x-1/2"></div>

            {/* <!-- Step 1 --> */}
            <div className="relative lg:grid lg:grid-cols-2 gap-8 items-center mb-20 group">
              <div className="lg:text-right">
                <div className="bg-white/60 dark:bg-neutral-800 p-8 rounded-2xl border hover:border-indigo-500 transition-all duration-300">
                  <span className="inline-block bg-indigo-600/20 text-indigo-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Step 1 ▾
                  </span>
                  <h3 className="text-2xl font-bold dark:text-white mb-4">
                    Upload Resume or Job Description
                  </h3>
                  <p className="text-gray-400">
                    Simply upload your resume or job description. Our AI system
                    will analyze the content to understand the required skills
                    and experience level.
                  </p>
                </div>
              </div>
              <div className="hidden lg:block w-20"></div>
            </div>

            {/* <!-- Step 2 --> */}
            <div className="relative lg:grid lg:grid-cols-2 gap-8 items-center mb-20 group">
              <div className="hidden lg:block w-20"></div>
              <div>
                <div className="bg-white/60 dark:bg-neutral-800 p-8 rounded-2xl border hover:border-indigo-500 transition-all duration-300">
                  <span className="inline-block bg-purple-600/20 text-purple-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Step 2 ▾
                  </span>
                  <h3 className="text-2xl font-bold dark:text-white mb-4">
                    AI Generates Questions
                  </h3>
                  <p className="text-gray-400">
                    Our advanced AI algorithms create tailored interview
                    questions based on the provided information, ensuring
                    relevance and depth.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Step 3 --> */}
            <div className="relative lg:grid lg:grid-cols-2 gap-8 items-center group">
              <div className="lg:text-right ">
                <div className="bg-white/60 dark:bg-neutral-800 p-8 rounded-2xl border hover:border-indigo-500 transition-all duration-300">
                  <span className="inline-block bg-indigo-600/20 text-indigo-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Step 3 ▾
                  </span>
                  <h3 className="text-2xl font-bold dark:text-white mb-4">
                    Get Instant Feedback
                  </h3>
                  <p className="text-gray-400">
                    Receive immediate feedback on responses, including skill
                    assessment and suggested improvements for better interview
                    performance.
                  </p>
                </div>
              </div>
              <div className="hidden lg:block w-20"></div>
            </div>
          </div>

          {/* <div className="text-center mt-16 animate__animated animate__fadeInUp">
        <button className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
          <span className="relative">Try It Now - It's Free</span>
          <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
        </button>
      </div> */}
        </div>
      </section>

      <section id="benefits" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate__animated animate__fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Why Choose Interview Valley?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the advantages of AI-powered interviewing that saves
              time and improves hiring accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* <!-- Benefit 1 --> */}
              <div className="flex items-start space-x-4 animate__animated animate__fadeInLeft">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white mb-2">
                    Save Time and Resources
                  </h3>
                  <p className="text-gray-400">
                    Reduce interview preparation time by 80% with instant
                    AI-generated questions and evaluations.
                  </p>
                </div>
              </div>

              {/* <!-- Benefit 2 --> */}
              <div className="flex items-start space-x-4 animate__animated animate__fadeInLeft animate__delay-1s">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white mb-2">
                    Improved Accuracy
                  </h3>
                  <p className="text-gray-400">
                    AI-driven analysis ensures consistent and unbiased
                    evaluation of candidate skills and experience.
                  </p>
                </div>
              </div>

              {/* <!-- Benefit 3 --> */}
              <div className="flex items-start space-x-4 ">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-white mb-2">
                    Instant Results
                  </h3>
                  <p className="text-gray-400">
                    Get immediate feedback and comprehensive skill assessments
                    without any delay.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative ">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-300 dark:to-purple-300 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-gray-200 dark:border-neutral-700 shadow-md">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <span className="text-gray-700 dark:text-white font-medium">Time Saved</span>
                    <span className="text-green-500 font-bold">80%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <span className="text-gray-700 dark:text-white font-medium">Hiring Accuracy</span>
                    <span className="text-green-500 font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <span className="text-gray-700 dark:text-white font-medium">Cost Reduction</span>
                    <span className="text-green-500 font-bold">60%</span>
                  </div>
                  <Button
                  variant="primary"
                    onClick={() => navigate("/signin")}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
                  >
                    Start Optimizing Your Hiring
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div
        style={{
          backgroundImage: 'url("https://assets.dub.co/misc/grid.svg")',
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          top: 0,
          opacity: 0.3,
          filter: "invert(1)",
        }}
      ></div>
      </section>
      <Footer1 />
    </div>
  );
}
