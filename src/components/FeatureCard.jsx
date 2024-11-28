import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function FeatureCard() {
  const cardTitle = ["Upload Resume/Job Description", "Upload Your Resume"];
  const CardDescription = [
    "Upload either Resume or Job Description and get Questions perfectly matched to the experience and background for hiring the right candidate you are looking for.",
    "Upload once and get instant interview answers perfectly matched to your experience and backgroundUpload once and get instant interview answers perfectly matched to experience and backgroundUpload once and get instant interview answers perfectly matched to your experience and background.",
  ];

  return (
    <div className="grid gap-2 lg:grid-cols-2 mt-16 mx-4">
      {cardTitle.map((cardTitle, index) => (
        <Card className="w-full mx-auto bg-gradient-to-r text-black from-cyan-200 to-violet-600" key={index}>
            <CardHeader className="flex flex-row items-center">
          <img src="feature1.png" className="w-20 h-20 " alt="feature1" />
          <CardContent>
            <CardTitle className="text-2xl">{cardTitle}</CardTitle>
            <p>{CardDescription[index]}</p>
          </CardContent>
        </CardHeader>
        </Card>
      ))}
    </div>
  );
}
