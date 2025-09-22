import { Navigate, Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {url} from '@/components/config.jsx';
import { OtpVerification } from "./OtpVerification";
import { GoogleLogin } from '@react-oauth/google';

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's a link to login if you already have an account";

export function SignUp({ onLogin }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [accountData,setAccountData] = useState({});

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);

    try{
      const response = await fetch(`${url}/register/otp`,{
        method: 'POST',
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": email,
          "password": password,
          "first_name": lastName,
          "last_name": lastName,
          "mobile_number": mobileNo
        }),
       
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        setAccountData(result);
    }else {
      const errorText = await response.json().msg;
      console.error("Error response:", errorText);
      alert("Login failed. Please try again.");}
  }catch (error) {
    console.error("Error caught:", error);
    alert("An error occurred. Please try again later.");
  }finally{
    setLoading(false);
  }
}
  const navigate = useNavigate();

  const Login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse), onLogin(), navigate("/home");
    },
    flow: "auth-code",
    // onError: responseGoogle,
  });
  return ( 
    <div className="flex justify-center items-center h-screen">
    {Object.keys(accountData).length>0 ? <OtpVerification accountData={accountData} /> :
    (<Card className="fade-in mx-auto p-px max-w-sm ">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name"
              value={firstName}
              onChange= {(e)=>setFirstName(e.target.value)}
               placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name"
              value = {lastName}
              onChange= {(e)=>setLastName(e.target.value)}
              placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input id="mobile"
             value={mobileNo}
             onChange= {(e)=>setMobileNo(e.target.value)}
             type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange= {(e)=>setEmail(e.target.value)}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password"
             value={password}
             onChange= {(e)=>setPassword(e.target.value)}
             type="password" />
          </div>
          <Button type="submit" className="w-full" onClick= {handleSubmit} >
            Create an account
          </Button>
          {/* <Button variant="outline" className="w-full"
            onClick={Login}
          >
            Sign up with Google
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="underline">
            Sign in
          </Link>
        </div>
        <div className="mx-auto text-center">or</div>
        <div className="mt-4">
          <GoogleLogin
            onSuccess={(tokenResponse) => {
              console.log(tokenResponse);
              onLogin();
              navigate("/home");
            }}
            onError={(error) => {
              console.error("Google Login Error:", error);
            }}
          />
        </div>
      </CardContent>
    </Card>)
    }
    </div>
  );
}
