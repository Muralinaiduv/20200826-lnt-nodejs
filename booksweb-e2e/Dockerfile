FROM node:12.18-alpine

ENV NODE_ENV production
ENV PORT 7000

ENV BMS_DB_USERNAME=training
ENV BMS_DB_PASSWORD=training101
ENV BMS_DB_SERVER=training.wbunv.mongodb.net



WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]


RUN npm install --production --silent && mv node_modules ../


COPY . .


EXPOSE 7000


CMD ["node", "app.js"]