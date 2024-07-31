FROM node:20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

#npm run start:dev
CMD ["npm","run","start:dev"]
