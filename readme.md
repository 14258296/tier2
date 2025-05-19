# Project Overview

This project is a web application built using AdonisJS, a Node.js framework. It provides various features and functionalities that can be extended and customized as per your needs.

## Prerequisites

- Node.js (version 18.x or later)
- npm (version 6.x or later)
- Docker and Docker Compose (if you plan to use Docker)

## Setting Up the Application

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/14258296/tier2.git
   cd t2
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Set Environment Variables:**

   Create `.env` and configure the necessary environment variables.

4. **Run Migrations:**

   ```sh
   node ace migration:run
   ```

5. **Start the Application:**

   ```sh
   npm run dev
   ```

   The application will be available at `http://localhost:3333`.

<!-- ## Assumptions or Decisions

- The project uses AdonisJS for its robust features and ease of use.
- Authentication is managed using the `@adonisjs/auth` package.
- Data is stored using a PostgreSQL database. -->

## Known Issues or Limitations

- More extensive error handling and logging need to be implemented.
- Some features might not be fully optimized for large-scale use.
