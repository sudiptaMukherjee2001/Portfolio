#### BUILD STAGE ####
FROM node:20 AS builder

#WORKDIR
WORKDIR /builderStage

# Copy package.json and package-lock.json
COPY package*.json /builderStage/

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .
# Build the application
RUN npm run build

#### RUN STAGE ####
FROM node:20 AS runner

#WORKDIR
WORKDIR /app
# Copy the built application from the builder stage
COPY --from=builder /builderStage/.next /app/.next
COPY --from=builder /builderStage/node_modules /app/node_modules
COPY --from=builder /builderStage/public /app/public
COPY --from=builder /builderStage/package.json /app/package.json

CMD ["node", "/app/node_modules/next/dist/bin/next", "start"]


