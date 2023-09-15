FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/var/log/nginx"]

CMD ["nginx", "-g", "daemon off;"]