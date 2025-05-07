# Étape 1 : Utilisation d'une image Node pour la construction
FROM node:22-slim AS build

# Étape 2 : Définition du répertoire de travail
WORKDIR /app

# Étape 3 : Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installation les dépendances
RUN npm install

# Étape 5 : Copie de tous les fichiers du projet
COPY . .

# Étape 6 : Construction l'application (Astro)
RUN npm run build

# Étape 7 : Utilisation d'une image légère pour le serveur de production
FROM nginx:alpine

# Étape 8 : Copie des fichiers construits dans le dossier du serveur Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Étape 9 : Exposition du port pour le serveur Nginx
EXPOSE 80

# Étape 10 : Démarrage du serveur Nginx
CMD [ "nginx", "-g", "daemon off;" ]