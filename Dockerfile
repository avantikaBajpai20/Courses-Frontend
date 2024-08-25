# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . /app/

# Build the React application
RUN npm run build

# Expose the port for the React app
EXPOSE 80

# Serve the React app using Nginx
CMD ["npx", "serve", "-s", "build", "-l", "80"]