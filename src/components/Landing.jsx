"use client";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="group">
      <div className="dark:grid-background"></div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:grid-background"></div>
      <section id="hero" className="py-20 min-h-screen">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-16">
          <div class="grid mt-10 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-8 mt-10">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ">
                Interview Smarter,
                <br />
                <span class="text-indigo-500">Hire Faster</span>
              </h1>

              <p class="text-xl text-muted-foreground text-gray-300">
                Makes hiring easier by using AI to create questions based on
                Resumes, Job Description &amp; skills. Get personalized interview questions
                and feedback in seconds.
              </p>

              <div class="flex flex-wrap gap-4 ">
                <button class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                onClick={()=>navigate("/signup")}>
                  Get Started Free
                </button>
                {/* <button class="px-8 py-4 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-medium rounded-lg text-lg transition-all duration-300">
                  Watch Demo
                </button> */}
              </div>

              <div class="flex items-center gap-4 text-gray-400 animate__delay-3s">
                <span class="flex items-center">
                  <svg
                    class="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  No Credit Card Required
                </span>
                <span class="flex items-center">
                  <svg
                    class="w-5 h-5 text-green-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Instant Access
                </span>
              </div>
            </div>

            <div class="relative">
              <video
                class="w-full rounded-[8px]"
                src="https://d12araoe7z5xxk.cloudfront.net/landing-page/video/new-hero-video.mp4"
                muted=""
                autoplay=""
                loop=""
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureCard />

      <section id="howItWorks" class="py-20 ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              How Interview Valley Works
            </h2>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">
              Three simple steps to transform your hiring process with
              AI-powered interviews
            </p>
          </div>

          <div class="relative">
            {/* <!-- Connection Line --> */}
            <div class="hidden lg:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 -translate-x-1/2"></div>

            {/* <!-- Step 1 --> */}
            <div class="relative lg:grid lg:grid-cols-2 gap-8 items-center mb-20 group">
              <div class="lg:text-right animate__animated animate__fadeInLeft">
                <div class="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-indigo-500 transition-all duration-300">
                  <span class="inline-block bg-indigo-600/20 text-indigo-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Step 1 ▾
                  </span>
                  <h3 class="text-2xl font-bold text-white mb-4">
                    Upload Resume or Job Description
                  </h3>
                  <p class="text-gray-400">
                    Simply upload your resume or job description. Our AI system
                    will analyze the content to understand the required skills
                    and experience level.
                  </p>
                </div>
              </div>
              <div class="hidden lg:block w-20"></div>
            </div>

            {/* <!-- Step 2 --> */}
            <div class="relative lg:grid lg:grid-cols-2 gap-8 items-center mb-20 group">
              <div class="hidden lg:block w-20"></div>
              <div>
                <div class="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-indigo-500 transition-all duration-300">
                  <span class="inline-block bg-purple-600/20 text-purple-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Step 2 ▾
                  </span>
                  <h3 class="text-2xl font-bold text-white mb-4">
                    AI Generates Questions
                  </h3>
                  <p class="text-gray-400">
                    Our advanced AI algorithms create tailored interview
                    questions based on the provided information, ensuring
                    relevance and depth.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Step 3 --> */}
            <div class="relative lg:grid lg:grid-cols-2 gap-8 items-center group">
              <div class="lg:text-right ">
                <div class="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-indigo-500 transition-all duration-300">
                  <span class="inline-block bg-indigo-600/20 text-indigo-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Step 3 ▾
                  </span>
                  <h3 class="text-2xl font-bold text-white mb-4">
                    Get Instant Feedback
                  </h3>
                  <p class="text-gray-400">
                    Receive immediate feedback on responses, including skill
                    assessment and suggested improvements for better interview
                    performance.
                  </p>
                </div>
              </div>
              <div class="hidden lg:block w-20"></div>
            </div>
          </div>

          {/* <div class="text-center mt-16 animate__animated animate__fadeInUp">
        <button class="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
          <span class="relative">Try It Now - It's Free</span>
          <div class="absolute inset-0 bg-white/20 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
        </button>
      </div> */}
        </div>
      </section>

      <section id="benefits" class="py-20 bg-neutral-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16 animate__animated animate__fadeIn">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Interview Valley?
            </h2>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the advantages of AI-powered interviewing that saves
              time and improves hiring accuracy
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              {/* <!-- Benefit 1 --> */}
              <div class="flex items-start space-x-4 animate__animated animate__fadeInLeft">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                    <svg
                      class="w-6 h-6 text-indigo-500"
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
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Save Time and Resources
                  </h3>
                  <p class="text-gray-400">
                    Reduce interview preparation time by 80% with instant
                    AI-generated questions and evaluations.
                  </p>
                </div>
              </div>

              {/* <!-- Benefit 2 --> */}
              <div class="flex items-start space-x-4 animate__animated animate__fadeInLeft animate__delay-1s">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                    <svg
                      class="w-6 h-6 text-purple-500"
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
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Improved Accuracy
                  </h3>
                  <p class="text-gray-400">
                    AI-driven analysis ensures consistent and unbiased
                    evaluation of candidate skills and experience.
                  </p>
                </div>
              </div>

              {/* <!-- Benefit 3 --> */}
              <div class="flex items-start space-x-4 ">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                    <svg
                      class="w-6 h-6 text-blue-500"
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
                  <h3 class="text-xl font-semibold text-white mb-2">
                    Instant Results
                  </h3>
                  <p class="text-gray-400">
                    Get immediate feedback and comprehensive skill assessments
                    without any delay.
                  </p>
                </div>
              </div>
            </div>

            <div class="relative ">
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
              <div class="relative bg-neutral-900 p-8 rounded-2xl border border-neutral-700">
                <div class="space-y-6">
                  <div class="flex items-center justify-between p-4 bg-neutral-800 rounded-lg">
                    <span class="text-white font-medium">Time Saved</span>
                    <span class="text-green-400 font-bold">80%</span>
                  </div>
                  <div class="flex items-center justify-between p-4 bg-neutral-800 rounded-lg">
                    <span class="text-white font-medium">Hiring Accuracy</span>
                    <span class="text-green-400 font-bold">95%</span>
                  </div>
                  <div class="flex items-center justify-between p-4 bg-neutral-800 rounded-lg">
                    <span class="text-white font-medium">Cost Reduction</span>
                    <span class="text-green-400 font-bold">60%</span>
                  </div>
                  <button
                   onClick={()=>navigate("/signup")}
                   class="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300">
                    Start Optimizing Your Hiring
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
