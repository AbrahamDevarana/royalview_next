FROM node:16-alpine


WORKDIR /home/app

COPY . .

RUN npm run start

EXPOSE 3001