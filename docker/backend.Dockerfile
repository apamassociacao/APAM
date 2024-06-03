# syntax=docker/dockerfile:1

FROM node:21-alpine AS build-git
RUN apk add git
ARG REPO
ARG BRANCH
RUN git clone -b ${BRANCH} --depth 1 ${REPO} /build
RUN cd /build/backend && npm install && npm run build:prod
RUN cd /build/frontend && npm install && npm run build:prod

FROM node:20-alpine AS prod
COPY --from=build-git /build/backend/dist /app
COPY --from=build-git /build/frontend/dist /frontend
CMD [ "node", "/app/index.js" ]

FROM node:21-alpine AS build-local
ADD . /build
RUN cd /build/backend && npm run clean && npm install && npm run build:dev
RUN cd /build/frontend && npm run clean && npm install && npm run build:dev

FROM node:20-alpine AS dev
COPY --from=build-local /build/backend/dist /app
COPY --from=build-local /build/frontend/dist /frontend
CMD [ "node", "/app/index.js" ]
