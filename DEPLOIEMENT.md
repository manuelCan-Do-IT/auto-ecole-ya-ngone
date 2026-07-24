# Déployer Auto école Ya Ngoné

## 1. Mettre le code sur GitHub

Créez d’abord un dépôt GitHub vide, puis ouvrez un terminal dans le dossier du
site et exécutez :

```bash
git init
git add .
git commit -m "Version initiale du site Auto école Ya Ngoné"
git branch -M main
git remote add origin https://github.com/VOTRE-UTILISATEUR/VOTRE-DEPOT.git
git push -u origin main
```

Remplacez `VOTRE-UTILISATEUR` et `VOTRE-DEPOT` par vos vraies informations.

## 2. Déployer avec Vercel — recommandé

1. Connectez-vous sur https://vercel.com avec GitHub.
2. Choisissez **Add New > Project**.
3. Importez le dépôt du site.
4. Vérifiez que le framework détecté est **Next.js**.
5. Dans les variables d’environnement, ajoutez :
   - nom : `NEXT_PUBLIC_SITE_URL`
   - valeur provisoire : l’URL Vercel du projet, puis votre domaine définitif.
6. Cliquez sur **Deploy**.

Vous pouvez aussi déployer depuis le terminal :

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

## 3. Déployer avec Netlify

1. Connectez-vous sur https://app.netlify.com avec GitHub.
2. Choisissez **Add new project > Import an existing project**.
3. Sélectionnez le dépôt GitHub.
4. Le fichier `netlify.toml` fournit la commande de compilation.
5. Ajoutez la variable `NEXT_PUBLIC_SITE_URL`.
6. Lancez le déploiement.

## 4. Après le premier déploiement

Quand l’URL définitive est connue :

1. remplacez la valeur de `NEXT_PUBLIC_SITE_URL` dans l’hébergeur ;
2. relancez le déploiement ;
3. vérifiez la page d’accueil, `/conseils`, un article, `/sitemap.xml` et
   `/robots.txt` ;
4. connectez ensuite le nom de domaine définitif.
