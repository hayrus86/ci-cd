FROM alpine:latest
RUN apk update
RUN apk add nodejs npm
RUN apk add nodejs-current
WORKDIR /app
COPY package.json .
RUN npm install --force --loglevel verbose
COPY public/ ./public/
COPY scripts/ ./scripts/
COPY src/ ./src/
#RUN ls -la ./src
EXPOSE 5018
#CMD ["ls", "-la", "./src"]
CMD ["npm", "start"]
#CMD ["ifconfig"]