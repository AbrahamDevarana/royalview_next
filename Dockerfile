FROM node:18.9 as runner

RUN npm install -g npm@8.19.2

WORKDIR /home/app
RUN mkdir pages

COPY utils .
COPY components .
COPY pages .
COPY styles .
COPY public .
COPY next.config.js .
COPY postcss.config.js .
COPY package.json .
COPY package.json .
COPY .eslintrc.json .

RUN npm install
ENV NODE_ENV production
RUN npm run build



CMD [ "next", "start" ]

EXPOSE 3001