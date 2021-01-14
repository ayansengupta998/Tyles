FROM node:14
WORKDIR \Users\ayanl\Desktop\tyles
COPY . .
RUN yarn install --production
CMD ["node", "app.js"]