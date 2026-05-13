/* eslint-disable react/prop-types */
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { ArrowLeft, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function SignIn({ onLogin, user }) {
  return (
    <main className="min-h-screen bg-[#f7f4eb] px-4 py-10 text-zinc-950 dark:bg-zinc-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-lg border border-zinc-900/10 bg-white shadow-2xl shadow-zinc-900/10 dark:border-white/10 dark:bg-zinc-900 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative hidden bg-zinc-950 p-10 text-white lg:block">
            <div className="relative flex h-full flex-col justify-between">
              <Link
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white"
                to="/"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-zinc-950">
                       <img
                    alt="User"
                    className="h-7 w-7 object-cover"
                    src= "icon.png" 
                  />
                </div>
                <h1 className="font-display text-5xl font-bold leading-tight">
                  Prepare with a calmer, smarter workflow.
                </h1>
                <p className="mt-5 max-w-md text-lg leading-8 text-zinc-300">
                  Sign in to keep your generated interview sessions available
                  across devices.
                </p>
              </div>
              <div className="grid gap-3 text-sm font-semibold text-zinc-200">
                {["Resume-aware questions", "Instant AI feedback", "Saved practice history"].map(
                  (item) => (
                    <span className="flex items-center gap-2" key={item}>
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </section>

          <section className="p-6 sm:p-10">
            <Link
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white lg:hidden"
              to="/"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mx-auto max-w-sm py-10">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  Welcome
                </p>
                <h2 className="mt-3 font-display text-4xl font-bold">
                  Login or create an account.
                </h2>
                <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
                  Use Google to start quickly. Your interview prep stays synced
                  and easy to return to.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-900/10 bg-zinc-50 w-[300px] sm:w-[360px] p-4 dark:border-white/10 dark:bg-white/5">
                <GoogleLogin className="w-full"
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    localStorage.setItem("user", JSON.stringify(decoded));
                    user(decoded);
                    onLogin();
                  }}
                />
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-lg bg-emerald-50 p-4 text-sm leading-6 text-emerald-950 dark:bg-emerald-400/10 dark:text-emerald-100">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none" />
                <p>
                  Authentication is only used to preserve your practice
                  sessions. You can continue using the app after sign-in.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
