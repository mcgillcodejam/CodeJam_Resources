# 3. Build fast

Hacking runs from Friday 19:00 to Sunday 12:00. Plan for a demo by Saturday night, and use Sunday morning to polish.

## Follow a team: Friday night to Saturday night

At 21:00 on Friday the team does the thing that feels like cheating: they build the whole app with fake data. One
hard-coded bus, leaving at 00:45. A page where you type your phone number. A button that shows "Leave now" on the
screen instead of sending a text. It is ugly and it took two hours, but the full path works from start to finish, and
from that moment they always have something to demo.

On Saturday morning they split up. Before anyone writes a line, they agree on one example of the data passed between
the parts and paste it in the README:

```json
{ "stop": "Sherbrooke / University", "lastDeparture": "00:45", "walkMinutes": 9 }
```

Wen replaces the fake bus with real STM data. Tariq wires up the text message. Chloé makes the one screen clear
enough to read while walking. Maya writes the README and starts the pitch. Because the example was agreed first,
nobody waits on anybody.

At 16:00 Tariq's text messages stop sending and he spends an hour alone on it. Then he asks a mentor, who spots a
missing environment variable in two minutes. The rule the team takes from that: stuck for twenty minutes, ask.

At 20:00 they freeze features. Chloé has a great idea for a second screen, and they write it on the "next" list
instead of building it. Everything after this is fixing, polishing and rehearsing. That decision is why their demo
works on Sunday.

Want ready-made parts so you can skip the plumbing? See [Go faster](../extras/go-faster.md).

## A plan that works

| When | Goal |
| --- | --- |
| Fri 19:00 to 21:00 | Idea locked (see [Pick a problem](02-pick-a-problem.md)), repo created from the template, everyone can run it |
| Fri night | The one core flow works end to end, even if it's ugly and the data is fake |
| Sat morning | Real data or API in; split the work so nobody waits on anybody |
| Sat 12:00 | Teams freeze: no more team changes after this |
| Sat evening | **Feature freeze.** Everything after this is fixing, polish, README and pitch |
| Sun 10:00 | Record a backup demo video; rehearse the pitch twice |
| **Sun 12:00** | **Code deadline.** Only README, `docs/` and slides may change after it |

Sleep a few hours on Saturday. Tired teams ship bugs at 11:58.

## Split the work

Give each person a part they own (frontend, backend or data, AI or API, pitch and design). Agree on the shape of the
data passed between parts first (write one example JSON in the README), then build in parallel against that.

## Git without tears

- One repo, from the [CodeJam 16 template](https://github.com/mcgillcodejam/codejam16-template). Everyone is a
  collaborator.
- Pull before you start, commit small, push often. Short messages that say what changed: `add login form`.
- Two people editing the same file at once causes most conflicts: talk before you touch shared files.
- If a merge goes wrong, ask a mentor before you force anything.
- **Never commit keys.** Keep them in `.env` (already ignored) and list the names in `.env.example`.

## AI assistants

Copilot, Claude Code, Cursor and similar tools are allowed and useful. Three rules keep them from hurting you:

1. **Understand what you demo.** Judges ask how it works. "The AI wrote it" is not an answer.
2. **Run it before you commit it.** Generated code often looks right and isn't. Test the flow you'll demo.
3. **Say which tools you used** in your README under "How we built it".

## When you're stuck

Stuck for 20 minutes? Ask a mentor (Discord or in person). Stuck for an hour on the same bug? Cut the feature or fake
it for the demo, and say so honestly.
