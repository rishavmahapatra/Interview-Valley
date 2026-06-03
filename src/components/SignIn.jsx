/* eslint-disable react/prop-types */
import { useGoogleLogin } from "@react-oauth/google";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function SignIn({ onLogin, user }) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        const profile = await response.json();

        localStorage.setItem("user", JSON.stringify(profile));

        user(profile);
        onLogin();
      } catch (error) {
        console.error("Google login failed:", error);
      }
    },

    onError: () => {
      console.log("Login Failed");
    },
  });

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
                    alt="Logo"
                    className="h-7 w-7 object-cover"
                    src="/icon.avif"
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
                {[
                  "Resume-aware questions",
                  "Instant AI feedback",
                  "Saved practice history",
                ].map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    {item}
                  </span>
                ))}
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

              <Button
                className="h-12 w-full rounded-lg text-base font-semibold"
                onClick={() => login()}
              >
                Continue with Google
              </Button>

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