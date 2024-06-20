FROM node:16.14-alpine

WORKDIR /backend

# Copiar ambos package.json e package-lock.json, se existir
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

EXPOSE 8001

ENTRYPOINT ["npm", "run"]
CMD ["dev"]
