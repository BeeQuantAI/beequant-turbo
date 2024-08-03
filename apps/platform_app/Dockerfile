FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5173

CMD ["yarn", "build", "&&", "yarn", "start"]
