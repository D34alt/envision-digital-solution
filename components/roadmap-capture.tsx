"use client";

import { useActionState, useState } from "react";
import { ArrowRight, CircleCheckBig, LoaderCircle } from "lucide-react";
import {
  submitRoadmapCapture,
  type RoadmapCaptureState,
} from "@/app/actions/contact";

export default function RoadmapCapture() {
  const [state, formAction, pending] = useActionState<
    RoadmapCaptureState,
    FormData
  >(submitRoadmapCapture, null);

  const [email, setEmail] = useState("");

  if (state?.success) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-5 py-4">
        <CircleCheckBig className="h-5 w-5 shrink-0 text-cyan-300" />
        <p className="text-sm font-medium text-cyan-200">{state.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm leading-relaxed text-slate-300">
        Enter your email and we will send you our free 90-Day Marketing
        Clarity Plan, the same framework we use with clients.
      </p>
      <form action={formAction} className="flex flex-col gap-3 sm:flex-row">
        <input
          name="email"
          type="email"
          required
          placeholder="you@yourcompany.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 flex-1 rounded-full border border-white/10 bg-slate-950/70 px-5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30"
        />
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60"
        >
          {pending ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get My Roadmap
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
      {state?.error && (
        <p className="text-xs text-red-400">{state.error}</p>
      )}
    </div>
  );
}
