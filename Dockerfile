# Base image for Node.js applications
FROM node:22 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
# if you use  WORKDIR then no need to use /app insted of this use . in destination path
COPY . . 

RUN npm run build

# only use for Documentation purposes, not needed for the container to run
EXPOSE 3000 

# Command to run the application
CMD ["npm", "start"]