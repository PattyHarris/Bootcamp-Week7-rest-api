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

4. Postman: To test the 'post' that should fail at this point, set the method to 'post' and use 'raw' as the body content type and select JSON.  Don't forget that the endpoint is http://localhost:3000/api/trips

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

8. Handle requests that have an ID attached, e.g. GET http://localhost:3000/api/trips/1
"We’re going to access this API using the URL http://localhost:3000/api/trips/1 where 1 is the id of the trip, because we called the file [id].js."  In this file, we'll also handle PUT and DELETE.

8. Back to index.js: POST http://localhost:3000/api/trips with the body as (using Postman):
```
{
    "user": 1,
    "name": 'Third Trip'
}
```
And the reason this is done in index.js and not [id].js is that we don't know that ID of request until it's created (duh!).

9. Implement POST /expenses and GET /expenses/:id.  Updated the schema with the Expense model (you will need to restart the app afterwards).  The schema is migrated to the database:
```
> npx --use-npm prisma migrate dev
```

10. In index.js (in the expense folder), handle POST as we did with trips.

11. Test in Postman:  POST http://localhost:3000/api/expense
```
{
    "trip": 1,
    "name": "Gasoline",
    "amount": 50,
    "currency": "USD"
}
```
Then to access the new record: http://localhost:3000/api/expenses/1 where '1' is the ID of the expense.

12. Add the list of expenses of a trip to GET /trips/:id - for each trip, find the expenses and add that to the response.  As noted in the tutorial, this does mean that we can't just return all trips without their expenses - that would need to be another endpoint.

13. Implement PUT /trips/:id and PUT /expenses/:id to allow editing - notice that these changes were made in the [id].js files.
