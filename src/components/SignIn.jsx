import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { url } from "@/components/config.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const description =
  "A login form with email and password. There's a link to sign up if you don't have an account.";

export function SignIn({ onLogin, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    // Prepare the data as URL-encoded
    const formBody = new URLSearchParams();
    // formBody.append("grant_type", "password");
    formBody.append("email", username);
    formBody.append("password", password);
    // formBody.append("scope", "");
    // formBody.append("client_id", "string");
    // formBody.append("client_secret", "string");

    try {
      const response = await fetch(`${url}/signin`, {
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
        localStorage.setItem("access_token", result.name);

        // Call the onLogin function and pass the username
        onLogin();
        user(username);
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error caught:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="fade-in mx-auto p-px text-center max-w-sm w-full">
        <CardHeader className="flex flex-col items-center">
          <div className="montserrat-alternates-regular antialiased text-md">interview <span className="bg-gradient-to-r from-[#245395] via-[#874a9a] to-[#d0190f] dark:from-[#3980e3] dark:via-[#d280eb] dark:to-[#ea645d] text-transparent bg-clip-text ">valley</span></div>
          <CardTitle className="text-2xl font-medium py-2">Login or Create Account</CardTitle>
          <CardDescription  className="pb-3">
            Your current chat history on this device will be saved to your new
            account and sync across devices
          </CardDescription>
    
        {/* <CardContent className="pb-10 mx-auto w-[360px] text-center"> */}
            <GoogleLogin
          className="w-full"
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            localStorage.setItem("user", JSON.stringify(decoded));
            console.log(localStorage.getItem("user"));
            user(decoded);
            onLogin();
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        {/* <button className="bg-white">gfhg</button> */}
            </CardHeader>
          {/* <div className="grid gap-4">
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
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" onClick={handleSubmit} className="w-full">
              {loading ? `Logging in` : "Login"}
            </Button>
            <div></div>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div> */}
        {/* </CardContent> */}
      
      </Card>
    </div>
  );
}
