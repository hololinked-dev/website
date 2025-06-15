# Build stage
FROM node:22 AS base

WORKDIR /app
COPY backend/package*.json /app
RUN npm install --force

COPY backend/ /app

EXPOSE 5000

# Development image
FROM base AS dev
CMD ["npm", "run", "dev"]

# Production image
FROM base AS build
RUN npm run build
CMD ["node", "dist/index.js"]

# Ideally we want to use nginx
# FROM nginx:alpine AS prod
# COPY --from=build /app/dist/ /usr/share/nginx/html/
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]