FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npx prisma migrate dev --name create-operation-table

EXPOSE 1337

CMD ["npm", "start"]