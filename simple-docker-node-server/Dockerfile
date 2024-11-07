# Use a base image with Node.js
FROM node:22.11.0-alpine3.20

# Set the working directory
WORKDIR /app

# Copy the package.json, package-lock.json, and app.mjs files
COPY package*.json app.mjs ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]