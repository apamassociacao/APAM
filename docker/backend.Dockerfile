# syntax=docker/dockerfile:1

ARG REPO
ARG BRANCH

FROM node:20-alpine AS build-git
RUN apk add git
RUN git clone -b ${BRANCH} --depth 1 ${REPO} /build
RUN cd /build/backend && npm install && npm run build:prod

FROM node:20-alpine AS prod
COPY --from=build-git /build/backend/dist/ /app
CMD [ "node", "/app/index.js" ]

FROM node:20-alpine AS build-local
ADD ./backend /build
RUN cd /build && npm run clean && npm install && npm run build:dev

FROM node:20-alpine AS dev
COPY --from=build-local /build/dist /app
CMD [ "node", "/app/index.js" ]
