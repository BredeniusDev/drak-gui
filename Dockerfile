FROM node:18 as build

WORKDIR /app

COPY package.json /app

COPY . .

RUN npm install

RUN npm run build

RUN ls -la dist

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html