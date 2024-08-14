import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Upload({onUpload}) {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState(null);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file_resume", resume); 
      formData.append("file_jd", jobDescription);
  
      const response = await fetch(
        "http://127.0.0.1:8000/questions_generation_from_resume_jd",
        {
          method: "POST",
          body: formData,
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        onUpload(data.questions, data.interview_id);
        navigate("/interview"); // Navigate to Chat component
      } else {
        alert("Failed to upload files. Please try again.");
      }
    };
  return (
    <div>
    <Card className="sm:flex sm:flex-row w-full  max-w-4xl mx-auto pt-10 my-28 sm:my-40">
      <CardHeader>
        <CardTitle className="text-2xl">Upload Files</CardTitle>
        <CardDescription>
          Upload your Resume & Job Description below then proceed to interview.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="resume">Resume</Label>
      <Input id="resume" type="file" className="file:text-primary" onChange={(e) => setResume(e.target.files[0])}
                        required />
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="jd">Job Description</Label>
      <Input id="jd" type="file" className="file:text-primary" onChange={(e) => setJobDescription(e.target.files[0])}
                        required />
    </div>
      </CardContent>
      <CardFooter>
        <Button onClick ={handleSubmit} className="w-full">Start Interview</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
