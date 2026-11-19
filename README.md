# CodeJam Resources

Everything you need to go from "we have a team" to a demo the judges remember, in a few short pages.
Made by the CodeJam committee at McGill. Read the guide for the step you're on; skip the rest.

**CodeJam 16** · November 20 to 22, 2026 · Lorne M. Trottier Building, McGill University. The live schedule, your
team, check-in and your judging slot are on the [CodeJam dashboard](https://codejam.mcgilleus.ca/dashboard).

## The weekend in six steps

| Step | When | Read |
| --- | --- | --- |
| 1. Get ready | Before Friday | [Before the event](guides/01-before-the-event.md) |
| 2. Pick a problem | Friday evening, first hour | [Pick a problem](guides/02-pick-a-problem.md) |
| 3. Build | Friday 19:00 to Sunday 12:00 | [Build fast](guides/03-build-fast.md) |
| 4. Submit | By Sunday 12:00, code freeze | [Ship and submit](guides/04-ship-and-submit.md) |
| 5. Demo | Sunday 13:00 to 15:30 | [Demo and judging](guides/05-demo-and-judging.md) |
| 6. After | Sunday night onward | [After CodeJam](guides/07-after-codejam.md) |

Look after yourself all weekend: [Stay well](guides/06-stay-well.md).

### How to read these guides

Each guide opens with a short story, then gives you the checklist. The story follows one made-up team through the
whole weekend: Maya, Tariq, Chloé and Wen, four students at their first hackathon, building **LastBus**, an app that
texts you when it's time to leave so you don't miss the last bus home. They aren't real and neither is their project,
but every mistake they make is one a real team has made. If you're short on time, skip the story and use the tables.

The weekend in one paragraph: on Friday you check in, hear the challenges at the opening, and by the end of the
evening your team has one sentence that says what you're building. On Saturday you make one thing work from start to
finish, then stop adding and start polishing. On Sunday morning you check in for judging, push your code by noon, and
in the afternoon you get seven minutes with a panel of judges. Everything else in this repo is there to make one of
those moments easier.

### Go further

Three extra pages for when you want more than the steps:

- [Go faster](extras/go-faster.md): ready-made parts, so you spend the weekend on your idea and not on a login form.
- [Find an idea](extras/find-ideas.md): prompts, local data and places to look when the team is staring at a blank
  page.
- [Stay curious](extras/stay-curious.md): short reads and videos that explain how the things you're using work.

Copy-paste templates: [7-minute pitch](templates/pitch-7-minutes.md) · [Team plan](templates/team-plan.md).
Your project repo starts from the [CodeJam 16 project template](https://github.com/mcgillcodejam/codejam16-template).

## First hackathon? Start here

- [Learn Git Branching](https://learngitbranching.js.org/): Git by playing, in your browser. Do the first two levels.
- [GitHub Skills](https://skills.github.com/): short hands-on courses (first repo, pull requests, Pages).
- [MDN: Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development): HTML, CSS and
  JavaScript from zero.
- [roadmap.sh](https://roadmap.sh/): what to learn next for frontend, backend, AI and more.
- [What is an API?](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82): plain-English
  introduction.
- [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/): Python from zero, free online.
- [Hugging Face Learn](https://huggingface.co/learn): free courses on language models, agents and machine learning.

## Tools

- [Visual Studio Code](https://code.visualstudio.com/) and [GitHub Desktop](https://desktop.github.com/) if the
  command line is new to you.
- [GitHub Student Developer Pack](https://education.github.com/pack): free credits and tools, including GitHub
  Copilot. Sign up before the weekend; approval can take days.
- [Figma](https://www.figma.com/education/) (free for students) or [Excalidraw](https://excalidraw.com/) to sketch
  screens before you code them.
- [Bruno](https://www.usebruno.com/) or [Postman](https://www.postman.com/) to try an API before writing code for it.
- AI coding assistants (GitHub Copilot, Claude Code, Cursor and others) are fine to use. Be able to explain every
  line you demo, and say in your README which tools you used. See [Build fast](guides/03-build-fast.md).

## Starters

Start from a generator, not a giant boilerplate. Each one gives you a running app in a minute.

| You want | Start with |
| --- | --- |
| A web app (React) | [Vite](https://vite.dev/guide/): `npm create vite@latest` |
| A web app with a server and pages | [Next.js](https://nextjs.org/docs/app/getting-started/installation): `npx create-next-app@latest` |
| A Python API | [FastAPI](https://fastapi.tiangolo.com/tutorial/first-steps/) or [Flask](https://flask.palletsprojects.com/en/stable/quickstart/) |
| A data or AI demo with a UI, all in Python | [Streamlit](https://docs.streamlit.io/get-started) or [Gradio](https://www.gradio.app/guides/quickstart) |
| A mobile app | [Expo](https://docs.expo.dev/get-started/create-a-project/) (React Native) |
| A game | [Godot](https://godotengine.org/) or [Pygame](https://www.pygame.org/docs/) |
| A database and login without writing a backend | [Supabase](https://supabase.com/docs) or [Firebase](https://firebase.google.com/docs) |

## APIs

- **Language models:** [Anthropic (Claude)](https://docs.claude.com/), [OpenAI](https://platform.openai.com/docs),
  [Google Gemini](https://ai.google.dev/), or open models through
  [Hugging Face](https://huggingface.co/docs/inference-providers). Most give free credits to start; set a spending
  limit before you share a key with your team.
- **Maps:** [Leaflet](https://leafletjs.com/) with [OpenStreetMap](https://www.openstreetmap.org/) (free),
  [Mapbox](https://docs.mapbox.com/).
- **Speech and vision:** [Whisper](https://github.com/openai/whisper) (open speech-to-text model),
  [Google Cloud Vision](https://cloud.google.com/vision), models on [Hugging Face](https://huggingface.co/models).
- **Everything else:** [public-apis](https://github.com/public-apis/public-apis), a long list of free APIs by topic.

## Data

- [Montréal open data](https://donnees.montreal.ca/), [Données Québec](https://www.donneesquebec.ca/) and
  [Open Government Canada](https://open.canada.ca/en/open-data): local data judges will recognise.
- [STM developers](https://www.stm.info/en/about/developers): Montréal transit schedules and real-time data.
- [Kaggle Datasets](https://www.kaggle.com/datasets) and [Hugging Face Datasets](https://huggingface.co/datasets).
- [Google Dataset Search](https://datasetsearch.research.google.com/) when you can't find it anywhere else.

## Hosting

You can demo from your laptop. A live link is a bonus, not a requirement.

| What you built | Free option |
| --- | --- |
| Static site (HTML, CSS, JS, a Vite build) | [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), [Cloudflare Pages](https://pages.cloudflare.com/) |
| Server or API (Node, Python) | [Render](https://render.com/), [Railway](https://railway.com/), [Fly.io](https://fly.io/) |
| AI or data demo | [Hugging Face Spaces](https://huggingface.co/spaces), [Streamlit Community Cloud](https://streamlit.io/cloud) |

## Workshops

Slides and code from past CodeJam workshops are in [`Workshops/`](Workshops/): Intro to Web Dev, Intro to
Frontend, Intro to Backend.

## Contributing

Found a dead link or know something better? Open a pull request or tell an organizer. Keep it short: one line per
link, and say why it helps at a hackathon.

The six-step structure is inspired by the MIT-licensed
[Hackathon Starter Pack](https://github.com/udaysharmadev/Hackathon-Starter-Pack-Complete-Guide-Roadmap) by Uday
Sharma.
