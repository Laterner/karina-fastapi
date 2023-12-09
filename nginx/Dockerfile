FROM nginx:1.25.3-alpine-slim
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/var/log/nginx"]
# COPY ./html/admin.html /usr/share/nginx/admin/index.html

CMD ["nginx", "-g", "daemon off;"]