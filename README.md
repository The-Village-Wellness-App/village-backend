<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./images/banner-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="images/banner-light.png">
  <img alt="Honey Banner" src="./images/banner-light.png">
</picture>

## Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Database Structure](#database-structure)
- [Authentication](#authentication)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [Scripts](#scripts)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Error Handling](#error-handling)
- [Security](#security)
- [License](#license)
- [Authors](#authors)

## Overview

## Tech Stack

## Features

## API Endpoints

### Users

- **GET /users** - Retrieve all users of the app (admin only)
- **GET /users/userId** - Retrieve a specific user's information (admin only)
- **GET /users/admin/dashboard** - Retrieve an admins dashboard (admin only)
- **POST /users/signup** - Create a new user account via the signup page
- **POST /users/login** - Create a new user login attempt via the login page
- **PATCH /users/userId** - User makes a request to change information on their profile i.e. theme/email address/name
- **DELETE /users/userId** - User account deleted from the app
- **DELETE /users/admin/userID** - Admin user account deleted from the app

### Mood

- **GET /moods** - Retrieve all mood entries
- **GET /moods/moodId** - Retrieve a specific mood entry
- **POST /moods** - Create a mood entry
- **PATCH /moods/moodId** - Update a mood entry
- **DELETE /moods/moodId** - Delete a mood entry

### Pain

- **GET /pains** - Retrieve all pain entries
- **GET /pains/painId** - Retrieve a specific pain entry
- **POST /pains** - Create a pain entry
- **PATCH /pains/painId** - Update a pain entry
- **DELETE /pains/painId** - Delete a pain entry

### Events

- **GET /events** - Retrieve all event entries
- **GET /events/eventId** - Retrieve a specific event entry
- **POST /events** - Create an event entry
- **PATCH /events/eventId** - Update an event entry
- **DELETE /events/eventId** - Delete an event entry

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
|---|---|
| `start` | Starts the production server |
| `dev` | Starts the development server with automatic reloads |
| `test` | Runs the Jest test suite |
| `setup:env` | Creates and sets up the environment file |
| `db:seed` | Seeds the database |
| `db:wipe` | Wipes the database |
| `db:reset` | Wipes & seeds the database |
|

## Testing

## Project Structure

```
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

## Deployment

## Error Handling

## Security

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Authors

Created by [WhiteHotThrash](https://github.com/tim-maastricht) & [✨BeeGeeEss✨](https://github.com/BeeGeeEss)