import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function FeatureCard() {
  const cardTitle = [
    "Upload Your Resume",
    "Upload Your Resume",
    "Upload Your Resume",
    "Upload Your Resume",
  ];
  const CardDescription = [
    "Upload either Resume or Job Description and get Questions perfectly matched to the experience and background for hiring the right candidate you are looking for.",
   "Upload either Resume or Job Description and get Questions perfectly matched to the experience and background for hiring the right candidate you are looking for.",
   "Upload either Resume or Job Description and get Questions perfectly matched to the experience and background for hiring the right candidate you are looking for.",
   "Upload either Resume or Job Description and get Questions perfectly matched to the experience and background for hiring the right candidate you are looking for.",
  ];

  return (
    <div className="grid gap-14 lg:grid-cols-2 mt-16 pb-4 mx-10">
      {cardTitle.map((cardTitle, index) => (
        <Card
          className="w-full mx-auto bg-[#adcce9] shadow-md shadow-white text-black from-[#6b96be] to-[#7c4bcb]"
          key={index}
        >
          <CardHeader className="flex flex-row items-center">
            <img src="feature1.png" className="w-20 h-20 " alt="feature1" />
            <CardContent>
              <CardTitle className="text-2xl">{cardTitle}</CardTitle>
              <p className="text-lg">{CardDescription[index]}</p>
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
