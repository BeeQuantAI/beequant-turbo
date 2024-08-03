# Platform Web App

## Environment setup

0. setup your backend services
1. clone this repo.
2. run `yarn` in the project root.
3. add a `.env` file, and include the following

    ```
    NEXT_PUBLIC_DEV_SERVER_URL=http://localhost:3000/graphql
    ```

## Environment Variables
This project uses the following environment variables:

```
VITE_APP_REFERENCE_NAME=COREINTERNAL
```

This variable specifies the default reference name used in the registration. Make sure to set this variable in your environment configuration. If not set, the application will use `Default_Reference_Name` provided in the code.

Please make sure to set up the required environment variables before running the application.

## Start developing work

1. run `yarn dev` and have fun

## To run the frontend within the docker container:

Follow these steps to get the frontend up and running inside a Docker container.

1. pre-request :
   ensure the PostgreSQL and backend docker containers are running properly.

2. build docker image:
   Run the following command to build the Docker image for the platform API:
   ```
   docker build -t platform_app .
   ```

3. run docker
   Execute this command to run the Docker container in the background:
   ```
   docker run --name platform_app -p 5173:5173 -d platform_app
   ```

4. Navigate to web app: http://localhost:5173/, and have a fun.
