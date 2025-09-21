import React from "react";

export default function FeatureCard() {
  const cardTitle = [
    "Smart Resume Analysis",
    "Job Description Matching",
    "Skill-Based Questions",
    "AI-Powered Feedback",
    "Customizable Templates",
    "Interview Analytics",
  ];

  const cardDescription = [
    "Upload resumes and get AI-generated questions tailored to candidate experience and skills.",
    "Generate relevant questions based on job requirements and desired qualifications.",
    "Get precise technical and behavioral questions aligned with required competencies.",
    "Receive instant feedback and scoring on candidate responses and performance.",
    "Create and save interview templates for different roles and departments.",
    "Track and analyze interview performance metrics and hiring trends.",
  ];

  // Array of different SVG icons
  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#eabd5f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <polyline points="16 11 18 13 22 9"></polyline>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e68bd4"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-book-open-check"
    >
      <path d="M12 21V7"></path>
      <path d="m16 12 2 2 4-4"></path>
      <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#eabd5f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 512 512"
    >
      <g stroke="#eabd5f" stroke-width="10" fill="none">
        <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z"></path>
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#95d392"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-notepad-text"
    >
      <path d="M8 2v4"></path>
      <path d="M12 2v4"></path>
      <path d="M16 2v4"></path>
      <rect width="16" height="18" x="4" y="4" rx="2"></rect>
      <path d="M8 10h6"></path>
      <path d="M8 14h8"></path>
      <path d="M8 18h5"></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffb264"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-lightbulb"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
      <path d="M9 18h6"></path>
      <path d="M10 22h4"></path>
    </svg>,
  ];

  return (
    <section id="features" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
            Powerful Features for Smart Hiring
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your hiring process with AI-powered interview tools
            designed to save time and find the best candidates.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardTitle.map((title, index) => (
            <div
              className="relative group hover:-translate-y-2 transition-all duration-300 shadow-xl rounded-xl"
              key={index}
            >
              <span className="absolute inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full mx-auto h-[10px]"></span>
              <span className="absolute inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm group-hover:blur-lg w-full mx-auto h-[10px] transition-all duration-300"></span>
              <div className="relative h-full bg-white border dark:border-0  dark:bg-neutral-900 p-6 rounded-xl ">
                <div className="text-left mb-4">
                  {icons[index]}{" "}
                  {/* Dynamically inserting the corresponding SVG */}
                </div>
                <h3 className="text-xl font-semibold dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-400">{cardDescription[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
