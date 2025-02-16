import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { Button } from "./ui/button";
import { url } from "./config";
import { useNavigate } from "react-router-dom";

export function OtpVerification({ accountData }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${url}/verify-new-user/otp`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: accountData.user_id,
          email: accountData.email,
          otp: value,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        alert(
          `${result.message} Please login with your registered Email to continue.`
        );
        navigate("/signin");
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        alert("Verification failed. Please check your OTP.");
      }
    } catch (error) {
      console.error("Error caught:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
      <div className="flex flex-col w-full gap-4 p-4 m-4 justify-center items-center">
        <h1>Verify OTP sent to your Email</h1>
        <InputOTP maxLength={6} value={value} onChange={(e) => setValue(e)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm">
          {value === accountData.email ? (
            <>
              Verified. Account created Successfully. Please Login to Continue.
            </>
          ) : (
            <Button onClick={handleSubmit}>
              {loading ? `Verifying User` : `Verify`}
            </Button>
          )}
        </div>
      </div>
  );
}
