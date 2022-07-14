FROM node:16-alpine

WORKDIR /app

COPY package.json .
RUN yarn
COPY db.json .

CMD [ "yarn", "run", "mock-server" ]