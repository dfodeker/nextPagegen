# Welcome to Page gen
This readme serves as documentation for the  Custom Shopify app that creates a page in a Shopify store. 
It works by calling the Shopify `Creates a page` endpoint, the update page api.
The python version of this app can be found at https://github.com/dfodeker/PageGen

Further information can be found at [Create page Shopify api](https://shopify.dev/api/admin-rest/2022-07/resources/page).

There are two versions of this app 
* A version of the app built with `Python and Flask` 
* A version of the app built with `Next.js`

The next.js version does not have the functionality to check it a page exists and can only create pages
The Python & Flask version takes it further by adding extra functionality: checking if a page already exists and updating it with the appropriate content. 
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about this project, take a look at the following resources:

-https://github.com/dfodeker/PageGen



