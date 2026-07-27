# Historique complet des changements & Évolutions du Design System — Auto école Ya Ngoné

Ce document répertorie **l’intégralité des modifications, refontes UI/UX, corrections de bogues et évolutions du Design System** effectuées sur la plateforme depuis le début des travaux.

---

## 1. Mises à jour & Renforcement du Design System

### 📌 Barre de navigation fixe (Sticky Navbar) & Accessibilité (WCAG 2.1 AA)
* **Barre de navigation fixe (`.site-header`)** : L'en-tête de navigation reste désormais scellé en haut de l'écran lors du défilement (`position: sticky; top: 0; z-index: 1000`) avec fond opaque `var(--cream)` et bordure inférieure fine pour un accès permanent au logo et aux liens.
* **Lien d'évitement (« Skip Link »)** : Ajout d'un composant d'accessibilité `.skip-link` (*Aller au contenu principal*) permettant aux utilisateurs naviguant au clavier d'accéder directement au contenu `<main id="main-content">`.
* **Classes utilitaires d'accessibilité (`.sr-only`)** : Intégration de la classe utilitaire masquant les contenus décoratifs tout en les rendant lisibles par les synthèses vocales.

### 📐 Ajustement des cartes de la section Présentation (`.benefit-card` & `.benefit-media`)
* **Réduction du padding des cartes de droite (`01`, `02`, `03`)** : Passage à un padding compact de `20px 24px` avec typographie réajustée, éliminant les grands espaces blancs inutiles sous le texte.
* **Hauteur proportionnelle de la grande photo de gauche** : Équilibrage des hauteurs (`440px`) pour que l'image de gauche épouse exactement la hauteur des 3 cartes.
* **Dégradé sombre fluide restitué** : Fondu doux et progressif du bas vers le haut sur la photo de gauche (`linear-gradient(to top, var(--navy) 0%, rgba(11, 17, 33, 0.88) 45%, transparent 100%)`).

### 🍔 Épuration du bouton Menu Mobile Hamburger (`.menu-toggle`)
* **Suppression de l'arrière-plan et de la bordure** : Retrait du conteneur carré blanc (`background: transparent`, `border: 0`) conformément à la Règle 28 du Design System.
* **Épaisseur affirmée (`stroke-width: 2.6`)** : Icône en bleu nuit officiel (`var(--navy)`) renforcée en gras avec micro-animation fluide à 90°.

---

## 2. Catalogue détaillé des modifications par section

### A. Navigation & En-tête (`site-header`)
* **Positionnement** : En-tête fixe (`position: sticky`), accessible à tout moment pendant le scroll.
* **Accessibilité** : Ajout du lien d'évitement au premier appui sur la touche `Tab`.

---

## 3. Fichiers impactés

* `app/globals.css` : Configuration sticky de `.site-header`, ajout des règles `.skip-link` et `.sr-only`.
* `app/page.tsx` : Ajout du lien d'évitement et de l'ancre `id="main-content"`.
* `HISTORIQUE_COMPLET_DES_CHANGEMENTS.md` : Journal de bord mis à jour.
