# imagem oficial do node
FROM node:20

# diretório da aplicação
WORKDIR /app

# copia dependências
COPY package*.json ./

# instala dependências
RUN npm install

# copia código da aplicação
COPY . .

# expõe porta da API
EXPOSE 3000

# comando para iniciar aplicação
CMD ["npm", "run", "dev"]