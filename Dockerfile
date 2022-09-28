# Node Version
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Install PM2 globally and other dependencies
RUN npm install --global pm2
RUN apk add --no-cache libc6-compat
RUN npm install -g npm@8.19.2

# Copy all files
COPY . .

# Install dependencies
RUN npm install

# Build App
RUN npm run build

# Expose the listening port
EXPOSE 3001

# Run container as non-root (unprivileged) user
USER node

# Run npm start script when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
