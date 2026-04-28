"use client";

import { useCallback, useState, type ComponentType } from "react";
import { ArrowRight, BookOpen, Coffee, Rocket, Stethoscope } from "lucide-react";

import ExampleStoryModal, {
  type Story,
} from "@/components/example-story-modal";

type IconType = ComponentType<{ className?: string }>;

type Example = {
  icon: IconType;
  tag: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  story: Story;
};

const ctaHref = "/contact";

const examples: Example[] = [
  {
    icon: Coffee,
    tag: "Location Strategy + Digital Marketing",
    title: "Local Cafe Expansion",
    challenge:
      "A cafe owner wants to open a second location but is unsure which suburb has the strongest opportunity.",
    approach:
      "We compare local demographics, nearby competitors, foot traffic patterns, accessibility, and marketing potential across the suburbs they are considering. Once we identify the strongest opportunity, we build a local launch strategy that includes Google Ads, local SEO, and suburb-targeted social media to drive awareness from day one.",
    outcome:
      "The owner makes a location decision backed by data, not gut feeling, and enters the market with a marketing plan already in place.",
    story: {
      id: "maya",
      title: "Maya almost signed the wrong lease",
      readingTime: "2 min read",
      pages: [
        {
          body: "Maya runs Stovetop & Co., a small specialty espresso bar tucked into a corner shop in Coorparoo, Brisbane. She has been at it for just over two years. Saturdays pull a queue out the door, the regulars know her dog by name, and the books have finally stopped feeling fragile. She is ready for a second site.",
        },
        {
          body: "For months, the same advice kept coming at her from every direction. Open in West End. That is where the energy is. Her brother-in-law said it. Two of her suppliers said it. Even a customer who had only been in twice said it. By the time she had walked the strip three weekends in a row, she had more or less talked herself into a lease.",
        },
        {
          body: "The trouble is, West End already had three specialty cafes within 200 metres of the site she liked, and rent was nearly double what she paid in Coorparoo. Her partner Ben was not sleeping. Their joint savings would have gone in as fit-out within the first ten weeks, and she had no real read on whether the suburb wanted another cafe or whether it was already saturated.",
        },
        {
          body: "A friend mentioned location strategy. She rang us half-expecting another agency pitch. We compared three suburbs she was actually considering: West End, Annerley, and Camp Hill. We pulled morning commuter density, median household age, walkability, competitor saturation, and local search demand for cafes by postcode.",
        },
        {
          body: "Camp Hill came out clear. Less crowded, a similar income profile to her current customers, a growing pram-and-pup demographic, and a primary school dropping more than two hundred parents past the strip every weekday morning. From there we mapped a launch plan: Google Business set up properly from day one, suburb-targeted ads in the four weeks before opening, a local press hook, and a soft-launch evening for the neighbouring businesses.",
        },
        {
          body: "Site two opened in March. She hit her weekday breakfast covers in week three, faster than her first cafe took to find its feet. The lease she had nearly signed in West End went to another operator, who closed nine months later. Maya is already thinking about a third site. The difference is, this time she is not going to ask her brother-in-law.",
        },
      ],
      quote:
        "I came in thinking I had already made the decision. I left with a different one, and I am really glad.",
      ctaPrompt:
        "Sound familiar? If you are staring at a lease and trying to read tea leaves, we can help you make the call with actual data.",
      ctaLabel: "Book a strategy call",
      ctaHref,
    },
  },
  {
    icon: Stethoscope,
    tag: "SEO + Paid Ads + Website",
    title: "Allied Health Clinic Growth",
    challenge:
      "A clinic wants more enquiries from nearby suburbs but is not showing up in local search results, and their website is not converting visitors.",
    approach:
      "We review local search behaviour, competitor visibility, website structure, and suburb-based targeting. We rebuild key service pages around local intent, set up a Google Ads campaign targeting nearby postcodes, and improve the website to convert visitors into bookings more reliably.",
    outcome:
      "More qualified enquiries from nearby suburbs, improved search visibility, and a website that does a better job of turning interest into action.",
    story: {
      id: "aaron",
      title: "Aaron paid for nine months of SEO and got nothing",
      readingTime: "2 min read",
      pages: [
        {
          body: "Aaron is a partner at a four-clinician allied health practice in inner Melbourne. Physio-led, with podiatry, exercise physiology, and dietetics under the same roof. Six years in business, well-respected by the local GPs, and a clinical waitlist that, on paper, looked healthy.",
        },
        {
          body: "The problem was that on paper and in the diary were telling different stories. Reception kept saying they were busy, but Tuesdays and Thursdays were soft, the rebook rate was patchy, and almost no new patients were coming from outside their immediate suburb. Most of their growth had come from word of mouth and GP referrals, and that engine had quietly stalled.",
        },
        {
          body: "He had already tried to fix it. An agency had charged him eighteen hundred a month for nine months of SEO with almost nothing to show. He had asked for reports and got dashboards full of impressions and ranking improvements for keywords nobody actually searched for. He had seriously considered dropping marketing altogether and just running on referrals.",
        },
        {
          body: "The turning point was small. A patient mentioned, almost in passing, that they could not find the clinic on Google when they had searched for a physio nearby from two suburbs over. Aaron tested it himself in the car park that night. They were nowhere.",
        },
        {
          body: "We started with a proper audit. We rebuilt the four key service pages around how patients actually describe their problems, not how clinicians describe treatments. We set up Google Ads with tight geo-targeting across the surrounding eight postcodes, and split the ad groups by service so the budget was not getting eaten by broad searches that never converted. We cleaned up the Google Business profile, added a clear booking link above the fold on every page, and set up a simple post-visit email so first-time patients had a reason to rebook.",
        },
        {
          body: "Online enquiries went from a couple a week to between eight and twelve. Tuesdays and Thursdays filled out within two months. The rebook rate ticked up without anyone at reception having to push it. Aaron now actually looks forward to the Friday marketing review. He used to call it the meeting where he found out how much money he wasted that week.",
        },
      ],
      quote:
        "It is the first time I have felt like I understand what we are paying for.",
      ctaPrompt:
        "Sound familiar? If marketing has felt like a hole you keep pouring money into, we can show you exactly where the leaks are.",
      ctaLabel: "Book a strategy call",
      ctaHref,
    },
  },
  {
    icon: Rocket,
    tag: "Website + Strategy + Location",
    title: "New Business Launch",
    challenge:
      "A new business owner needs a website, a local marketing plan, and clarity on which area to target first before they start spending on ads.",
    approach:
      "We start with a location analysis to identify which suburb or area has the strongest demand and the least competitive pressure. From there, we build a clean, professional website and a 90-day marketing plan that prioritises the highest-leverage channels for their situation, so they are spending money where it is most likely to return results.",
    outcome:
      "A new business that launches with a clear strategy, a strong online presence, and a focused target market, instead of guessing and hoping something sticks.",
    story: {
      id: "priya",
      title: "Priya had fourteen spreadsheet tabs and was not sleeping",
      readingTime: "2 min read",
      pages: [
        {
          body: "Priya spent eight years in corporate marketing before deciding to back herself and open Field & Form, a small boutique pilates studio for the kind of busy professional women who do not want a gym floor and do not want to be one of forty in a class. She had savings, brand work already done, and a clear picture of her ideal client.",
        },
        {
          body: "What she did not have was a single member, a website, or a final answer on where to plant the studio. She was looking at three potential sites across two cities. Two in Sydney's Inner West, one in Newcastle. The Newcastle option was cheaper, and her family was leaning on her hard to take it. Her gut said Sydney.",
        },
        {
          body: "She had a spreadsheet with fourteen tabs and was rehearsing the worst-case scenario most nights at three in the morning. It always ended the same way: signing the wrong lease, burning through savings in nine months, and going back to corporate with her tail between her legs.",
        },
        {
          body: "A former colleague had used us for a relocation decision the year before. She forwarded our number with a one-line text: talk to these guys before you sign anything. Priya rang us the next day.",
        },
        {
          body: "We ran a location analysis across all three sites. Each one was scored on competitor density, local pilates and reformer search demand, walkability and parking, and the income and age profile within a three-kilometre radius. Marrickville came out strongest for her exact niche. From there, we built a clean, booking-led website. Not a brochure with a contact form. A site designed from the first wireframe to convert a cold visitor into a trial class. We laid out a ninety-day pre-launch plan that prioritised Instagram with tight local geo-targeting, founding-member pricing for the first thirty sign-ups, and quiet partnerships with two nearby physios who agreed to refer post-rehab clients.",
        },
        {
          body: "The studio opened with twenty-two founding members already on the books. She hit break-even in month four, which was a month earlier than her own conservative plan called for. The Newcastle site she had nearly taken became a dog grooming franchise.",
        },
      ],
      quote:
        "I stopped second-guessing every decision because I had a real reason behind each one.",
      ctaPrompt:
        "Sound familiar? If you are about to back yourself and the stakes feel huge, we can help you make the first decisions count.",
      ctaLabel: "Book a strategy call",
      ctaHref,
    },
  },
];

const cardClass =
  "rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-cyan-400/35 hover:bg-slate-900/75 sm:p-8";

export default function ExamplesList() {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Per-session resume position. Survives modal close/reopen but resets
  // on a hard navigation, exactly the behaviour we agreed on.
  const [resumePages, setResumePages] = useState<Record<string, number>>({});

  const activeExample = examples.find(
    (example) => example.story.id === activeId,
  );

  const closeModal = useCallback(() => {
    setActiveId(null);
  }, []);

  const onPageChange = useCallback(
    (page: number) => {
      if (!activeId) return;
      setResumePages((current) => {
        if (current[activeId] === page) return current;
        return { ...current, [activeId]: page };
      });
    },
    [activeId],
  );

  return (
    <>
      <section className="mt-12 space-y-6">
        {examples.map((example, index) => {
          const Icon = example.icon;
          const storyId = example.story.id;

          return (
            <article key={example.title} className={cardClass}>
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                <div className="lg:w-72 lg:shrink-0">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-cyan-300">
                    {example.tag}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    {example.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-slate-400">
                    Example {index + 1} of {examples.length}
                  </p>
                </div>
                <div className="flex flex-1 flex-col gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      The situation
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate-300">
                      {example.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      How we approach it
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate-300">
                      {example.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      The result
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate-300">
                      {example.outcome}
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveId(storyId)}
                      aria-haspopup="dialog"
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/70 hover:bg-cyan-500/20 hover:text-white"
                    >
                      <BookOpen className="h-4 w-4" />
                      Read the full story
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {activeExample ? (
        <ExampleStoryModal
          key={activeExample.story.id}
          story={activeExample.story}
          initialPage={resumePages[activeExample.story.id] ?? 0}
          onClose={closeModal}
          onPageChange={onPageChange}
        />
      ) : null}
    </>
  );
}
