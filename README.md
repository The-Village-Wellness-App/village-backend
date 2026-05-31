<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./images/banner-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="images/banner-light.png">
  <img alt="Welcome to the Village Wellness App" src="./images/banner-light.png">
</picture>

## Navigation

- [Overview of Project](#overview-of-project)
- [The Village Wellness App](#the-village-wellness-app)
- [Overview of Backend Application](#overview-of-backend-application)
- [Project Features](#project-features)
- [Tech Stack](#tech-stack)
- [Packages](#packages)
- [System Requirements](#system-requirements)
- [Project Structure](#project-structure)
- [Database Structure](#database-structure)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [API Request Handling](#api-request-handling)
- [Security](#security)
- [Error Handling](#error-handling)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [Scripts](#scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [JavaScript Style Guide](#javascript-style-guide)
- [License](#license)
- [References](#references)
- [Authors](#authors)

## Overview of Project

This backend application was created as part of an academic Web Development assessment using MongoDB, Express.js, React and Node.js (MERN Stack). The backend application forms the first assessable task, with the frontend application proposed to be finalised for assessment in June. Please see updates to the  [frontend application.](https://github.com/The-Village-Wellness-App/village-frontend)

Alternatively, visit the project [profile](https://github.com/The-Village-Wellness-App) for more information.

## The Village Wellness App

The Village Wellness App is a web-based health and wellbeing tracking application designed to help users monitor changes in their mood and physical pain over time. The application allows users to record structured entries using rating scales select predefined labels that describe their emotional or physical state, and optionally add contextual notes.
These entries are then visualised through time-based graphs, enabling users to identify patterns or trends in their wellbeing.

The application also allows users to add event markers to their timeline, such as starting a new medication, beginning therapy, or experiencing a significant life event. These markers provide additional context that may help users understand potential factors influencing their mood or pain levels. By combining structured tracking with visualisation tools, The Village Wellness App aims to support self-reflection and provide users with useful insights that may assist discussions with healthcare professionals.

## Overview of Backend Application

This repository implements the backend API for The Village Wellness App. It exposes RESTful CRUD endpoints for users, moods, pains and events using Express.js, persists data with MongoDB via Mongoose, and secures access with JWT-based authentication.

## Project Features

- Full CRUD operation

## Tech Stack

### Chosen Technologies

- MongoDB
- Express.js
- React
- Node.js

### Purpose of Each Technology

| Technology | Purpose |
| --- | --- |
| MongoDB | Stores the applications data |
| Express.js | Handles API routing and middleware |
| React | Builds and handles everything the users see and interact with |
| Node.js | Runs the backend server environment |

### Industry Relevance

The MERN stack is widely used in modern full-stack web development due to its scalability, security, performance and ability to use JavaScript across both frontend and backend development[*](#references).

The technologies used in the MERN stack are some of the most widely used technologies in present time.

See State of JavaScript graphs[*](#references):

- [React Usage](https://share.devographics.com/share/prerendered?localeId=en-US&surveyId=state_of_js&editionId=js2025&blockId=front_end_frameworks_ratios&params=&sectionId=libraries&subSectionId=front_end_frameworks)
- [Express Usage](https://share.devographics.com/share/prerendered?localeId=en-US&surveyId=state_of_js&editionId=js2025&blockId=back_end_frameworks_ratios&params=&sectionId=libraries&subSectionId=back_end_frameworks)
- [Testing with Jest](https://share.devographics.com/share/prerendered?localeId=en-US&surveyId=state_of_js&editionId=js2025&blockId=testing_ratios&params=&sectionId=libraries&subSectionId=testing)

See Stack Overflow graphs[*](#references):

- [MongoDB (No-SQL Databases)](https://survey.stackoverflow.co/2025/technology#most-popular-technologies-database-database)
- [Node, React, Express Usage](https://survey.stackoverflow.co/2025/technology#most-popular-technologies-webframe-webframe)
- [Javascript Usage](https://survey.stackoverflow.co/2025/technology#most-popular-technologies-language-language)

### Comparison to Alternative Technologies

| Chosen Technology | Alternative | Reason Chosen |
| --- | --- | --- |
| MongoDB | PostgreSQL | Flexible, dynamic, durable, high-performance |
| Express.js | Django | Minimalist, customisable, JavaScript-based |
| React | Angular | Component flexibility, rapid development |
| Node.js | ASP.NET | Universal JavaScript development environment |

### Licensing Information

| Technology | License |
| --- | --- |
| MongoDB | Server Side Public License (SSPL) |
| Express.js | MIT License |
| React | MIT License |
| Node.js | MIT License |

*Note: Though MongoDB uses an SSPL licence, it is still appropriate to licence this project under MIT, because the application:

1. Is a public educational project
2. Uses MongoDB as an external database, and connects through Mongoose
3. Does not redistribute, modify or host MongoDB software

## Packages

<!--  Placeholder information -->

```js
"cors": "^2.8.6",
"dotenv": "^17.4.2",
"express": "^5.2.1",
"helmet": "^8.1.0",
"jsonwebtoken": "^9.0.3",
"mongoose": "^9.3.0",
"smallog": "^1.0.2"

devDependencies

"eslint": "^9.39.4",
"globals": "^17.6.0",
"jest": "^30.3.0",
"supertest": "^7.2.2"
```

## System Requirements

- Node.js (LTS recommended, v16+)
- npm
- A MongoDB database (Atlas or self-hosted)
- Recommended: 512MB+ RAM for small deployments

## Project Structure

``` js
📁 village-backend
    📁 src
        📁 controllers
            ─ EventRouter.js
            ─ MoodRouter.js
            ─ PainRouter.js
            ─ UserRouter.js
        📁 middleware
            ─ UserAuthentication.js
            ─ UserAuthorisation.js
        📁 models
            ─ EventModel.js
            ─ MoodModel.js
            ─ PainModel.js
            ─ UserModel.js
        📁 utils
            📁 _dev
                ─ dbSeed.js
                ─ dbWipe.js
                ─ envSetup.js
            ─ dbConnectionManager.js
            ─ jwtUtils.js
        ─ index.js
        ─ server.js
    📁 tests
        ─ eventRouter.test.js
        ─ moodRouter.test.js
        ─ painRouter.test.js
        ─ server.test.js
        ─ userRouter.test.js
    ─ .env
    – .eslintrc.json
    – eslint.config.mjs
    – jest.config.js
    ─ LICENSE
    ─ package-lock.json
    ─ package.json
    ─ README.md
```

## Database Structure

This project uses MongoDB as the database

### Collections

#### Users

```json
{
  "_userId": "ObjectId",
  "username": "davejohnson",
  "password": "hashed_password",
  "email": "davo@example.com",
  "isAdmin": true,
  "theme": "light",
  "salt": "a8f3c91d2ef4...",
  "createdAt": "2026-05-24T07:15:22.123Z",
  "updatedAt": "2026-05-24T09:41:10.456Z"
}
```

#### Pain

```json
{
  "_painId": "ObjectId",
  "user": "davejohnson",
  "value": 3,
  "location": "neck",
  "optional_text": "string",
  "occurred_at": "2026-05-24T07:15:22.123Z", 
  "createdAt": "2026-05-24T07:15:22.123Z",
  "updatedAt": "2026-05-24T09:41:10.456Z"
}
```

#### Events

```json
{
  "_eventId": "ObjectId",
  "user": "davejohnson",
  "title": "breakup", 
  "description": "Broke up with my girlfriend Alysha",
  "category": "life_event",
  "occurred_at": "2026-05-24T07:15:22.123Z",
  "createdAt": "2026-05-24T07:15:22.123Z",
  "updatedAt": "2026-05-24T09:41:10.456Z"
}
```

#### Mood

```json
{
  "_moodId": "ObjectId",
  "user": "davejohnson",
  "value": 5, 
  "optional_text": "Nothing much happened today, boring day at work",
  "occurred_at": "2026-05-24T07:15:22.123Z",
  "createdAt": "2026-05-24T07:15:22.123Z",
  "updatedAt": "2026-05-24T09:41:10.456Z"
}
```

## Authentication

Authentication uses JSON Web Tokens (JWT). Clients send tokens in the `Authorization` header as `Bearer <token>`. Tokens are issued on signup/login and validated by `src/utils/jwtUtils.js` with a 7-day expiry. Secrets are read from environment variables.

## API Endpoints

Quick overview:

- **Authorization:** send `Authorization: Bearer <token>` for protected endpoints (all `/moods`, `/pains`, `/events`, and most `/users/*` except `/signup` and `/login`).
- **Admin-only:** `GET /users`, `GET /users/:userId`, `GET /users/admin/dashboard` require an admin user.
- **Params & queries:** use route params (`:userId`, `:moodId`, `:eventId`) and optional query filters, e.g. `?startDate=2026-05-01&endDate=2026-05-31`.
- **Responses:** `201` on create, `200` on success, `400/401/403/404/500` for errors as appropriate.
- **Example (login):**

```bash
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```


### User Endpoints

- **GET /users** - Retrieve all users of the app (admin only)
- **GET /users/userId** - Retrieve a specific user's information (admin only)
- **GET /users/admin/dashboard** - Retrieve an admins dashboard (admin only)
- **POST /users/signup** - Create a new user account via the signup page
- **POST /users/login** - Create a new user login attempt via the login page
- **PATCH /users/userId** - User makes a request to change information on their profile i.e. theme/email address/name
- **DELETE /users/userId** - User account deleted from the app
- **DELETE /users/:userId/admin** - Admin deletes another user's account (admin only)

### Mood Endpoints

- **GET /moods** - Retrieve all mood entries
- **GET /moods/moodId** - Retrieve a specific mood entry
- **POST /moods** - Create a mood entry
- **PATCH /moods/moodId** - Update a mood entry
- **DELETE /moods/moodId** - Delete a mood entry

### Pain Endpoints

- **GET /pains** - Retrieve all pain entries
- **GET /pains/painId** - Retrieve a specific pain entry
- **POST /pains** - Create a pain entry
- **PATCH /pains/painId** - Update a pain entry
- **DELETE /pains/painId** - Delete a pain entry

### Event Endpoints

- **GET /events** - Retrieve all event entries
- **GET /events/eventId** - Retrieve a specific event entry
- **POST /events** - Create an event entry
- **PATCH /events/eventId** - Update an event entry
- **DELETE /events/eventId** - Delete an event entry

## API Request Handling

- Requests and responses use JSON bodies.
- Route parameters (`:userId`, `:moodId`, etc.) and query parameters (e.g. `startDate` / `endDate`) are used for resource selection and filtering.
- Authorization is enforced by middleware that reads `Authorization` headers and attaches the authenticated user to `request.customData.user`.
- Input is validated at the route and model level; Mongoose schemas enforce field constraints.

## Security

- `helmet` is used to set secure HTTP headers.
- CORS is configured to restrict origins; adjust `src/server.js` `handyCorsConfig` for production domains.
- Passwords are salted and hashed using `scrypt` (see `UserModel`).
- Store `JWT_SECRET` and database credentials in environment variables and run the service behind HTTPS.

## Error Handling

Routes return appropriate HTTP status codes: `400` for bad requests/validation errors, `401` for authentication failures, `403` for forbidden actions, `404` for not found, and `500` for server errors. Sensitive error details are not exposed to clients.

## Installation

Clone, install, and create env file, then run locally:

```bash
git clone https://github.com/The-Village-Wellness-App/village-backend.git
cd village-backend
npm install
npm run setup:env
npm run db:seed
npm run start   # or `npm run dev` for hot-reloading
```

## Environment Variables

To run this project, create an `.env` file in the root directory by running `setup:env`

```env
PORT=3000
DATABASE_URL=mongodb+srv://
JWT_SECRET=
```

## Running the Server

Run the production server by entering into the terminal
```npm run start```

Or if you want hot-reloading, run dev mode
```npm run dev```

## Scripts

The following scripts can be used for this project:

| Script | Description |
| --- | --- |
| `lint` | Formats JavaScript code to ESLint standards |
| `start` | Starts the production server |
| `dev` | Starts the development server with automatic reloads |
| `test` | Runs the Jest test suite |
| `setup:env` | Creates and sets up the environment file |
| `db:seed` | Seeds the database |
| `db:wipe` | Wipes the database |
| `db:reset` | Wipes & seeds the database |

## Testing

The user can run test files individually by running, for example
```npm run test userRouter.test.js```

Or by running all suites
```npm run test```

## Deployment

This app can be deployed to any Node hosting (Render, Heroku, etc.). Set environment variables (`PORT`, `DATABASE_URL`/`MONGO_URI`, `JWT_SECRET`) in the host dashboard and use `npm run start` as the start command.

## JavaScript Style Guide

This project uses **ESLint** with the `eslint:recommended` configuration to enforce consistent code style. ESLint is configured for Node.js environments and Jest testing.

To check code style:
```bash
npm run lint
```

For more information on ESLint, visit [ESLint Documentation](https://eslint.org/).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

This project uses third-party technologies including MongoDB, which is licensed under the Server Side Public License (SSPL).

## References

> [MongoDB. (2026). *MERN Stack Explained*. Retrieved May 24, 2026, from https://www.mongodb.com/resources/languages/mern-stack](#tech-stack)

> [State of JavaScript. (2025). *State of JavaScript 2025: Libraries*. Retrieved May 24, 2026, from https://2025.stateofjs.com/en-US/libraries/](#tech-stack)

> [Stack Overflow. (2025). *2025 Developer Survey*. Retrieved May 24, 2026, from https://survey.stackoverflow.co/2025/](#tech-stack)

## Authors

Created by [WhiteHotThrash](https://github.com/tim-maastricht) & [✨BeeGeeEss✨](https://github.com/BeeGeeEss)
