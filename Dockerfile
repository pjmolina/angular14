FROM nginx:1.25.1-alpine

COPY dist/angular14/ /usr/share/nginx/html

