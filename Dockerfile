FROM node:20-alpine

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies, including Vite
RUN npm ci --include=dev

# Copy project source
COPY . .

# Build React frontend
RUN npm run build

EXPOSE 3000

# Start Express server
CMD ["npm", "start"]