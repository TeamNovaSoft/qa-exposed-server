FROM node:20.10-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:20.10-slim AS start

WORKDIR /app

RUN apt-get update && apt-get install -y git

COPY --from=build /app/node_modules ./node_modules

COPY . .

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV:-development}
COPY .env .env

EXPOSE $PORT

CMD ["npm", "start"]
