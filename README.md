# Trip-Analyzer

An app built with Reactjs for an xyz commercial transport company with an analytics dashboard to quickly visualize trips data, a drivers' master-detail page to get all info about a particular driver and a trip page showing the detail for a single trip.

Run the server with

```bash
yarn
yarn start
```

Or if you use npm

```bash
npm install
npm start
```

Then run the client

```bash
cd client
yarn
yarn start
```

Or if you use npm

```bash
cd client
npm install
npm start
```

The server part of this system is already designed and exposes a set of REST endpoints via the `/api` route and a GraphQL endpoint.

The client has been setup to consume graphql if you chose to use that instead.

## views
- A dashboard with stats and the trips listed in a table.
- A drivers' master-detail page
- A trip page showing the detail for a single trip
