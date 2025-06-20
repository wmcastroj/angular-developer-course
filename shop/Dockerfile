# Node server
FROM node:22.11 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Final image
FROM nginx:1.27
COPY --from=build /app/dist/shop /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]