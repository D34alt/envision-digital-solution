import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-slate-900/80 p-5">
      <summary className="flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <p className="pt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
        {answer}
      </p>
    </details>
  );
}
