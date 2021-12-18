FROM node:alpine
LABEL maintainer="Senthilbalaij Ganesan <g.senthilbalaji@gmail.com>"

WORKDIR /q-links


COPY q-links-node/build/ build/
COPY q-links-node/package* .

RUN npm ci

COPY q-links-node/index.js .
COPY q-links-node/db.js .
COPY q-links-node/qLinks.db .

EXPOSE 80

CMD ["node", "index.js"]