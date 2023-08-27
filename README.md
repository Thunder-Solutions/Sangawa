# Sangawa Project

This is the home page for PittJCS's Sangawa Project.

---

## Development
In a terminal, navigate to your preferred directory, then run the following commands to clone the repo and bootstrap your development environment.
```
git clone https://github.com/Thunder-Solutions/Sangawa.git
cd sangawa
npm install
```

To run a local development server, run `npm run dev`. If you want to test a full production build locally, run:
```
npm run build
npm start
```
In either case, the server will be running at: `http://localhost:3000`

---

## CLI
For convenience, a local CLI was written within this codebase for adding new components with all the repetitive boilerplate done automatically. We can build upon this CLI later if necessary. Make sure you ran `npm install` recently, then you can simply run the following in your console:
```
npx cli --create-component myComponent
```
Or the shorthand syntax:
```
npx cli -c myComponent
```
> If you encounter "permission denied" error, try removing node modules and freshly installing.
> ```
> rm -rf node_modules
> npm i
> ```

---

## Architecture

This project is built with [React](https://react.dev) + [NextJS](https://nextjs.org). The documentation for each is recommended for any basic questions.

### Overview

This project uses [server components](https://nextjs.org/docs/getting-started/react-essentials#server-components), but it's built and deployed as a [statically-generated website](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation). In other words, any server logic (including server components) will only run at build-time, hence it will need *redeployed* anytime server logic is updated. This will be particularly relevant once we introduce a CMS.

> **Note**: You will need 'use-client' at the top of each page for now. As of now, only the layout is taking advantage of server-side data fetching. To pass it through to client components, we're dropping the result in a JSON script tag, then grabbing the data synchronously from there.

### Styles

The styling package for this project is [`react-shadow-scope`](https://www.npmjs.com/package/react-shadow-scope), which utilizes shadow DOM encapsulation to safely contain styles in small scopes. Please refer to the documentation for more information.

> **Note**: [`react-shadow-scope`](https://www.npmjs.com/package/react-shadow-scope) is a home-grown package. If you encounter problems, please [open an issue and/or make a PR](https://github.com/jonathandewitt-dev/react-shadow-scope). At the moment, it triggers hydration errors because of a [known issue with react](https://github.com/jonathandewitt-dev/react-shadow-scope/issues/2#issuecomment-1585080317), but they can be safely ignored.

### API Client

The current client is just a stand-in for what will eventually be HTTP requests. For now, the responses are mocked. We should add ALL text content to these mocks, and avoid hardcoding any text content in the components. Pretending it's a real API will make it easy to transition to a CMS when the time comes, where each PittJCS department will be in control of their own text.

> With Netlify's edge functions, we'll have limited access to server-side code at runtime, but we can mostly get away with just fetching page information from a third party.

---

## Contributing

   - **Styles**
      1. Avoid global CSS! We should do our best to keep from polluting the global namespace.
      2. Do not style at the *page* level, only at the *component* level.
         - If you have layout concerns, it should be possible to solve them with another component. *(You'll thank me when we transition to a CMS with a page builder!)*
      3. Please follow the [AIR naming convention](https://levelup.gitconnected.com/air-naming-css-color-variables-437cb4d261a6) for color variables.
   - **Components**
      1. Keep components small! Atomic, even.
      2. Don't expose presentation from props, like `size` or `color`. Instead, expose *use case*. For example:
         :x:
         ```tsx
         <Button size="large" color="red">
         ```
         :heavy_check_mark:
         ```tsx
         <Button importance="urgent">
         ```
      3. Libraries are fine, but try not to use any components *directly*. In the interest of [dependency inversion](https://deviq.com/principles/dependency-inversion-principle), we should keep our low-level dependencies abstracted by an interface we control. This is great if and when we want to swap the underlying library later on, to avoid 100 project-wide changes.
          - An example of this is the `<Icon>` component. All icons should be added to that component instead of being used directly. For the moment, the `react-icons` library is being used.

### README
Please update this README file if the existing documentation becomes invalid, or a significant addition would need documented. If anything is unclear, feel free to make suggested edits!
