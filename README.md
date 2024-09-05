# BeeQuant Turbo

## How do I run this

### Preping local database

A. you could use your locally installed pg instance
or
B. `cd apps/platform_api && docker compose up -d && cd ../../`

Just make sure you db is accessible via the `.env` you created for the servier/platform_api

### Start client and server

1. git clone this repo to your local machine with following command:
   ```bash
   git clone https://github.com/BeeQuantAI/beequant-turbo.git
   ```
2. access into beequant-turbo folder with following command:
   ```bash
   cd beequant-turbo
   ```
3. run following command to enter dev branch:
   ```bash
   git checkout dev
   ```
4. run `yarn` to install all dependencies
5. set a `.env` file to `beequant-turbo/apps/platform-api` with the following content:
   ```bash
    DB_HOST=localhost
    DB_NAME=bqCore
    DB_PORT=5432
    DB_USERNAME=postgres
    DB_PASSWORD=CORE_ADMIN
    JWT_SECRET=hello_beeQuant
    DEFAULT_REFERENCE=COREINTERNAL
    DEFAULT_DISPLAY_NAME='New User'
   ```
6. Run `yarn dev client` to start the new platform app

## What workspaces do we have here?

- client: the new platform app
- platform-api: the backend
