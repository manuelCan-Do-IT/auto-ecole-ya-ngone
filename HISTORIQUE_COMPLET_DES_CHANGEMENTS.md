# Historique complet des changements & Évolutions du Design System — Auto école Ya Ngoné

Ce document répertorie **l’intégralité des modifications, refontes UI/UX, corrections de bogues et évolutions du Design System** effectuées sur la plateforme depuis le début des travaux.

---

## 1. Mises à jour & Renforcement du Design System

### 🟡 Harmonisation globale des boutons d'action d'articles (`.article-btn`)
* **Changement** : Généralisation du bouton pilule d'action jaune vif (`.article-btn`) à **TOUTES les cartes d'articles du site**, y compris la page de catalogue d'actualités `/conseils` (`ArticleCard.tsx`) et les suggestions en bas d'article.
* **Résultat** : Unification visuelle 100% cohérente entre la page d'accueil, le catalogue d'articles et les fiches individuelles.

### 🖼️ Redesign des en-têtes d'articles (`/conseils/[slug]`)
* **Suppression de l'image géante encombrante** : Retrait définitif du pavé photo autonome (`.article-cover`) de 560px de hauteur qui bloquait le défilement vertical entre le titre et le corps du texte.
* **Image en arrière-plan du Hero (`.article-hero`)** : L'image de l'article est désormais intégrée directement en arrière-plan du bloc de titre avec un overlay sombre immersif (`linear-gradient(rgba(11, 17, 33, 0.86), rgba(11, 17, 33, 0.94))`).
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
* **Barre d'utilité** : Affichage épuré des coordonnées avec indicatif `+221 78 293 37 33` et icône WhatsApp pure sans préfixe textuel *"WhatsApp :"*.
* **Menu Mobile Drawer** : Hauteur de l'en-tête responsive (68px), shadow nette (`0 12px 32px rgba(0,0,0,0.15)`), liens tactiles à 44px minimum et bouton CTA d'action pleine largeur.

### B. Section Hero (`#accueil`)
* **Suppression de la forme décorative** : Retrait du motif `.sun-shape`.
* **Bandeau de confiance (`trust-strip`)** :
  * Retrait de la ligne jaune d'accent supérieure (`.trust-strip article::before`).
  * Retrait du fond crème des icônes.
  * Cartes réactives sur 1 colonne en mobile.
* **Visuel Hero** : Hauteur ajustée à `340px` sur mobile pour éviter de masquer le contenu.
* **Boutons CTA Hero** : Boutons en largeur 100% sur mobile pour un accès facile au pouce.

### C. Section Présentation (« Bienvenue chez Ya Ngoné » / `#presentation`)
* **Mise en page des cartes** : Alignement dynamique de la grille 3 cartes.
* **Légende photo (`benefit-media`)** : Légende réhaussée sur mobile (`bottom: 24px`) avec textes lisibles.

### D. Section Nos Formations (`#formations`)
* **Photos des permis B, C, D** : Hauteur ajustée à `160px` sur mobile pour éviter le défilement excessif.
* **Badges de catégories (B, C, D)** : Positionnés en bas à gauche de la photo avec shadow marquée.
* **Typographie & boutons** : Liens d'action assortis aux tokens de la marque.

### E. Section Moniteur Principal (`#equipe`)
* **Galerie photo moniteur** : Hauteur ramenée de 490px à `340px` sur mobile pour supprimer l'espace blanc sous la photo.
* **Carte d'expérience** : Badge d'expérience réajusté en haut à droite sans chevaucher les visages.

### F. Section Préparer son Dossier (`#dossier`)
* **Panneau principal (`documents-panel`)** : Passage d'un fond crème plat à une carte blanche pure épurée (`background: var(--white)`) avec ombre portée douce (`box-shadow: 0 12px 36px -8px rgba(6, 21, 50, 0.08)`).
* **Onglets de profil (`profile-tabs`)** : Refonte complète des états (*Sénégalais*, *Étranger CEDEAO*, *Hors CEDEAO*) avec conteneur blanc et onglet actif bleu nuit (`#0B1121`). Empilement à 100% sur mobile.
* **Carte d'information « 4 photos d'identité » (`photo-callout`)** : Redesign en bloc d'alerte haut de gamme avec bordure bleu nuit. Suppression du fond jaune sous l'icône appareil photo.
* **Coches de validation** : Suppression des pastilles circulaires vertes.

### G. Section Stepper (« Comment commencer ? » / `#demarche`)
* **Refonte UX/UI complète (Option 1)** : Remplacement de l'ancienne ligne filale par **4 cartes de processus indépendantes** (`step-card`) sur fond blanc épuré avec survol dynamique (`translateY(-4px)`).
* **Titre centré** : Sur-titre `COMMENT COMMENCER ?` centré au-dessus de *« Quatre étapes pour lancer votre démarche. »*.
* **Icônes SVG Lucide intégrées** :
  * `01 - Formule` : `<MousePointerClick />`
  * `02 - Contact` : `<MessageSquare />`
  * `03 - Dossier` : `<FileText />`
  * `04 - Inscription` : `<BadgeCheck />`

### H. Section Nos Tarifs (`#tarifs`)
* **Fix d'espacement majeur (`price-card`)** : Suppression de la hauteur minimale forcée (`min-height: 345px`) qui créait un trou vide géant de plus de 100px sous le texte descriptif.
* **Lien d'action** : Marge supérieure ajustée (`margin-top: 24px`) pour coller proprement le lien *« Choisir cette formule $\rightarrow$ »* au texte.
* **Responsive mobile** : Désactivation du `transform: translateY(-10px)` sur la carte vedette en version mobile pour éviter les décalages.

### I. Section Questions Fréquentes (`#faq`)
* **Espacement vertical (`.faq-intro p`)** : Ajustement de l'espacement (`margin-top: 16px; margin-bottom: 24px`) entre le sous-texte WhatsApp et le bouton `Poser une question`.
* **Accordion** : Animations d'ouverture fluides avec icônes `Plus` et `Minus`.

### J. Section Conseils & Actualités (Articles Éditoriaux)
* **Bouton d'action unifié (`.article-btn`)** : Bouton pilule d'action jaune vif (`var(--yellow)`) généralisé à toutes les cartes d'articles.
* **Header d'article immersif** : Cover photo intégrée en fond d'en-tête de l'article avec filtre sombre et suppression du pavé photo central.

### K. Section Nous Trouver & Horaires (`#contact`)
* **Vrais horaires de l'auto-école** : Structuration en 2 modules distincts (Code Théorique vs Conduite Pratique) :
  * 📖 **Cours Théoriques (Code de la route)** : Lundi, Mardi, Jeudi, Vendredi | `08h00 – 12h00` & `15h30 – 19h00`.
  * 🚗 **Conduite Pratique** : Mercredi & Samedi | `Sur planning / rendez-vous`.
  * 🔴 **Dimanche** : `Fermé`.
* **Remplacement Emojis par Icônes SVG** : Emojis `📖` et `🚗` remplacés par `<BookOpen />` et `<CarFront />` stylisés avec `--yellow-link`.
* **Carte d'Adresse (`.address-card`)** : Calage visuel exact sur l'esthétique du bouton secondaire *« Ouvrir l'itinéraire »* (`background: var(--navy-soft); border: 1px solid var(--navy-border-strong); border-radius: var(--radius-control)`).

### L. Section Formulaire de Préinscription (`#preinscription`)
* **Mise à jour des coordonnées** : Numéro unique `+221 78 293 37 33` et e-mail `mawdondiaye432@gmail.com`.
* **Suppression de la bande jaune** : Passage du fond `.contact-section` de `var(--yellow)` à `var(--cream)` pour éliminer la bande jaune de 96px qui apparaissait au-dessus du footer.
* **Formulaire responsive** : Champs en 100% de largeur sur mobile avec focus accessible.

### M. Pied de page (Footer)
* **Mise à jour des coordonnées** : `+221 78 293 37 33` et `mawdondiaye432@gmail.com`.
* **Suppression du trait jaune** : Retrait du `border-top: 8px solid var(--yellow)` au-dessus du footer pour une continuité visuelle sombre.

---

## 3. Classification : Modifications Systématiques vs Ajustements Ponctuels

| Catégorie | Type | Description du changement | Portée |
|---|---|---|---|
| **Composant UI** | **Systématique** | Uniformisation des boutons « Lire l'article » en pilule jaune (`.article-btn`) | Globale (Accueil, /conseils, fiches) |
| **Ergonomie UX** | Refonte | Article Hero : Photo en fond d'en-tête et retrait de l'image centrale encombrante | Section `/conseils/[slug]` |
| **Coordonnées** | **Systématique** | Numéro unique `+221 78 293 37 33` et e-mail `mawdondiaye432@gmail.com` | Globale (Toutes les sections, SEO & Chrome) |
| **Design System** | **Systématique** | Règle 28 : Suppression de tous les fond/pastilles sous les icônes | Globale (Toutes les sections) |
| **Design System** | **Systématique** | Règle 23 & 164 : Interdiction des emojis $\rightarrow$ Remplacement par SVG Lucide | Globale (Toutes les sections) |
| **Design System** | **Systématique** | Suppression du pseudo-élément double trait `::after` sur `.eyebrow` | Globale |
| **Responsive UI** | **Systématique** | Regroupement des media-queries mobile ($\le$ 720px) avec réalignement des conteneurs | Globale |
| **Composant UI** | Refonte | Stepper : Passage de la ligne filale à 4 cartes de processus avec icônes | Section `#demarche` |
| **Composant UI** | Refonte | Onglets de profil : Fond blanc, onglet sélectionné bleu nuit `#0B1121` | Section `#dossier` |
| **Composant UI** | Ajustement | Suppression du trou blanc dans `.price-card` (`min-height: auto`) | Section `#tarifs` |
| **Contenu Métier** | Ajustement | Vrais horaires séparés Code Théorique vs Conduite Pratique | Section `#contact` |
| **Correctif Visuel** | Correctif | Carte adresse calée sur le style du bouton itinéraire | Section `#contact` |
| **Correctif Visuel** | Correctif | Suppression de la bande jaune au-dessus du footer | Section `#preinscription` |

---

## 4. Fichiers impactés

* `app/components/ArticleCard.tsx` : Passage du lien « Lire l'article » au composant bouton `.article-btn`.
* `app/conseils/[slug]/page.tsx` : Background image dynamique sur `.article-hero` et suppression de `.article-cover`.
* `app/globals.css` : Styles `.article-hero`, masquage de `.article-cover` et ajustement de `.article-layout`.
* `HISTORIQUE_COMPLET_DES_CHANGEMENTS.md` : Journal de bord exhaustif à jour.
