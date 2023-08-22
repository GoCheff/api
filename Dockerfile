FROM node:18.13

WORKDIR /app
COPY . .
RUN npm i
RUN npx prisma migrate deploy
RUN npm run build
RUN rm -rf src
RUN npm prune --production

CMD ["npm", "start"]

