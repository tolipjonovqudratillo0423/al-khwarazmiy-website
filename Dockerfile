FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Increase timeouts and reduce concurrent connections to prevent ETIMEDOUT
RUN npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm config set maxsockets 3 && \
    npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
