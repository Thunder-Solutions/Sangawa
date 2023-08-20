# Sangawa Project

This is the 

## Styles
 1. Avoid global CSS
 2. Do not style at the page level, only at the component level. If you have layout concerns, we should solve them with another component. *(You'll thank me when we transition to a CMS with a page builder!)*
 3. [`react-shadow-scope`](https://www.npmjs.com/package/react-shadow-scope) is a home-grown package. If you encounter problems, please [open an issue and/or make a PR](https://github.com/jonathandewitt-dev/react-shadow-scope).
    > At the moment, it triggers hydration errors because of a [known issue with react](https://github.com/jonathandewitt-dev/react-shadow-scope/issues/2#issuecomment-1585080317), but they can be safely ignored for now.
 4. Please follow the [AIR naming convention](https://levelup.gitconnected.com/air-naming-css-color-variables-437cb4d261a6) for color variables.

## App Directory

This project uses [server components](https://nextjs.org/docs/getting-started/react-essentials#server-components), but it's built and deployed as a [statically-generated website](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation). In other words, any server logic (including server components) will only run at build-time, hence it will need *redeployed* anytime server logic is updated. This will be particularly relevant once we introduce a CMS.

> **NOTE**: you will need 'use-client' at the top of each page. Right now, only the layout is taking advantage of server-side data fetching. To pass it through to client components, we're dropping the result in a JSON script tag, then grabbing the data synchronously from there.

## API Client

The current client is just a stand-in for what will eventually be HTTP requests. For now, the responses are mocked. We should add ALL text content to these mocks, and avoid hardcoding any text content in the components. Pretending it's a real API will make it easy to transition to a CMS when the time comes, where each PittJCS department will be in control of their own text.

> With Netlify's edge functions, we'll have limited access to server-side code at runtime, but we can mostly get away with just fetching page information from a third party.

## CLI
For convenience, there's a CLI for adding new components with all the repetitive boilerplate done automatically. We can build upon this CLI later if necessary. Make sure you ran `npm install` recently, then you can simply run the following in your console:
```
npx cli --create-component MyComponent
```
Or the shorthand syntax:
```
npx cli -c MyComponent
```

## Updates
Feel free to update this README at any time. Change, add, or remove whatever makes this project easier to understand.
