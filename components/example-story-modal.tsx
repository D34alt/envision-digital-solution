"use client";

import {
  type FocusEvent,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ArrowLeft, ArrowRight, Clock, X } from "lucide-react";

import {
  STORY_PAGE_COUNT,
  StoryIllustration,
  type StoryIllustrationId,
} from "@/components/story-illustrations";

export type StoryPage = {
  body: string;
};

export type Story = {
  id: StoryIllustrationId;
  /** Short, evocative working title shown in the modal header. */
  title: string;
  /** Reading-time hint shown beside the title. */
  readingTime: string;
  /** Six page bodies, one per beat. */
  pages: StoryPage[];
  /** Paraphrased customer reflection shown on the final page. */
  quote: string;
  /** Soft CTA copy shown at the end of the story. */
  ctaPrompt: string;
  ctaLabel: string;
  ctaHref: string;
};

type Props = {
  story: Story;
  initialPage?: number;
  onClose: () => void;
  /**
   * Called whenever the user pages forward or back, so the parent can
   * remember where the reader was if they reopen the same story in
   * the same session.
   */
  onPageChange?: (page: number) => void;
};

const SWIPE_THRESHOLD = 60;

export default function ExampleStoryModal({
  story,
  initialPage = 0,
  onClose,
  onPageChange,
}: Props) {
  const [page, setPage] = useState(initialPage);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // On mount: lock body scroll, listen for Escape and arrow keys,
  // remember the previously-focused element so we can return focus to
  // it on close, then move focus into the dialog.
  useEffect(() => {
    previouslyFocused.current =
      typeof document !== "undefined"
        ? (document.activeElement as HTMLElement | null)
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setPage((current) => Math.min(current + 1, STORY_PAGE_COUNT - 1));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setPage((current) => Math.max(current - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKey);

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [onClose]);

  // Surface page changes to the parent so it can remember a per-session
  // resume position.
  useEffect(() => {
    onPageChange?.(page);
  }, [page, onPageChange]);

  const goNext = useCallback(() => {
    setPage((current) => Math.min(current + 1, STORY_PAGE_COUNT - 1));
  }, []);

  const goBack = useCallback(() => {
    setPage((current) => Math.max(current - 1, 0));
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    // Only track primary touch / mouse drags.
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;

    // Treat as a swipe only if horizontal movement clearly dominates.
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }

    if (deltaX < 0) {
      goNext();
    } else {
      goBack();
    }
  };

  // Trap focus inside the dialog so Tab cannot escape into the page
  // behind it.
  const onContainerBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!dialogRef.current) return;
    const next = event.relatedTarget as Node | null;
    if (next && dialogRef.current.contains(next)) return;
    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });
  };

  const isFirst = page === 0;
  const isLast = page === STORY_PAGE_COUNT - 1;
  const currentPage = story.pages[page] ?? story.pages[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={story.title}
      className="fixed inset-0 z-[60] flex items-stretch justify-center bg-slate-950/80 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
        onBlur={onContainerBlur}
        className="relative flex h-full w-full flex-col overflow-hidden border border-white/10 bg-slate-900/95 text-slate-100 shadow-2xl sm:h-auto sm:max-h-[min(86vh,820px)] sm:w-full sm:max-w-3xl sm:rounded-3xl"
      >
        {/* Header */}
        <div className="flex items-start gap-3 border-b border-white/10 px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
              A real-world story
            </p>
            <h2 className="mt-1 truncate text-lg font-semibold text-white sm:text-xl">
              {story.title}
            </h2>
          </div>
          <span className="hidden h-8 shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/60 px-3 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-300 sm:inline-flex">
            <Clock className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
            {story.readingTime}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close story"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-slate-950/60 text-slate-200 transition hover:border-cyan-400/55 hover:bg-cyan-500/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 px-5 pt-4 sm:px-7">
          {Array.from({ length: STORY_PAGE_COUNT }).map((_, index) => {
            const active = index === page;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Go to page ${index + 1} of ${STORY_PAGE_COUNT}`}
                aria-current={active ? "step" : undefined}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  active
                    ? "w-6 bg-cyan-300"
                    : "w-2.5 bg-white/15 hover:bg-white/30"
                }`}
              />
            );
          })}
        </div>

        {/* Body */}
        <div
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          className="flex flex-1 flex-col gap-5 overflow-y-auto px-5 pb-32 pt-5 sm:gap-6 sm:px-8 sm:pb-6 sm:pt-6"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
            <div
              key={`illustration-${page}`}
              className="story-fade aspect-[4/3] w-full sm:aspect-[16/10]"
            >
              <StoryIllustration storyId={story.id} page={page} />
            </div>
          </div>

          <div
            key={`body-${page}`}
            className="story-slide space-y-4"
          >
            <p className="text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-relaxed">
              {currentPage.body}
            </p>

            {isLast ? (
              <div className="space-y-5">
                <blockquote className="border-l-2 border-cyan-400/70 pl-4 text-base italic leading-relaxed text-slate-200 sm:text-lg">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="rounded-2xl border border-cyan-400/25 bg-cyan-500/10 p-5 sm:p-6">
                  <p className="text-sm font-medium text-cyan-200 sm:text-base">
                    {story.ctaPrompt}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Pager */}
        <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-slate-900/95 px-5 py-4 backdrop-blur sm:relative sm:px-7">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={isFirst}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-4 text-sm font-medium text-slate-200 transition hover:border-cyan-400/55 hover:bg-cyan-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/15 disabled:hover:bg-slate-950/60 disabled:hover:text-slate-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <p className="hidden text-xs font-medium uppercase tracking-[0.14em] text-slate-500 sm:block">
              {page + 1} / {STORY_PAGE_COUNT}
            </p>

            {isLast ? (
              <a
                href={story.ctaHref}
                onClick={onClose}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                {story.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-cyan-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
