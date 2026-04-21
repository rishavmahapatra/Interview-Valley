import { useMemo, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  MessageSquareText,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const prompts = [
  {
    title: "Project impact",
    question: "Summarize one frontend project with measurable business impact.",
    focus: "Use a short STAR structure and include a concrete metric.",
    score: 86,
    tags: ["Behavioral", "Impact"],
    feedback: [
      "Names the user problem clearly.",
      "Needs one metric tied to speed, revenue, adoption, or reliability.",
      "Strong closing if you mention what changed after launch.",
    ],
  },
  {
    title: "Technical tradeoff",
    question: "Explain a UI architecture tradeoff you made under deadline.",
    focus: "Compare two options, why one won, and what risk remained.",
    score: 78,
    tags: ["Technical", "Architecture"],
    feedback: [
      "Good opportunity to show judgment, not only implementation.",
      "Mention constraints: time, team familiarity, complexity, or performance.",
      "Add what you would revisit with more time.",
    ],
  },
  {
    title: "Ownership follow-up",
    question: "Tell me about a time you noticed a problem before others did.",
    focus: "Show initiative, communication, and outcome.",
    score: 91,
    tags: ["Leadership", "Behavioral"],
    feedback: [
      "Strong signal for seniority and product sense.",
      "Include who you aligned with and how you created urgency.",
      "End with the durable process improvement.",
    ],
  },
];

const resumeSignals = [
  "React component systems",
  "Performance optimization",
  "Cross-functional delivery",
  "Design system ownership",
];

function ResumePreview() {
  return (
    <div className="h-full overflow-hidden bg-zinc-50 p-5 dark:bg-zinc-950">
      <div className="mx-auto h-full max-w-xl rounded-lg border border-zinc-900/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="h-6 w-48 rounded bg-zinc-900 dark:bg-white" />
            <div className="mt-3 h-3 w-64 max-w-full rounded bg-zinc-200 dark:bg-zinc-700" />
            <div className="mt-2 h-3 w-44 rounded bg-zinc-200 dark:bg-zinc-700" />
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
            <BriefcaseBusiness className="h-7 w-7" />
          </div>
        </div>

        <div className="mt-8 grid gap-5">
          {[
            ["Experience", "Led frontend performance work across checkout and onboarding flows."],
            ["Selected Projects", "Built reusable components, reduced repeated UI logic, and improved delivery speed."],
            ["Skills", "React, accessibility, profiling, API integration, design systems."],
          ].map(([section, detail], index) => (
            <section key={section}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {section}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                {detail}
              </p>
              <div className="mt-3 space-y-2">
                <div className="h-2.5 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-2.5 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
              </div>
              {index < 2 ? (
                <div className="mt-4 h-px bg-zinc-900/10 dark:bg-white/10" />
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function Chat() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPrompt = prompts[selectedIndex];
  const scoreTone = useMemo(() => {
    if (selectedPrompt.score >= 88) return "text-emerald-700 bg-emerald-100";
    if (selectedPrompt.score >= 80) return "text-sky-700 bg-sky-100";
    return "text-amber-800 bg-amber-100";
  }, [selectedPrompt.score]);

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#f7f4eb] px-4 py-8 dark:bg-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-400">
              <Sparkles className="h-4 w-4" />
              Interactive Demo
            </p>
            <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight text-zinc-950 dark:text-white">
              See how resume signals become sharper interview practice.
            </h1>
            <p className="mt-3 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
              Select a generated prompt to preview the focus area, answer
              coaching, and score breakdown.
            </p>
          </div>
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 justify-self-start rounded-lg bg-[#245395] px-5 text-sm font-semibold text-white transition hover:bg-[#245395]/90 lg:justify-self-end dark:bg-[#3980e3] dark:hover:bg-[#3980e3]/90"
            style={{ width: "fit-content" }}
            to="/home"
          >
            Try with my resume
            <ArrowRight className="h-4 w-4" />
          </Link>
        </header>

        <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-lg border border-zinc-900/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-900">
            <div className="flex items-center justify-between border-b border-zinc-900/10 px-4 py-3 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                <FileText className="h-4 w-4" />
                Resume Preview
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-200">
                4 signals found
              </span>
            </div>
            <div className="grid lg:grid-cols-[1fr_220px]">
              <div className="min-h-[520px]">
                <ResumePreview />
              </div>
              <aside className="border-t border-zinc-900/10 p-4 dark:border-white/10 lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Extracted Signals
                </p>
                <div className="mt-4 grid gap-2">
                  {resumeSignals.map((signal) => (
                    <div
                      className="flex items-center gap-2 rounded-lg border border-zinc-900/10 bg-zinc-50 p-3 text-sm font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200"
                      key={signal}
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      {signal}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.82fr_1fr] xl:grid-cols-1 2xl:grid-cols-[0.82fr_1fr]">
            <section className="rounded-lg border border-zinc-900/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                <MessageSquareText className="h-4 w-4" />
                Generated Prompts
              </div>
              <div className="mt-5 grid gap-3">
                {prompts.map((prompt, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      className={`rounded-lg border p-4 text-left transition ${
                        isSelected
                          ? "border-zinc-950 bg-zinc-950 text-white shadow-lg dark:border-white dark:bg-white dark:text-zinc-950"
                          : "border-zinc-900/10 bg-zinc-50 text-zinc-900 hover:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-white/30"
                      }`}
                      key={prompt.title}
                      onClick={() => setSelectedIndex(index)}
                      type="button"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-bold">{prompt.title}</p>
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            isSelected
                              ? "bg-white/15 text-current dark:bg-zinc-950/10"
                              : "bg-white text-zinc-500 dark:bg-zinc-950"
                          }`}
                        >
                          {prompt.score}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 opacity-80">
                        {prompt.question}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-lg border border-zinc-900/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    Coaching Preview
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-zinc-950 dark:text-white">
                    {selectedPrompt.title}
                  </h2>
                </div>
                <div className={`rounded-lg px-4 py-3 text-center ${scoreTone}`}>
                  <p className="font-display text-3xl font-bold">
                    {selectedPrompt.score}
                  </p>
                  <p className="text-xs font-semibold uppercase">readiness</p>
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-zinc-900/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-start gap-3">
                  <Target className="mt-1 h-5 w-5 text-sky-600" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      Focus
                    </p>
                    <p className="mt-2 leading-7 text-zinc-800 dark:text-zinc-100">
                      {selectedPrompt.focus}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {selectedPrompt.feedback.map((item) => (
                  <div
                    className="flex items-start gap-3 rounded-lg border border-zinc-900/10 bg-white p-3 dark:border-white/10 dark:bg-zinc-950"
                    key={item}
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                    <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg bg-zinc-950 p-4 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  <BarChart3 className="h-4 w-4" />
                  Rubric Snapshot
                </div>
                <div className="mt-4 grid gap-3">
                  {[
                    ["Specificity", selectedPrompt.score],
                    ["Structure", Math.max(selectedPrompt.score - 7, 60)],
                    ["Role fit", Math.min(selectedPrompt.score + 5, 98)],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-xs font-semibold uppercase text-zinc-400">
                        <span>{label}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-emerald-400"
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Chat;
