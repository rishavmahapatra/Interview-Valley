import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useGoogleLogin } from '@react-oauth/google';

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export function SignIn({ onLogin, userName }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = useGoogleLogin({
    onSuccess: (tokenResponse) => {console.log(tokenResponse), onLogin(),navigate('/home')},
  flow: 'auth-code',
    // onError: responseGoogle,

  })
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data as URL-encoded
    const formBody = new URLSearchParams();
    formBody.append("grant_type", "password");
    formBody.append("username", username);
    formBody.append("password", password);
    formBody.append("scope", "");
    formBody.append("client_id", "string");
    formBody.append("client_secret", "string");

    try {
      const response = await fetch("https://interviewvalley.onrender.com/token/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(), // Send the form data as a string
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);

        // Store the access token
      localStorage.setItem('access_token', result.access_token);

        // Call the onLogin function and pass the username
        onLogin();
        userName(username);
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error caught:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div>
      
    <Card className="fade-in relative mx-auto mt-20 max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Login
          </Button>
          {/* <Button onClick={Login} variant="outline" className="w-full">
            Login with Google
          </Button> */}
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
