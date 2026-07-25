# Design system — Auto école Ya Ngoné

Version 1.0 — juillet 2026

Ce document est le contrat visuel commun au site vitrine, à la future plateforme
d’apprentissage et au futur logiciel de gestion. Les trois produits partagent
la même identité, mais leur densité et leurs composants métier restent adaptés
à leur usage.

## 1. Principes

- Communiquer avec clarté avant de décorer.
- Utiliser une hiérarchie typographique et de l’espace avant d’ajouter une carte.
- Réserver le jaune aux actions, repères actifs et informations importantes.
- Employer des surfaces pleines, des bordures nettes et peu d’arrondis.
- Présenter une information simple comme une ligne, une liste ou un séparateur.
- Garder toutes les cibles interactives importantes à 44 px minimum.

## 2. Règles anti-AI-slop

Sont interdits :

- emojis, caractères Unicode et SVG écrits à la main pour remplacer une icône ;
- gradients, glassmorphism, blur, neumorphism et arrière-plans transparents ;
- ombres décoratives sous les cartes, boutons ou images ;
- rayons arbitraires ou supérieurs à 8 px, hors avatar réellement circulaire ;
- capsules utilisées comme décoration ; elles sont réservées aux statuts ;
- icônes automatiquement enfermées dans une pastille colorée ;
- typographies géantes sans fonction éditoriale ;
- valeurs de couleurs, rayons ou espacements inventées dans un composant ;
- menus, champs et sélecteurs laissés dans leur apparence brute par défaut ;
- mélanges de bibliothèques ou de styles d’icônes ;
- bandes verticales d’accentuation à gauche (`border-left` coloré) sur les cartes, liens ou éléments actifs ;
- textes vagues, faux compteurs et informations inventées présentées comme réelles.

## 3. Identité

### Typographie

- Titres : `Barlow Semi Condensed`, graisses 600 à 800.
- Textes et interfaces : `Barlow`, graisses 400 à 800.
- Corps minimum : 16 px.
- Texte secondaire : 14 px minimum.
- Titres principaux du site : 48 à 77 px selon le viewport.
- Titres de section : 36 à 60 px selon le viewport.

### Couleurs principales

| Token | Valeur | Usage |
|---|---:|---|
| `--navy` | `#0B1121` | Texte, navigation, grandes surfaces sombres |
| `--navy-soft` | `#1A2235` | Surfaces sombres secondaires |
| `--yellow` | `#FDEF42` | Action principale et repère actif |
| `--cream` | `#FFF9EC` | Fond chaleureux principal |
| `--white` | `#FFFFFF` | Formulaires et surfaces éditoriales |
| `--ink-muted` | `#596579` | Texte secondaire |
| `--line` | `#D8DEE8` | Bordures et séparateurs |
| `--success` | `#147A4B` | Succès réel uniquement |
| `--danger` | `#B42318` | Erreur réelle uniquement |
| `--info` | `#175CD3` | Information fonctionnelle uniquement |

Les couleurs dérivées sont aussi déclarées comme variables dans `globals.css`.
Aucune couleur ne doit être écrite directement dans un composant.

### Signature « ligne de conduite »

Un trait continu suivi d’un court trait interrompu accompagne les libellés de
section. Il sert de repère de marque, jamais de motif de fond. Une apparition
forte par zone suffit.

## 4. Échelles

### Espacement

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96`

Tokens : `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-6`,
`--space-8`, `--space-12`, `--space-16`, `--space-24`.

### Rayons

- `--radius-control: 6px` pour boutons, champs, onglets et petits repères.
- `--radius-surface: 8px` pour cartes, menus, images et panneaux.
- `50%` uniquement pour un avatar ou un élément intrinsèquement circulaire.

### Mouvement

- Interaction simple : `140 ms`.
- Ouverture ou changement d’état : `190 ms`.
- Aucun rebond, flottement, parallax ou grossissement spectaculaire.
- `prefers-reduced-motion` supprime les transitions non essentielles.

## 5. Icônes

- Bibliothèque unique : `lucide-react`.
- Style outline, épaisseur 2 px.
- 20 px en usage courant, 24 px pour une action importante, 32 px maximum.
- L’icône reste sans fond décoratif.
- Une icône accompagne une action ou clarifie une information ; elle ne remplit
  jamais un espace vide.
- Pour une marque, préférer son symbole officiel ou une icône générique clairement
  libellée. Le site utilise `MessageCircle` avec le libellé « WhatsApp ».

## 6. Composants

### Boutons

- Primaire : jaune, texte bleu nuit.
- Secondaire : surface pleine blanche, bordure bleu nuit.
- Sur fond sombre : surface `navy-soft`, texte blanc, bordure visible.
- Tertiaire : lien textuel avec `ArrowRight` Lucide.
- Hauteur : 52 px sur le site ; minimum 44 px dans les applications.

### Cartes

Une carte représente un objet autonome : formation, tarif, témoignage ou
article. Elle utilise une bordure, un rayon de 8 px et aucune ombre. Le survol
renforce la bordure sans déplacer l’élément.

### Navigation et menus

- Élément actif souligné par la ligne jaune.
- Menu mobile : surface blanche pleine, bordure, rayon 8 px.
- Tous les items font au moins 44 px.
- Le menu est navigable au clavier et son bouton expose son état.

### Onglets

- États inactifs : surface crème avec bordure.
- État actif : bleu nuit avec texte blanc.
- L’état est communiqué par `aria-selected` ou `aria-pressed`.

### Formulaires

- Label toujours visible.
- Champ de 51 px sur le site, rayon 6 px.
- Focus jaune de 3 px, visible au clavier.
- Sélecteur personnalisé avec un `ChevronDown` Lucide.
- Placeholder secondaire ; jamais utilisé à la place du label.
- Erreur affichée sous le champ, en texte et en couleur.

### FAQ

Liste séparée par des lignes, sans pile de cartes. Les états ouvert et fermé
utilisent `Minus` et `Plus` de Lucide avec `aria-expanded`.

## 7. Adaptation par produit

| Site vitrine | Apprentissage | Gestion |
|---|---|---|
| Mise en page éditoriale | Parcours et feedback | Densité et efficacité |
| Photos humaines | Exercices et progression | Tableaux et filtres |
| Texte 16–18 px | Actions pédagogiques | Contrôles compacts |
| Cartes limitées | États de réussite/erreur | Navigation latérale |
| CTA commerciaux | CTA d’apprentissage | Actions métier |

Les couleurs, typographies, icônes, rayons, espacements, états de focus et règles
d’accessibilité restent communs.

## 8. Contrat d’implémentation

- Toute couleur vient d’un token CSS.
- Tout rayon utilise les tokens 6 px ou 8 px, sauf avatar circulaire.
- Toute icône d’interface vient de Lucide.
- Aucun composant ne contient de SVG ou d’emoji codé à la main.
- Aucun gradient, blur, fond transparent ou ombre décorative.
- Les composants interactifs documentent normal, hover, focus, actif et désactivé.
- Chaque changement est contrôlé au clavier, sur mobile et avec réduction du mouvement.

