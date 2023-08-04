# Sangawa Project

We'll expand more on this README as the project develops.

Some quick call-outs:

Styling is something I'm picky about, so I'll lay out some ground rules.
1. Avoid global CSS
2. Do not style at the page level, only at the component level. If you have layout concerns, we should solve them with another component. (You'll thank me when we transition to a CMS with a page builder!)
3. I published our CSS dependency, [`react-shadow-scope`](https://www.npmjs.com/package/react-shadow-scope), so please give me earnest feedback. What sucks, what's great, etc. The justification for it is basically that it's the only solution I know that supports two-way encapsulation. In other words, no CSS can leak in, and no CSS can leak out. Every problem you'll need to solve involves only one tiny scope at a time.
4. I also authored our [naming convention](https://levelup.gitconnected.com/air-naming-css-color-variables-437cb4d261a6) for color variables. Same thing goes here, feedback is awesome!

We are using those fancy new [server components](https://nextjs.org/docs/getting-started/react-essentials#server-components) everyone is talking about, but this will be a statically generated (serverless, if you will) website. In other words, all the server logic we write will only run at build-time, hence it will need redeployed anytime the server logic is updated. This will be particularly relevant once we introduce a CMS.

I wrote an "api client" that is basically just a stand-in for what will eventually be HTTP requests. For now, I just hardcoded the data we'll expect to get back. Pretending it's a real API will make it easy to transition when the time comes.

With Netlify's edge functions, we'll have limited access to runtime server-side code, but I think we can mostly get away with just fetching page information from a third party. Just something to keep in mind.

Alright, that's my speech, feel free to update this README at any time. Change, add, or remove whatever makes this project easier to understand!
