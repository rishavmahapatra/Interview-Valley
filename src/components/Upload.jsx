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

      const token = localStorage.getItem('access_token');

      if (!token) {
        // console.error('No token found');
        return <h1 className='mt-16'> error</h1>;
      }
 

      const response = await fetch(
        "http://127.0.0.1:8000/questions_generation_from_resume_jd",
        {
          method: "POST",
          // params: {
          //   'fname': "rishav",
          // },
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
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
      {/* <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div> */}
    <Card className="sm:flex w-full max-w-4xl mx-auto pt-8 pb-6 my-40 lg:my-44">
      <CardHeader>
        <CardTitle className="text-2xl">Upload Files</CardTitle>
        <CardDescription>
          Upload your Resume & Job Description then proceed to interview.
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
