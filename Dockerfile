FROM node:lts-alpine

COPY . .

WORKDIR /

RUN npm install

CMD ["npm", "run", "start"]
