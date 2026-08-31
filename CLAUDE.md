# Envision Digital Solution — project rules

> The **Envision Digital Solutions company website** (envisionds.com.au) — a
> Next.js marketing site: services, about, resources, location strategy, contact.
> Static-first and mobile-first, deployed on Vercel. Stacks on the global
> `~/.claude/CLAUDE.md` and rules; this file wins on any project-specific conflict.

## Linear — task & status home

No Linear project mapped yet. When ongoing work starts here, create one under
team `Monolith` (`MNO`) per the global Linear rule and record it in this line.

## Tech

- **Next.js 16** (App Router, TypeScript) · **React 19** · **Tailwind CSS 4**.
- Package manager: **npm** (`npm run dev` / `npm run build` / `npm run lint`).
- **Resend** sends the contact-form email (server actions in `app/actions/`);
  the API key lives in `.env` — never committed.
- Hosted on **Vercel**, with `@vercel/analytics` + `@vercel/speed-insights`.

## Commit attribution

- Do not include `Co-Authored-By: Oz <oz-agent@warp.dev>` in commit messages.
- Commit messages are attributed only to the user.

## Mobile first

Every component and page must work well on mobile (375px+):

- Stack horizontal layouts vertically on small screens (`flex-wrap` or `sm:`
  breakpoint grids).
- Complex inline forms collapse into a dialog or bottom sheet on mobile
  (`md:hidden` / `hidden md:block` pattern).
- Touch targets at least 44px.
- Popovers and calendars must not overflow the viewport.
- Test at mobile width before considering a feature complete.

> `WARP.md` carries these same commit + mobile rules for Warp's agent — keep the
> two files in step when either changes.
