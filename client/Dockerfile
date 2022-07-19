FROM node:16-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

CMD [ "yarn", "run", "start" ]

#COPY package.json yarn.lock ./
#RUN yarn
#COPY . .
#RUN yarn generate
#
#FROM nginx:alpine
#
#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=build /app/dist ./
#
#CMD [ "nginx", "-g", "daemon off;" ]
