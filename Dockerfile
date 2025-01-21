FROM node:18-alpine

WORKDIR /app

# Instalar build tools necessários para bcrypt
RUN apk add --no-cache python3 make g++ 

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
