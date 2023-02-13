FROM node
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3000
ENTRYPOINT [ "node", "index.js" ]
CMD [ "echo", "Server Running!" ]