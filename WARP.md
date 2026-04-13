# Envision Digital Solution - Project Rules

## Commit Attribution
- Do not include `Co-Authored-By: Oz <oz-agent@warp.dev>` in commit messages.
- Commit messages should be attributed only to the user.

## Mobile First
Every component and page must work well on mobile (375px+). Consider:
- Stack horizontal layouts vertically on small screens (`flex-wrap` or `sm:` breakpoint grids).
- Complex inline forms should collapse into a dialog or bottom sheet on mobile (`md:hidden` / `hidden md:block` pattern).
- Touch targets must be at least 44px.
- Popovers and calendars must not overflow the viewport.
- Test at mobile width before considering a feature complete.
