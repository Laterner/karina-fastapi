FROM node:18.16-alpine as build
WORKDIR /app
ADD package*.json ./

RUN npm install --only=prod
COPY . /app
RUN npm run build
