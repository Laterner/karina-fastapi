FROM node:18.16-alpine as build
WORKDIR /app
ADD package*.json ./

ARG VITE_API_HOSTNAME
ENV VITE_API_HOSTNAME=$VITE_API_HOSTNAME
RUN echo $VITE_API_HOSTNAME

RUN npm install --only=prod --force
COPY . /app
RUN npm run build
