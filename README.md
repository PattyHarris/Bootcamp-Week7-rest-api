# REST APIs

This week will develop the backend REST APIs that will be used for a travel expense application.  The first part of the week discusses the REST concepts.  This is followed by the design and implementation of the backend.

Note: installing next.js:
```
npx create-next-app@latest --use-npm  rest-api
```

1. Instead of using Tailwind, we re-used the Next.js styles for this part of the project.  There was a minor change to the CSS - in the 'card' class, max-width was changed from 300px to 'width: 100%' - this way the cards extend the entire width of the screen.  This is what is shown in the video...

2.  Replace the hard-coded endpoint descriptions with data from the 'endpoints' array.  This array will contain all the descriptive information for each endpoint.

3. Runing verbose:
```
> npm run dev --verbose
```

4. Postman: To test the 'post' that should fail at this point, set the method to 'post' and use 'raw' as the body content type.  Don't forget that the endpoint is http://localhost:3000/api/trips

5. Install Prisma:
```
> npm install -D prisma
> npx --use-npm prisma init
```

Setup the railway database (trips-expenses) and using that connect query, update the .env file database connection string.

6. After setting up the schema, migrate the database - if the app is running, restart if after this is done:
```
>npx --use-npm prisma migrate dev
```
7. Setup the prisma client in the lib/prisma.js file.
