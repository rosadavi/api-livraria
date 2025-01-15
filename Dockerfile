# Define a imagem base
FROM node

# Cria e define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos da aplicação para o diretório de trabalho
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Define o comando para rodar a aplicação
CMD ["node", "dist/index.js"]