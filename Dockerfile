FROM node:stretch-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ["index.js", "queries.js", "./"]
CMD [ "node", "index.js" ]