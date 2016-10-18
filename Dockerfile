FROM node:latest
ADD ./src /code/src
ADD ./package.json /code/package.json
WORKDIR /code
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]