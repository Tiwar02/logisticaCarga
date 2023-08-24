# Etapa 1: Instala dependencias y corre las pruebas
FROM node:18 AS builder

WORKDIR /app

# Copia el package.json y package-lock.json para instalar dependencias
COPY package*.json ./ 

# Instala las dependencias
RUN npm install

# Copia todos los archivos necesarios, incluyendo el código fuente
COPY . .


# Ejecuta las pruebas y detiene la construcción si fallan
RUN npm test || exit 1

#Ejecuta la aplicación
FROM node:18

WORKDIR /app

# Copia solo los archivos necesarios para la ejecución
COPY --from=builder /app .

# Ejecuta el script de inicio
CMD ["npm", "start"]

