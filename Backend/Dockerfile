FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait_for_db.sh /usr/src/app/wait_for_db.sh

RUN chmod +x /usr/src/app/wait_for_db.sh

RUN npx prisma generate

EXPOSE 1337

CMD ["sh", "-c", "npx prisma migrate dev --name create-operation-table && npm start"]