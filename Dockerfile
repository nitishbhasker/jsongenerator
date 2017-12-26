FROM node:8.1.3

RUN apt-get update -qq && apt-get upgrade -y && apt-get install -y build-essential

WORKDIR /home/json

ADD package.json /home/meshizen/package.json

RUN npm install

EXPOSE 3000

CMD ["node","app.js"]
