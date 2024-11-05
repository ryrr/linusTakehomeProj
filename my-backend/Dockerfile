# Use Node.js LTS version
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose the port
EXPOSE 3000

# Run the app
CMD ["node", "src/server.js"]
