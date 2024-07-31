# docker/Dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Ishga tushirish komandasi (dev)
CMD ["npm", "run", "start:dev"]
