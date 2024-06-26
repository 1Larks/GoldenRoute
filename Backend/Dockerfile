FROM node:18

RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY wait-for-it.sh /usr/src/app/wait-for-it.sh

RUN chmod +x /usr/src/app/wait-for-it.sh

RUN npx prisma generate

EXPOSE 1337

CMD ["./wait-for-it.sh", "postgres", "npx prisma migrate dev --name create-operation-table && npm start"]

# CMD ["sh", "/usr/src/app/wait-for-it.sh", "postgres", "npx prisma migrate dev --name create-operation-table"]