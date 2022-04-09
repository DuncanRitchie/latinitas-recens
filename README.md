# Latinitas Recens
https://www.duncanritchie.co.uk/latinitas-recens/

## About
Latinitas Recens is a lexicon of Neo-Latin (New Latin) vocabulary compiled by a mysterius scholar named Florus, with translations in Italian and English. It has been preserved on the [Wayback Machine](http://web.archive.org/web/20080415072407/http://users.adelphia.net/~florusc/latine/search.html) and incorporated into [Numen](https://latinlexicon.org/latinitas_recens_latine.php) (which makes it a lot more useful), but I figured there would be no harm in my hosting it myself as well.

Aside from removing line-breaks and correcting some typos, I have kept the 2217 data records as they are in Florus’ version. For explanations of the abbreviations in the lexicon, see the Numen link.

I came across Latinitas Recens while compiling my own Latin lexicon, [velut](https://github.com/DuncanRitchie/velut). My dictionary covers all eras of Latin (except perhaps the earliest Latin), but is very incomplete. I’m continuing to add to it, but slowly and with a bias towards the classical period.

Latinitas Recens will remain a better resource than velut if you’re wanting a lot more New Latin words and phrases (obviously), as well as dictionary citations and Italian translations.

## Code
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The site is all server-side–rendered, [hosted on Netlify](https://www.duncanritchie.co.uk/latinitas-recens/). Ideally the site would have no client-side JavaScript whatsoever, but that’s not yet possible with Next.js.

It happens to be the first time I’ve ever used the `<dfn>` and `<mark>` HTML tags, as well as my first TypeScript project on GitHub.

To clone this repo and run a development server at [http://localhost:3000](http://localhost:3000), the commands are:
```bash
git clone https://github.com/DuncanRitchie/latinitas-recens
cd latinitas-recens
npm i
npm run dev
```
