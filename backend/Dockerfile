# Use an nginx image to serve the built application
FROM node:22

WORKDIR /app 
COPY package*.json ./
RUN npm install . --force

COPY . /app/
RUN npm run build

WORKDIR /app/dist

EXPOSE 5000

CMD ["node", "server.js"]