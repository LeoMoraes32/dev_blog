FROM node:14 AS builder

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14

WORKDIR /app

COPY --from=builder /app ./

ARG APP_MODE_API
ENV APP_MODE_API ${APP_MODE_API}

ENV DB_PORT 3306
ENV APP_PORT 3333
ENV APP_GLOBAL_PREFIX /api

EXPOSE 3333

CMD ["npm", "run", "start:prod"]
