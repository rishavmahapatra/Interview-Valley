import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function FeatureCard() {
  const cardTitle = [
    "Smart Resume Analysis",
    "Job Description Matching",
    "Skill-Based Questions",
    "AI-Powered Feedback",
    "Customizable Templates",
    "Interview Analytics",
  ];
  const CardDescription = [
    "Upload resumes and get AI-generated questions tailored to candidate experience and skills.",
    "Generate relevant questions based on job requirements and desired qualifications.",
    "Get precise technical and behavioral questions aligned with required competencies.",
    "Receive instant feedback and scoring on candidate responses and performance.",
    "Create and save interview templates for different roles and departments.",
    "Track and analyze interview performance metrics and hiring trends.",
  ];
  const image = [
    "feature1.png",
    "feature1.png",
    "feature1.png",
    "feature1.png",
    "feature1.png",
    "feature1.png",
  ];

  return (
    <section id="features" class="py-20 bg-neutral-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 ">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Smart Hiring
          </h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your hiring process with AI-powered interview tools
            designed to save time and find the best candidates.
          </p>
        </div>
        <div class=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardTitle.map((cardTitle, index) => (
            <div className="relative group hover:-translate-y-1 transition-all duration-500" key={index}>
              <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-md group-hover:blur-lg w-full mx-auto h-[10px]"></span>
              <div class="relative h-full bg-neutral-950 p-6 rounded-xl border-b hover:border-indigo-500 border-neutral-700  transition-all duration-300">
                <div class="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src={image[index]}
                    alt="Resume Upload"
                    class="w-8 h-8 transition-opacity duration-300 opacity-100"
                    loading="lazy"
                  />
                </div>
                <h3 class="text-xl font-semibold text-white mb-3">
                  {cardTitle}
                </h3>
                <p class="text-gray-400">{CardDescription[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <div class="absolute w-full flex justify-between mt-14">
        <img src="https://do6gp1uxl3luu.cloudfront.net/assets/codingLines.webp" alt="codingLines" class="object-cover opacity-0 lg:opacity-60" />
        <img src="https://do6gp1uxl3luu.cloudfront.net/assets/codingLinesRight.webp" alt="codingLinesRight" class="cover opacity-0 lg:opacity-60" />
        </div> */
}


