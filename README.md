<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./images/banner-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="images/banner-light.png">
  <img alt="Honey Banner" src="./images/banner-light.png">
</picture>

## Contents

- [Overview of Project](#overview-of-project)
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
- [Project Style Guide](#project-style-guide)
- [License](#license)
- [References](#references)
- [Authors](#authors)

## Overview of Project

This backend application was created as part of an academic Web Development assessment using MongoDB, Express, React and Node (MERN). The backend application forms the first assessable task, with the frontend application proposed to be finalised for assessment in June. Please see updates to the  [frontend application.](https://github.com/The-Village-Wellness-App/village-frontend)

Alternatively, visit the projects [profile](https://github.com/The-Village-Wellness-App) for more information.

## Overview of Backend Application

The purpose of this web application is ...

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
| MongoDB | Stores application data |
| Express.js | Handles API routing and middleware |
| React | Builds the frontend user interface |
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

*Note: Though MongoDB uses an SSPL licence, it is still appropriate to licence the project under MIT. 

This project does not require open-source code because it is:

1. For a public educational project
2. Communicating with MongoDB Atlas as an external managed database service through Mongoose
3. Does not redistribute or host MongoDB

## Packages

## System Requirements

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

## API Endpoints

### User Endpoints

- **GET /users** - Retrieve all users of the app (admin only)
- **GET /users/userId** - Retrieve a specific user's information (admin only)
- **GET /users/admin/dashboard** - Retrieve an admins dashboard (admin only)
- **POST /users/signup** - Create a new user account via the signup page
- **POST /users/login** - Create a new user login attempt via the login page
- **PATCH /users/userId** - User makes a request to change information on their profile i.e. theme/email address/name
- **DELETE /users/userId** - User account deleted from the app
<!--  Is this an endpoint?
- **DELETE /users/admin/userID** - Admin user account deleted from the app
-->

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

## Security

## Error Handling

## Installation

## Environment Variables

To run this project, create an `.env` file in the root directory by running `setup:env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
```

## Running the Server

## Scripts

The following scripts can be used for this project:

| Script | Description |
| --- | --- |
| `start` | Starts the production server |
| `dev` | Starts the development server with automatic reloads |
| `test` | Runs the Jest test suite |
| `setup:env` | Creates and sets up the environment file |
| `db:seed` | Seeds the database |
| `db:wipe` | Wipes the database |
| `db:reset` | Wipes & seeds the database |

## Testing

## Deployment

## Project Style Guide

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

This project uses third-party technologies including MongoDB, which is licensed under the Server Side Public License (SSPL).

## References

> [MongoDB. (2026). *MERN Stack Explained*. Retrieved May 24, 2026, from https://www.mongodb.com/resources/languages/mern-stack](#tech-stack)

> [State of JavaScript. (2025). *State of JavaScript 2025: Libraries*. Retrieved May 24, 2026, from https://2025.stateofjs.com/en-US/libraries/](#tech-stack)

> [Stack Overflow. (2025). *2025 Developer Survey*. Retrieved May 24, 2026, from https://survey.stackoverflow.co/2025/](#tech-stack)

## Authors

Created by [WhiteHotThrash](https://github.com/tim-maastricht) & [✨BeeGeeEss✨](https://github.com/BeeGeeEss)
