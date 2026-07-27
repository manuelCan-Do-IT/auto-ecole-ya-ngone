# Historique complet des changements & Évolutions du Design System — Auto école Ya Ngoné

Ce document répertorie **l’intégralité des modifications, refontes UI/UX, corrections de bogues et évolutions du Design System** effectuées sur la plateforme depuis le début des travaux.

---

## 1. Mises à jour & Renforcement du Design System

### 🍔 Épuration du bouton Menu Mobile Hamburger (`.menu-toggle`)
* **Suppression de l'arrière-plan et de la bordure** : Retrait du conteneur carré blanc et de la bordure (`background: transparent`, `border: 0`) conformément à la Règle 28 du Design System (les icônes reposent directement sur la surface sans pastille ni boîte).
* **Épaisseur affirmée (`stroke-width: 2.6`)** : Icône en bleu nuit officiel (`var(--navy)`) renforcée en gras pour une présence visuelle nette sans grossir le composant.
* **Micro-animation fluide** : Transition en rotation dynamique (`transform: rotate(90deg)`) lors du basculement entre le pictogramme menu et la croix de fermeture.

### 🚫 Règle Anti-AI-Slop — Interdiction stricte des bandes d'accentuation à gauche (`border-left` coloré)
* **Nouvelle règle stricte** : *« Les bandes d'accentuation verticales à gauche (`border-left` coloré) sur les cartes, listes ou éléments actifs sont STRICTEMENT INTERDITES. »*
* **Mise en œuvre** : Suppression intégrale de la bordure gauche sur l'élément actif du sommaire `ArticleTableOfContents.tsx`. L'état actif est désormais exprimé sous forme de **pilule jaune pure pleine** (`background: var(--yellow); color: var(--navy); font-weight: 750; border-radius: var(--radius-control)`), sans aucune fioriture de bordure latérale.

### 📌 Indicateur dynamique de section (« Scrollspy ») dans le sommaire d'article (`ArticleTableOfContents.tsx`)
* **Détection automatique au défilement** : Création d'un composant interactif réactif (`IntersectionObserver`) qui détecte la section actuellement lue à l'écran.
* **Mise en valeur visuelle de l'élément actif** : La section en cours de lecture dans le sommaire "DANS CE GUIDE" s'illumine automatiquement sous forme de pilule jaune vive (`var(--yellow)`) avec texte bleu nuit en gras.
* **Navigation fluide (Smooth scroll)** : Clic sur une section du sommaire déclenchant un défilement doux directement vers le titre ciblé.

### 🟡 Harmonisation globale des boutons d'action d'articles (`.article-btn`)
* **Changement** : Généralisation du bouton pilule d'action jaune vif (`.article-btn`) à **TOUTES les cartes d'articles du site**, y compris la page de catalogue d'actualités `/conseils` (`ArticleCard.tsx`) et les suggestions en bas d'article.
* **Résultat** : Unification visuelle 100% cohérente entre la page d'accueil, le catalogue d'articles et les fiches individuelles.

### 🖼️ Redesign des en-têtes d'articles (`/conseils/[slug]`)
* **Suppression de l'image géante encombrante** : Retrait définitif du pavé photo autonome (`.article-cover`) de 560px de hauteur qui bloquait le défilement vertical entre le titre et le corps du texte.
* **Image en arrière-plan du Hero (`.article-hero`)** : L'image de l'article est désormais intégrée directement en arrière-plan du bloc de titre avec un overlay sombre immersif.
* **Confort de lecture** : Une lisibilité optimale du texte en blanc et un enchaînement direct vers le corps de l'article sans obstacle visuel.

### 📞 Coordonnées officielles uniques & Indicatif pays `+221`
* **Numéro officiel unique (WhatsApp & Téléphone)** : **`+221 78 293 37 33`**
  * Suppression de tous les anciens numéros secondaires (`77 546 17 18`, `77 700 38 16`).
  * **Intégration systématique de l'indicatif `+221`** devant chaque mention textuelle du numéro sur tout le site (barre d'utilité, section préinscription, cartes de contact, footer et pages d'actualités).
  * **Épuration de la barre supérieure (`utility-bar`)** : Suppression du préfixe textuel *"WhatsApp :"* pour n'afficher que l'icône SVG WhatsApp suivie directement du numéro `+221 78 293 37 33`.
* **Adresse e-mail officielle unique** : **`mawdondiaye432@gmail.com`**
  * Remplacement de l'ancienne adresse e-mail sur tout le site, y compris dans le footer, la section de contact et les métadonnées SEO Schema JSON-LD (`layout.tsx`).

### 🚫 Règle 28 — Interdiction des pastilles et arrière-plans sous les icônes
* **Règle originale** : *« Les icônes automatiquement enfermées dans une pastille colorée sont INTERDITES. »*
* **Mise en œuvre systémique** :
  * **Coches de validation ($\checkmark$)** : Suppression des pastilles circulaires vertes/pastelles sous les coches dans la liste des pièces à fournir (`.document-list li span`). Les icônes `Check` s'affichent désormais directement en vert succès pur sans fond.
  * **Appareil photo dossier (`photo-icon`)** : Suppression du carré jaune de fond sous l'icône `Camera`.
  * **Cartes du Hero (`trust-icon`)** : Suppression du fond crème et du carré encadrant les icônes des cartes du Hero.
  * **Cartes d'étapes (`step-icon`)** : Suppression de toute forme ou pastille sous les icônes de processus.
  * **Carte d'adresse (`location-icon`)** : L'icône `MapPin` repose directement sur la surface.

### 🚫 Règle 23 & 164 — Interdiction absolue des Emojis
* **Règle** : *« Aucun composant ne contient d'emoji codé à la main ou de caractère Unicode décoratif. Seules les icônes SVG de la bibliothèque Lucide sont autorisées. »*
* **Mise en œuvre systémique** :
  * Suppression de tous les emojis insérés (ex: `📖` et `🚗` dans les cartes d'horaires).
  * Remplacement systématique par les composants SVG Lucide officiels : `<BookOpen />` et `<CarFront />` stylisés avec la couleur d'accentuation `--yellow-link`.

### ✂️ Décorations typographiques (Sur-titres `.eyebrow`)
* **Changement** : Suppression universelle du pseudo-élément décoratif à double trait `::after` (`border-right: 13px; border-left: 37px;`) sur la classe globale `.eyebrow`.
* **Raison** : Purification éditoriale globale pour éviter les fioritures visuelles inutiles et respecter la sobriété du Design System.

### 📱 Règles d'alignement responsive (Desktop vs Mobile)
* **Desktop ($\ge$ 721 px)** :
  * Les en-têtes de sections `.centered-heading` sont centrés au milieu de l'écran (`text-align: center; margin-inline: auto`).
* **Mobile ($\le$ 720 px)** :
  * Les en-têtes de sections et sur-titres s'alignent à gauche (`text-align: left`).
  * **Correction de conteneur majeure** : Correction du bogue où `.centered-heading` écrasait `margin-inline: auto` du `.container`. Les titres s'alignent désormais au millimètre près sur la marge exacte des cartes de contenu, sans jamais toucher le bord de l'écran à 0px.

---

## 2. Catalogue détaillé des modifications par section

### A. Navigation & En-tête (`site-header`, `utility-bar`, `main-nav`)
* **Bouton Hamburger mobile** : Suppression du cadre carré blanc, icône bleu nuit bold (`stroke-width: 2.6`) reposant directement sur la surface avec transition fluide.
* **Barre d'utilité** : Affichage épuré des coordonnées avec indicatif `+221 78 293 37 33` et icône WhatsApp pure sans préfixe textuel *"WhatsApp :"*.
* **Menu Mobile Drawer** : Hauteur de l'en-tête responsive (68px), shadow nette (`0 12px 32px rgba(0,0,0,0.15)`), liens tactiles à 44px minimum et bouton CTA d'action pleine largeur.

---

## 3. Classification : Modifications Systématiques vs Ajustements Ponctuels

| Catégorie | Type | Description du changement | Portée |
|---|---|---|---|
| **Responsive UI** | Refonte | Hamburger mobile : Icône bleu nuit bold sans arrière-plan carré + transition fluide | Navigation mobile |
| **Design System** | **Systématique** | Interdiction absolue du `border-left` coloré sur les cartes et listes | Globale |
| **Composant UX** | Refonte | Sommaire interactif (`ArticleTableOfContents`) avec surlignage pilule jaune au défilement | Section `/conseils/[slug]` |
| **Composant UI** | **Systématique** | Uniformisation des boutons « Lire l'article » en pilule jaune (`.article-btn`) | Globale (Accueil, /conseils, fiches) |
| **Ergonomie UX** | Refonte | Article Hero : Photo en fond d'en-tête et retrait de l'image centrale encombrante | Section `/conseils/[slug]` |
| **Coordonnées** | **Systématique** | Numéro unique `+221 78 293 37 33` et e-mail `mawdondiaye432@gmail.com` | Globale (Toutes les sections, SEO & Chrome) |
| **Design System** | **Systématique** | Règle 28 : Suppression de tous les fond/pastilles sous les icônes | Globale (Toutes les sections) |
| **Design System** | **Systématique** | Règle 23 & 164 : Interdiction des emojis $\rightarrow$ Remplacement par SVG Lucide | Globale (Toutes les sections) |
| **Design System** | **Systématique** | Suppression du pseudo-élément double trait `::after` sur `.eyebrow` | Globale |
| **Responsive UI** | **Systématique** | Regroupement des media-queries mobile ($\le$ 720px) avec réalignement des conteneurs | Globale |

---

## 4. Fichiers impactés

* `app/globals.css` : Styles épurés pour `.menu-toggle`, suppression de l'arrière-plan/bordure, stroke bold, micro-animation.
* `app/page.tsx` : Ajout de la classe dynamique `is-active` sur `.menu-toggle`.
* `HISTORIQUE_COMPLET_DES_CHANGEMENTS.md` : Journal de bord mis à jour.
