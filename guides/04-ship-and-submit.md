# 4. Ship and submit

**Your GitHub repository is your submission.** There's no Devpost this year.

## Follow a team: Sunday morning

Maya opens the repo at 09:00 as if she were a judge who has never heard of LastBus. The README still says "TODO".
She gives it forty minutes: one line on what it does, a screenshot, how to run it, who did what, the challenge
they're entering, and the AI tools they used. A judge who reads this before the demo walks into the room already
knowing what to look for.

Meanwhile Wen records a two-minute backup video of the demo working, and one teammate checks the team in for judging
on the Team page of the dashboard (the dashboard shows when check-in opens and closes; the judging schedule is built
from the teams that checked in).

At 11:20 Tariq notices his API key is in a file he was about to push. He moves it to `.env`, checks it isn't in any
earlier commit, and pushes. Their last push is at 11:41. Nothing they did that morning was new code, and that was the
plan.

The mistake real teams make here is treating noon as the time to start submitting. Noon is when it's over. Aim to be
done at 11:30 and spend the last half hour checking the link opens in a private window.

## Checklist (by Sunday 12:00)

- [ ] Repo made from the [CodeJam 16 template](https://github.com/mcgillcodejam/codejam16-template), **public**,
      teammates added as collaborators.
- [ ] Topic **`codejam16`** added (gear next to "About" on the repo page). That puts you in the gallery at
      [github.com/topics/codejam16](https://github.com/topics/codejam16).
- [ ] **README filled in**: one line on what it does, a screenshot, a demo video link, how to run it, the team, the
      challenge(s) you're entering, and the AI tools you used.
- [ ] **Repo link pasted in the CodeJam dashboard** (your Team page, "Submit your project"). One link per team; link
      other repos from the README.
- [ ] **Team checked in for judging** on the Team page on Sunday morning. One teammate does it for the whole team.
- [ ] Code pushed before 12:00. Organizers record each repo's latest commit at the deadline.

The template's `SUBMITTING.md` has the details: file size limits, keys, and an optional one-page site on GitHub
Pages.

## Put it online (optional)

A live link lets judges and sponsors try your project after the demo. You can still demo from your laptop.

| What you built | Easiest free host |
| --- | --- |
| Static site, or a React/Vite build | GitHub Pages (the template has a `docs/` page), Netlify, Vercel |
| A server or API | Render, Railway, Fly.io |
| A Python AI or data demo | Hugging Face Spaces, Streamlit Community Cloud |

Deploy something on **Saturday**, not Sunday morning: the first deploy always takes longer than you think.

Common surprises:
- A React or Vite app on GitHub Pages loads blank unless the base path is set to `/REPO/`.
- Any key in front-end code is public. Keep paid keys on a server.
- Free servers sleep. Open your link five minutes before your slot so it's awake.
