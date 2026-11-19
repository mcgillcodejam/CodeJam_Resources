# Go faster

A hackathon is won on the part of the project that is yours. Everything else (buttons, login, fake data, a public
link) has been built by someone already, and using their version is not cheating, it's the job. This page is a shelf
of ready-made parts. Take what you need and get back to your idea.

A rule of thumb before you take anything: if you can't get a tool running in 20 minutes, drop it and use the one you
already know. A new tool is only faster if it works.

## Make it look finished

Judges see your screen before they hear how it works. An hour here is worth more than an hour on a hidden feature.

- [Tailwind CSS](https://tailwindcss.com/docs/installation): style in your HTML with ready-made classes, so nobody
  on the team has to own a stylesheet.
- [daisyUI](https://daisyui.com/): buttons, cards, modals and themes on top of Tailwind; the fastest route to a
  screen that looks designed.
- [shadcn/ui](https://ui.shadcn.com/): copy-paste React components (forms, tables, dialogs) you can edit, for teams
  already on React.
- [Lucide](https://lucide.dev/): one consistent icon set, free, so your icons match.
- [unDraw](https://undraw.co/illustrations): free illustrations for empty screens and your slides.
- [Google Fonts](https://fonts.google.com/): pick one font and use it everywhere.
- [Coolors](https://coolors.co/): a colour palette in one keypress; pick one and stop arguing about colours.
- [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/): check that your text can be read on a
  projector before the demo, not during it.

## Fake it until the real thing works

Build the whole path with fake data first (see [Build fast](../guides/03-build-fast.md)), then swap in the real
source.

- [Faker](https://fakerjs.dev/): realistic names, addresses and dates in code, so your demo doesn't say "test test".
- [Mockaroo](https://www.mockaroo.com/): a CSV or JSON file of fake rows in the shape you choose, from the browser.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/): a free fake API to build your frontend against while the
  backend isn't ready.

## Show it to someone outside your laptop

- [Cloudflare quick tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/):
  a public link to the app running on your laptop, with one command and no account. Good for letting a judge open it
  on their own phone.
- [ngrok](https://ngrok.com/docs/getting-started/): the same idea, with a free account; useful when an outside
  service has to call your laptop back.
- [GitHub Codespaces](https://docs.github.com/en/codespaces/overview): a full editor and machine in the browser, for
  the teammate whose laptop won't install anything. Check your free hours first.

## Work as a team without stepping on each other

- [GitHub CLI](https://cli.github.com/): create the repo, open pull requests and check them out from the terminal.
- [Oh Shit, Git!?!](https://ohshitgit.com/): plain-language fixes for the Git mistakes everyone makes at 3 a.m.
- [Excalidraw](https://excalidraw.com/) or [tldraw](https://tldraw.com/): a shared whiteboard to draw the screens
  and the data flow before splitting up; no account needed.

## Common parts

- [Chart.js](https://www.chartjs.org/docs/latest/): a chart on a web page in a few lines.
- [Socket.IO](https://socket.io/docs/v4/): live updates between browsers (chat, shared boards, multiplayer).
- [OpenRouter](https://openrouter.ai/docs/quickstart): one key and one API for many language models, so you can swap
  models without rewriting. Set a spending limit.
- [Ollama](https://ollama.com/): run an open model on your own laptop, with no key and no bill; slower, but it works
  when the wifi doesn't.

## Get unstuck faster

- [DevDocs](https://devdocs.io/): the documentation for most languages and frameworks in one searchable page, and it
  works offline once loaded.
- [regex101](https://regex101.com/): test a regular expression against your real text and see why it doesn't match.
- [A debugging manifesto](https://jvns.ca/blog/2022/12/08/a-debugging-manifesto/) by Julia Evans: eight short rules
  for when a bug has you going in circles.
- [Rubber duck debugging](https://rubberduckdebugging.com/): explain the bug out loud, line by line, to anything.
  It sounds silly and it works.
- [How to ask a good question](https://stackoverflow.com/help/how-to-ask): the same shape works on a mentor. Say what
  you expected, what happened, and what you tried.

## Working with an AI assistant, quickly and honestly

AI coding tools are allowed at CodeJam; the rules are in [Build fast](../guides/03-build-fast.md). These help you
get more out of them:

- [Prompt engineering overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview)
  (Anthropic) and [Prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering) (OpenAI):
  how to ask so the first answer is usable.
- Give the assistant the example data your team agreed on and the one flow you're building. A narrow request gets
  working code, and "build me an app" gets a mess.
- Ask it to explain what it wrote before you commit it. You'll be asked the same thing by a judge.

## Record and present

- [OBS Studio](https://obsproject.com/): free screen recording for your backup demo video.
- [Loom](https://www.loom.com/): record your screen and get a share link straight away; check the free plan's limits.
- [Make a README](https://www.makeareadme.com/): what a good README contains, with a template.
