FROM node:16.11.1-bullseye-slim

WORKDIR /app

COPY . .

RUN npm install
RUN npx webpack app.js --mode development

RUN npm install -g http-server

EXPOSE 3000

CMD ["http-server", "-p", "3000"]
