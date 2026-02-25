# URL Shortener

A simple URL shortener built with Node.js, Express, MongoDB, and EJS. It converts long URLs into short, shareable links and redirects them back to the original URL.

## Features

- Shorten long URLs
- Redirect short URLs to original URLs
- Prevent duplicate entries
- Simple, responsive UI with Tailwind CSS

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS
- Tailwind CSS
- nanoid

## Prerequisites

- Node.js installed
- MongoDB running locally

## Setup

```bash
cd CodeAlpha_URLShortner
npm install
```

## Run

```bash
npm start
```

App runs at:

```
http://localhost:3000
```

## Project Structure

```
CodeAlpha_URLShortner/
  config/
  controllers/
  models/
  public/
  routes/
  views/
  server.js
  package.json
```

## API Routes

- GET / -> Home page
- POST /shorten -> Create short URL
- GET /:shortUrl -> Redirect to original URL

## Author

Abdul Moeez
