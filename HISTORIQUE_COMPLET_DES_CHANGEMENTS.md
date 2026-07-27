# Historique complet des changements & Évolutions du Design System — Auto école Ya Ngoné

Ce document répertorie **l’intégralité des modifications, refontes UI/UX, corrections de bogues et évolutions du Design System** effectuées sur la plateforme depuis le début des travaux.

---

## 1. Mises à jour & Renforcement du Design System

### 📐 Ajustement des cartes de la section Présentation (`.benefit-card` & `.benefit-media`)
* **Réduction du padding des cartes de droite (`01`, `02`, `03`)** : Passage de `28px 32px` à un padding compact de `20px 24px` avec typographie réajustée, éliminant les grands espaces blancs inutiles sous le texte.
* **Hauteur proportionnelle de la grande photo de gauche** : Suppression de la hauteur minimale forcée (`min-height: 560px`) pour que l'image épouse automatiquement la hauteur exacte cumulée des 3 cartes de droite.
* **Dégradé sombre fluide restitué** : Restauration d'un fondu doux et progressif du bas vers le haut sur la photo de gauche (`linear-gradient(to top, var(--navy) 0%, rgba(11, 17, 33, 0.88) 45%, transparent 100%)`), éliminant la ligne de coupure horizontale nette.

### 🍔 Épuration du bouton Menu Mobile Hamburger (`.menu-toggle`)
* **Suppression de l'arrière-plan et de la bordure** : Retrait du conteneur carré blanc et de la bordure (`background: transparent`, `border: 0`) conformément à la Règle 28 du Design System (les icônes reposent directement sur la surface sans pastille ni boîte).
* **Épaisseur affirmée (`stroke-width: 2.6`)** : Icône en bleu nuit officiel (`var(--navy)`) renforcée en gras pour une présence visuelle nette sans grossir le composant.
* **Micro-animation fluide** : Transition en rotation dynamique (`transform: rotate(90deg)`) lors du basculement entre le pictogramme menu et la croix de fermeture.

### 🚫 Règle Anti-AI-Slop — Interdiction stricte des bandes d'accentuation à gauche (`border-left` coloré)
* **Nouvelle règle stricte** : *« Les bandes d'accentuation verticales à gauche (`border-left` coloré) sur les cartes, listes ou éléments actifs sont STRICTEMENT INTERDITES. »*
* **Mise en œuvre** : Suppression intégrale de la bordure gauche sur l'élément actif du sommaire `ArticleTableOfContents.tsx`. L'état actif est désormais exprimé sous forme de **pilule jaune pure pleine** (`background: var(--yellow); color: var(--navy); font-weight: 750; border-radius: var(--radius-control)`), sans aucune fioriture de bordure latérale.

---

## 2. Catalogue détaillé des modifications par section

### C. Section Présentation (« Bienvenue chez Ya Ngoné » / `#presentation`)
* **Cartes bénéfices (`01`, `02`, `03`)** : Padding compact (`20px 24px`), espacements réajustés, suppression des vides sous le texte descriptif.
* **Photo de gauche (`.benefit-media`)** : Hauteur 100% alignée sur la colonne de droite, masque en dégradé fluide du bas vers le haut sans coupure.

---

## 3. Fichiers impactés

* `app/globals.css` : Réduction du padding de `.benefit-card`, hauteur proportionnelle de `.benefit-media`, et dégradé fluide.
* `HISTORIQUE_COMPLET_DES_CHANGEMENTS.md` : Journal de bord mis à jour.
