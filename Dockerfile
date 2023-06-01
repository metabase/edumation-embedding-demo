FROM node:lts-alpine
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

RUN apk add --no-cache libc6-compat bash
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY . ./

EXPOSE 3003

RUN yarn 
CMD ["yarn", "dev"]