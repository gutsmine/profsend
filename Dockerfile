FROM node:lts-alpine

COPY . .

WORKDIR /

RUN npm install --no-lockfile

CMD ["npm", "run", "start"]
