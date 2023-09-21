FROM node:18.16-alpine as build
WORKDIR /app
ADD package*.json ./

RUN npm install --only=prod
COPY . /app
RUN npm run build

# COPY . /usr/share/nginx/html

FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# COPY ./nginx/index.html /usr/share/nginx/html/site/index.html
COPY ./nginx/admin.html /usr/share/nginx/html/admin/index.html

CMD ["nginx", "-g", "daemon off;"]