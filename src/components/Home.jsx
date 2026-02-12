import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { url } from "@/components/config.jsx";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot } from "lucide-react";
import RecentInterview from "./RecentInterview";
import QuestionsPage from "./QuestionsPage";
import Shimmer from "./Shimmer";
import { Upload } from 'lucide-react';

export default function Home({ user = "Interviewer" }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState([]);

  const prevQuestions = JSON.parse(localStorage.getItem("questions"));

  useEffect(() => {
    if (prevQuestions) {
      setData(prevQuestions);
    }
  }, []);
  // Update data when localStorage changes
  // useEffect(()=>setData(),[data])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume && !jobDescription) {
      alert("Please Enter Mandatory Fields and try again");
      return;
    }

    // let url = `https://interviewvalley.onrender.com/questions_generation_from_files/?interviewee_fname=${encodeURIComponent(
    //   firstName
    // )}`;
    // if (lastName) {
    //   url += `&interviewee_lname=${encodeURIComponent(lastName)}`;
    // }
    // if (email) {
    //   url += `&interviewee_email=${encodeURIComponent(email)}`;
    // }
    // if (phone) {
    //   url += `&interviewee_phone=${encodeURIComponent(phone)}`;
    // }
    // if (company) {
    //   url += `&interviewee_company=${encodeURIComponent(company)}`;
    // }

    const formData = new FormData();
    if (resume) {
      formData.append("resume", resume);
    }
    if (jobDescription) {
      formData.append("files_upload", jobDescription);
    }

    // const token = localStorage.getItem("access_token");

    // if (!token) {
    //   alert("Please Login again to continue using services");

    //   return;
    // }

    setLoading(true); // Set loading to true
    
    try {
      const response = await fetch(`${url}/upload`, {
        method: "POST",
        headers: {
          // Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(typeof data);
        setData(data);
        localStorage.setItem("questions", JSON.stringify(data));
        // Handle the successful response, e.g., navigate to another page
      } else {
        alert("Failed to upload files. Please try again.");
      }
      
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  };
  if (loading){
    return (
     
        <Shimmer />
   
    );
  }
  return (
    <section id="home">
      <div className="2xl:max-w-7xl h-[calc(100vh-64px)] sm:h-auto lg:h-full lg:min-h-[calc(100vh-64px)] w-full items-between justify-center mx-auto flex ">
        {data?.length === 0 ? (
          <div className="w-full relative sm:top-56 lg:top-0 flex flex-col max-w-4xl lg:max-w-6xl justify-center lg:gap-5 items-center">
            {/* <p className="text-2xl py-2 sm:text-5xl antialiased text-center font-bold tracking-tight drop-shadow-lg bg-clip-text dark:text-transparent text-black bg-black/60 dark:bg-gradient-to-b from-neutral-50 to-neutral-600"> */}
            <p
              className="text-3xl fade-in py-2 sm:text-5xl font-semibold text-center bg-clip-text text-transparent
              bg-gradient-to-br from-slate-800 via-slate-700 to-slate-400 
              dark:from-slate-200 dark:via-slate-300 dark:to-slate-600"
              //  dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d]
            >
              First step towards the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#245395] via-[#874a9a] to-[#d0190f] dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d]">SMART interview</span><span className="text-yellow-500">✨</span>
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="fade-inn my-4 px-6 z-50 rounded-full drop-shadow-sm text-md h-11 transition-all duration-300 transform hover:scale-105">
                   <Upload className="mr-1 " />
                  Upload your resume or job description and let AI generate tailored interview Q&A
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[390px] sm:max-w-[425px]">
                <div className="py-4">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="mx-auto my-3">Upload Resume or Job Description</DialogTitle>
                  </DialogHeader>
                  {/* <div className="grid grid-cols-4 items-center justify-between gap-2">
                    <Label htmlFor="resume" className="text-right">
                      Resume
                    </Label> */}
                    <Input
                      id="resume"
                      type="file"
                      className="file:mr-4 file:px-4 file:border-0 file:rounded-md file:bg-muted file:text-foreground"
                      onChange={(e) => setResume(e.target.files[0])}
                      required
                    />
                  {/* </div> */}
                  {/* <DialogDescription className="text-center gap-0">
                    or
                  </DialogDescription>
                  <div className="grid grid-cols-4 items-center gap-2">
                    <Label htmlFor="jd" className="text-right">
                      Job Desc
                    </Label>
                    <Input
                      id="jd"
                      type="file"
                      className="file:text-muted-foreground col-span-3"
                      onChange={(e) => setJobDescription(e.target.files[0])}
                    />
                  </div> */}
                </div>
                {/* <DialogFooter> */}
                  <Button type="submit" className="w-fit mx-auto " onClick={handleSubmit}>
                    {loading ? "Loading..." : `Start Interview `}{" "}
                    {/* Show loading state */}
                  </Button>
                {/* </DialogFooter> */}
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <QuestionsPage data={data} setData={setData} />
        )}
      </div>
    </section>
  );
}
