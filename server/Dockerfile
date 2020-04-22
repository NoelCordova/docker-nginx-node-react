FROM node:lts

WORKDIR /var/www/api

COPY ./src /var/www/api

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
