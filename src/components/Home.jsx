import React, { useState } from "react";
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

export default function Home({ username = "Interviewer" }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState(null);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:8000/questions_generation_from_files/?interviewee_fname=${encodeURIComponent(
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
    if (!firstName || (!resume && !jobDescription)) {
      alert("Please Enter Mandatory Fields and try again");
      return;
    }
    const formData = new FormData();
    if (resume) {
      formData.append("files_upload", resume);
    }
    if (jobDescription) {
      formData.append("files_upload", jobDescription);
    }

    const token = localStorage.getItem("access_token");

    if (!token) {
      return <h1 className="mt-16"> Please Login</h1>;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      // onUpload(data.questions, data.interview_id);
      console.log(data);
      // navigate("/interview"); // Navigate to Chat component
    } else {
      alert("Failed to upload files. Please try again.");
    }
  };
  const str = username.split("@", 1);
  return (
    <div className="lg:min-h-screen top-0 lg:flex gap-x-64 lg:absolute ">
      <div className=" min-w-64 mt-16 flex flex-col  items-start justify-start  border-r-2 ">
        <h1 className="mt-24 ml-3 dark:text-slate-100 px-2 antialiased font-medium mb-6 text-lg">
          Hello Rishav <br /> Welcome Back
        </h1>
      </div>
      <div className="relative left-24 m-10 flex flex-col justify-center items-center">
        <p className="my-6 antialiased text-2xl font-medium  ">
          First step towards the{" "}
          <span className="text-3xl line-through text-red-600">lazy</span>{" "}
          <span className="mx-1 text-3xl text-blue-400">SMART</span> interview!
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-56">Start Interview</Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[425px]"
            // onInteractOutside={(e) => { e.preventDefault(); }}
          >
            <DialogHeader>
              <DialogTitle>Enter Interviewee details</DialogTitle>
              {/* <DialogDescription>
          Enter Interviewee details
          </DialogDescription> */}
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
                  required
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
                  id="interviewee_companyl"
                  placeholder=" optional"
                  className="col-span-3"
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <DialogHeader className="my-4">
                <DialogTitle>Upload Resume or Job Description</DialogTitle>
              </DialogHeader>
              {/* <DialogTitle>Upload Resume & Job Description</DialogTitle> */}
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
                  className=" file:text-muted-foreground col-span-3"
                  onChange={(e) => setJobDescription(e.target.files[0])}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit}>
                Save & proceed
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
