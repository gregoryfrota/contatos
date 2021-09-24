FROM node:14.17.5
MAINTAINER MiqSA
ENV NODE_ENV=development
ENV PATH: process.env.PATH
COPY frontend /var/www
WORKDIR /var/www
RUN chmod a+x /var/www/node_modules/.bin/react-scripts
# RUN npm install react-scripts@2.1.8
RUN npm install
RUN npm install axios --save
RUN npm install --save react-router-dom
RUN npm run build
CMD [ "npm", "start" ]
EXPOSE 3000