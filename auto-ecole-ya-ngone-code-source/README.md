# Auto école Ya Ngoné

Site vitrine de l’Auto école Ya Ngoné à Cité Avion, Ouakam — Dakar.

Le projet contient :

- la page d’accueil complète et responsive ;
- les formations, tarifs, dossier, inscription et préinscription WhatsApp ;
- la présentation de Maodo NDIAYE ;
- la rubrique Conseils & Actualités et ses six articles ;
- le SEO technique, le sitemap et les données structurées ;
- le Design System V1 dans `docs/DESIGN_SYSTEM.md`.

## Technologies

- Next.js 16
- React 19
- TypeScript
- CSS natif
- Lucide React
- Barlow et Barlow Semi Condensed

## Lancer le site localement

Prérequis : Node.js 22.13 ou une version plus récente.

```bash
npm install
npm run dev
```

## Mettre en production

Le dépôt inclut les configurations pour Vercel et Netlify. Avant la production,
ajoutez la variable `NEXT_PUBLIC_SITE_URL` avec l’URL publique finale du site.

Consultez `DEPLOIEMENT.md` pour la procédure complète.
