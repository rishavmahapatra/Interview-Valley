import React, { useState,useEffect } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RecentInterview from "./RecentInterview";
import QuestionsPage from "./QuestionsPage";

export default function Home({ username = "Interviewer" }) {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [questions, setQuestions] = useState([]);
  const [data, SetData] = useState([]);

  const prevQuestions = JSON.parse(localStorage.getItem('questions'));
  useEffect(()=>{
    if(prevQuestions){
      SetData(prevQuestions);
    }
  },[]);
  // Update data when localStorage changes
  // useEffect(()=>SetData(),[data])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if  (!resume && !jobDescription) {
      alert("Please Enter Mandatory Fields and try again");
      return;
    }

    let url = `https://interviewvalley.onrender.com/questions_generation_from_files/?interviewee_fname=${encodeURIComponent(
      firstName
    )}`;
    if (lastName) {
      url += `&interviewee_lname=${encodeURIComponent(lastName)}`;
    }
    if (email) {
      url += `&interviewee_email=${encodeURIComponent(email)}`;
    }
    if (phone) {
      url += `&interviewee_phone=${encodeURIComponent(phone)}`;
    }
    if (company) {
      url += `&interviewee_company=${encodeURIComponent(company)}`;
    }

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
      const response = await fetch("http://localhost:8000/upload", {
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
        SetData(data);
        localStorage.setItem('questions', JSON.stringify(data));
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

  return (
    <section id="home">
      <div className="2xl:max-w-7xl lg:h-full lg:min-h-screen w-full justify-between mx-auto lg:flex ">
        <div className="bg-neutral-900 px-4 lg:w-80  h-52 lg:h-auto lg:mt-16 flex flex-col lg:space-y-14 lg:items-center lg:justify-start">
          <h1 className="lg:my-6 my-2 dark:text-neutral-200 px-2 antialiased lg:text-xl">
            Welcome {localStorage.getItem("access_token")}
          </h1>
          <RecentInterview />
        </div>
        {data?.length === 0 ? (
          <div className="w-full relative sm:top-56 lg:top-0 flex flex-col max-w-4xl lg:max-w-6xl justify-center lg:gap-8 items-center">
            <p className="text-2xl py-2 sm:text-5xl antialiased text-center font-extrabold tracking-tight drop-shadow-lg bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600">
              First step towards the{" "}
              <span className="line-through decoration-2 decoration-accent-foreground bg-clip-text text-transparent">
                lazy
              </span>{" "}
              SMART interview!
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="lg:w-64">Start Interview</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Enter Interviewee details</DialogTitle>
                </DialogHeader>
                <div className="grid gap-2 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interviewee_fname" className="text-right">
                      First Name
                    </Label>
                    <Input
                      id="interviewee_fname"
                      placeholder="*required"
                      className="col-span-3"
                      onChange={(e) => setFirstName(e.target.value)}
                      
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interviewee_lname" className="text-right">
                      Last Name
                    </Label>
                    <Input
                      id="interviewee_lname"
                      placeholder=" optional"
                      className="col-span-3"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interviewee_email" className="text-right">
                      Email Id
                    </Label>
                    <Input
                      id="interviewee_email"
                      placeholder=" optional"
                      className="col-span-3"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interviewee_phone" className="text-right">
                      Phone No
                    </Label>
                    <Input
                      id="interviewee_phone"
                      placeholder=" optional"
                      className="col-span-3"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="interviewee_company" className="text-right">
                      Company
                    </Label>
                    <Input
                      id="interviewee_company"
                      placeholder=" optional"
                      className="col-span-3"
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <DialogHeader className="my-4">
                    <DialogTitle>Upload Resume or Job Description</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="resume" className="text-right">
                      Resume
                    </Label>
                    <Input
                      id="resume"
                      type="file"
                      className="file:text-muted-foreground col-span-3"
                      onChange={(e) => setResume(e.target.files[0])}
                      required
                    />
                  </div>
                  <DialogDescription className="text-center m-0 p-0 gap-0">
                    or
                  </DialogDescription>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="jd" className="text-right">
                      Job Desc
                    </Label>
                    <Input
                      id="jd"
                      type="file"
                      className="file:text-muted-foreground col-span-3"
                      onChange={(e) => setJobDescription(e.target.files[0])}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleSubmit}>
                    {loading ? "Loading..." : "Save & proceed"}{" "}
                    {/* Show loading state */}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <QuestionsPage data={data}/>
        )}
      </div>
    </section>
  );
}