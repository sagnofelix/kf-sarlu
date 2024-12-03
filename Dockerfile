# Step 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install

COPY . /app/
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:1.24-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
