# Historique complet des changements & Évolutions du Design System — Auto école Ya Ngoné

Ce document répertorie **l’intégralité des modifications, refontes UI/UX, corrections de bogues et évolutions du Design System** effectuées sur la plateforme depuis le début des travaux.

---

## 1. Mises à jour & Renforcement du Design System

### 🎨 Personnalisation de la Barre de défilement (Scrollbar sur-mesure)
* **Design System des couleurs** : Curseur de défilement en bleu nuit officiel (`var(--navy)`), rail fluide en crème ultra-doux (`var(--cream)`).
* **Format & Rayon de courbure** : Largeur fine de 10px et coins arrondis (`border-radius: 6px`) en harmonie exacte avec les boutons et éléments d'interface.
* **Compatibilité universelle** : Support complet Webkit (Chrome, Edge, Safari) et standard Firefox (`scrollbar-width: thin`).

### 📌 Barre de navigation fixe (Sticky Navbar) & Accessibilité (WCAG 2.1 AA)
* **Barre de navigation fixe (`.site-header`)** : L'en-tête de navigation reste désormais scellé en haut de l'écran lors du défilement (`position: sticky; top: 0; z-index: 1000`) avec fond opaque `var(--cream)` et bordure inférieure fine.
* **Lien d'évitement (« Skip Link »)** : Ajout d'un composant d'accessibilité `.skip-link` (*Aller au contenu principal*) pour les utilisateurs naviguant au clavier.

---

## 2. Catalogue détaillé des modifications par section

### Global (Navigateur & CSS)
* **Scrollbar** : Défilement épuré bleu nuit / crème aux coins arrondis.

---

## 3. Fichiers impactés

* `app/globals.css` : Ajout des règles de personnalisation de la scrollbar Webkit & Firefox.
* `HISTORIQUE_COMPLET_DES_CHANGEMENTS.md` : Journal de bord mis à jour.
