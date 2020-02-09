FROM node:13.8.0-alpine

WORKDIR /app

RUN npm install -g gatsby-cli

COPY package*.json ./

RUN npm install --production

COPY . ./

RUN npm run build

EXPOSE 8000

ENTRYPOINT ["npm", "run", "serve"]
