# Use the official Node.js image based on Alpine
FROM node:current-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the project
RUN npm run build

# Expose port 4000
EXPOSE 4173

# Start the application
CMD ["npm", "start"]
