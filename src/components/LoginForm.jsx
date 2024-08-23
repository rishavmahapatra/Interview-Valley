import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm({ onLogin, userName }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      const response = await fetch("http://127.0.0.1:8000/token", {
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
      <Card className="max-w-80 sm:max-w-2xl mx-auto my-32">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Email</Label>
            <Input
              id="username"
              type="username"
              placeholder="e.g. rishav@gmail.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
