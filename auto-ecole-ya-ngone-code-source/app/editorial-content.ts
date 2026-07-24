export type ArticleSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type EditorialArticle = {
  slug: string;
  category: "Démarches" | "Permis" | "Code de la route" | "Conduite" | "Vie de l’auto-école";
  title: string;
  seoTitle: string;
  excerpt: string;
  intro: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  sections: readonly ArticleSection[];
  takeaway: string;
  source?: { label: string; url: string };
};

export const editorialArticles: readonly EditorialArticle[] = [
  {
    slug: "inscription-permis-conduire-senegal",
    category: "Démarches",
    title: "Comment s’inscrire au permis de conduire au Sénégal ?",
    seoTitle: "Inscription au permis de conduire au Sénégal",
    excerpt: "Le parcours expliqué simplement : choix de la catégorie, préparation du dossier, inscription et organisation de la formation.",
    intro: "Une inscription réussie commence avant la première leçon. Il faut choisir la bonne catégorie, comprendre le budget global et préparer un dossier complet. Voici l’ordre le plus simple pour avancer sans perdre de temps.",
    readingTime: "6 min de lecture",
    image: "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Une candidate prépare des documents pour son inscription",
    sections: [
      {
        heading: "1. Définir le permis adapté à votre projet",
        paragraphs: ["Le permis B correspond aux véhicules légers. Les catégories C et D concernent des usages professionnels plus spécifiques. Avant de payer, expliquez votre objectif à l’auto-école afin qu’elle vous indique la formule et les conditions adaptées."],
        bullets: ["Permis B : voiture et véhicule léger", "Permis C : véhicule poids lourd", "Permis D : transport de personnes"],
      },
      {
        heading: "2. Demander le coût complet",
        paragraphs: ["Le prix d’une formule n’est pas toujours le seul montant à prévoir. Demandez clairement ce qui est inclus et ce qui reste à votre charge : quittance, visite médicale, enrôlement, retrait du permis ou autre démarche administrative."],
      },
      {
        heading: "3. Préparer et faire vérifier le dossier",
        paragraphs: ["Réunissez les pièces demandées avant de vous déplacer. À Auto école Ya Ngoné, la liste est présentée selon le profil du candidat : Sénégalais, ressortissant CEDEAO ou candidat hors CEDEAO. Une dernière vérification par l’établissement évite les oublis."],
      },
      {
        heading: "4. Confirmer le planning et le démarrage",
        paragraphs: ["Une fois la formule et le dossier validés, convenez des horaires, du rythme des séances et du premier rendez-vous. Gardez les reçus et les informations utiles dans un même dossier."],
      },
    ],
    takeaway: "Commencez par un échange avec l’auto-école : la catégorie, le tarif global, les pièces et le planning doivent être clairs avant la confirmation de l’inscription.",
    source: { label: "Démarches officielles — Sénégal Services", url: "https://backend.senegalservices.sn/demarches/transports/permis-de-conduire-et-papiers-des-vehicules" },
  },
  {
    slug: "pieces-dossier-permis-senegal",
    category: "Démarches",
    title: "Quelles pièces préparer pour votre dossier de permis ?",
    seoTitle: "Pièces du dossier de permis au Sénégal",
    excerpt: "Une checklist pratique pour réunir les documents essentiels et anticiper les pièces propres à votre situation.",
    intro: "Un dossier incomplet peut ralentir toute la démarche. Cette checklist reprend les éléments à préparer pour votre premier échange avec Auto école Ya Ngoné. La liste définitive doit toujours être confirmée avant le dépôt.",
    readingTime: "5 min de lecture",
    image: "https://images.pexels.com/photos/7681258/pexels-photo-7681258.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Des documents administratifs préparés sur une table",
    sections: [
      {
        heading: "Les pièces communes à préparer",
        paragraphs: ["Classez les originaux et les photocopies séparément. Vérifiez aussi que les informations d’identité sont lisibles et cohérentes sur tous les documents."],
        bullets: ["Photocopie légalisée de la carte d’identité ou du passeport", "Certificat de résidence", "Certificat de visite médicale", "Attestation du groupe sanguin", "Quatre photos d’identité au total", "Quittance du dossier"],
      },
      {
        heading: "Pourquoi prévoir quatre photos ?",
        paragraphs: ["Trois photos sont destinées au dossier et une photo supplémentaire est utilisée pour la visite médicale. Préparer les quatre en même temps évite un second déplacement."],
      },
      {
        heading: "Candidats étrangers : une vérification supplémentaire",
        paragraphs: ["La pièce complémentaire dépend de la situation du candidat. Pour un ressortissant CEDEAO, l’auto-école demande notamment la carte consulaire légalisée. Pour un candidat hors CEDEAO, elle vérifie le justificatif lié à l’autorisation d’établissement."],
      },
      {
        heading: "Le bon réflexe avant le dépôt",
        paragraphs: ["Envoyez une photo lisible de vos pièces sur WhatsApp ou passez à l’auto-école pour une vérification. Les exigences administratives peuvent évoluer : ne vous fiez pas uniquement à une ancienne liste."],
      },
    ],
    takeaway: "Préparez quatre photos, classez chaque document et faites confirmer la liste selon votre nationalité avant d’acheter ou de légaliser les dernières pièces.",
  },
  {
    slug: "difference-permis-b-c-d-senegal",
    category: "Permis",
    title: "Permis B, C ou D : quelle catégorie choisir ?",
    seoTitle: "Différence entre les permis B, C et D au Sénégal",
    excerpt: "Voiture, poids lourd ou transport de personnes : découvrez la logique de chaque catégorie avant de choisir votre formule.",
    intro: "Les lettres B, C et D ne correspondent pas au même type de véhicule ni au même projet. Le choix doit partir de l’usage prévu : déplacement personnel, conduite d’un poids lourd ou transport de passagers.",
    readingTime: "5 min de lecture",
    image: "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Plusieurs véhicules circulent sur une route",
    sections: [
      {
        heading: "Le permis B pour les véhicules légers",
        paragraphs: ["C’est la catégorie la plus courante pour conduire une voiture particulière. Elle convient généralement aux déplacements personnels et à de nombreux besoins professionnels utilisant un véhicule léger."],
      },
      {
        heading: "Le permis C pour les véhicules lourds",
        paragraphs: ["La catégorie C concerne la conduite des poids lourds. Elle répond davantage à un projet professionnel dans le transport, la logistique ou les activités nécessitant ce type de véhicule."],
      },
      {
        heading: "Le permis D pour le transport de personnes",
        paragraphs: ["La catégorie D est liée au transport de passagers. Les conditions d’accès et le parcours à suivre doivent être confirmés avec l’auto-école selon la situation du candidat."],
      },
      {
        heading: "Faut-il choisir une formule combinée ?",
        paragraphs: ["Une formule combinée peut être pertinente lorsqu’un projet professionnel nécessite plusieurs catégories. Comparez le coût, l’ordre de préparation et les conditions applicables avant de décider."],
      },
    ],
    takeaway: "Permis B pour le véhicule léger, C pour le poids lourd et D pour le transport de personnes : votre objectif professionnel ou personnel doit guider le choix.",
    source: { label: "Catégories de permis — Sénégal Services", url: "https://backend.senegalservices.sn/demarches/transports/permis-de-conduire-et-papiers-des-vehicules" },
  },
  {
    slug: "preparer-examen-code-route",
    category: "Code de la route",
    title: "Comment bien préparer l’examen du Code de la route ?",
    seoTitle: "Préparer l’examen du Code de la route",
    excerpt: "Une méthode simple pour réviser régulièrement, comprendre ses erreurs et arriver plus serein le jour de l’épreuve.",
    intro: "Accumuler des séries de questions ne suffit pas toujours. Pour progresser, il faut identifier les thèmes faibles, comprendre chaque erreur et réviser avec une fréquence régulière.",
    readingTime: "7 min de lecture",
    image: "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Une route avec des panneaux de signalisation",
    sections: [
      {
        heading: "Réviser par thèmes, pas seulement par séries",
        paragraphs: ["Alternez les séries complètes avec des séances ciblées : signalisation, priorités, intersections, vitesse, dépassement, arrêt et stationnement, comportement du conducteur et mécanique de base."],
      },
      {
        heading: "Tenir un carnet d’erreurs",
        paragraphs: ["Après chaque entraînement, notez la règle que vous n’avez pas comprise. Reformulez-la avec vos propres mots et ajoutez un exemple concret. Ce travail est plus efficace que de mémoriser uniquement la bonne réponse."],
      },
      {
        heading: "Observer la situation entière",
        paragraphs: ["Lors d’une question, regardez d’abord les panneaux, le marquage, les usagers et les dangers possibles. Ne répondez pas trop vite à partir d’un seul détail de l’image."],
      },
      {
        heading: "Préparer les derniers jours",
        paragraphs: ["Gardez un rythme stable, dormez correctement et évitez une révision excessive la veille. Le jour de l’épreuve, lisez chaque formulation jusqu’au bout avant de valider."],
        bullets: ["Une courte révision chaque jour", "Un test complet à intervalles réguliers", "Une reprise systématique des erreurs", "Une séance plus légère la veille"],
      },
    ],
    takeaway: "La progression vient de la compréhension des erreurs. Une révision courte, régulière et ciblée vaut mieux qu’une longue séance occasionnelle.",
  },
  {
    slug: "erreurs-debutants-conduite",
    category: "Conduite",
    title: "Les erreurs fréquentes quand on commence la conduite",
    seoTitle: "Erreurs fréquentes des conducteurs débutants",
    excerpt: "Regard, allure, placement et stress : cinq habitudes à corriger tôt pour progresser plus régulièrement.",
    intro: "Les premières séances demandent de coordonner beaucoup d’informations en même temps. Les erreurs sont normales, mais certaines reviennent souvent et peuvent être corrigées avec des repères simples.",
    readingTime: "6 min de lecture",
    image: "https://images.pexels.com/photos/9518018/pexels-photo-9518018.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Un moniteur explique la conduite à un élève dans une voiture",
    sections: [
      {
        heading: "Regarder trop près devant le véhicule",
        paragraphs: ["Un regard trop proche rend les trajectoires irrégulières. Portez le regard plus loin, puis revenez régulièrement vers les rétroviseurs et les zones de danger."],
      },
      {
        heading: "Oublier l’environnement avant une action",
        paragraphs: ["Avant de tourner, ralentir ou changer de position, prenez l’habitude de vérifier la signalisation, les rétroviseurs et les angles morts. Une bonne manœuvre commence par une bonne observation."],
      },
      {
        heading: "Conduire trop vite… ou trop lentement",
        paragraphs: ["L’allure doit rester adaptée à la visibilité, à la circulation et à la situation. Une vitesse trop faible peut aussi gêner ou créer de l’hésitation si elle n’est pas justifiée."],
      },
      {
        heading: "Laisser le stress prendre toutes les décisions",
        paragraphs: ["Respirez, verbalisez ce que vous voyez et traitez une information à la fois. Le rôle du moniteur est de sécuriser la séance et de transformer chaque difficulté en exercice précis."],
      },
    ],
    takeaway: "Regardez loin, observez avant d’agir et acceptez de corriger une difficulté à la fois. La régularité compte davantage que la perfection immédiate.",
  },
  {
    slug: "choisir-auto-ecole-ouakam",
    category: "Vie de l’auto-école",
    title: "Comment choisir une auto-école à Ouakam ?",
    seoTitle: "Choisir une auto-école à Ouakam, Dakar",
    excerpt: "Tarifs, proximité, pédagogie et organisation : les questions concrètes à poser avant de vous inscrire.",
    intro: "La bonne auto-école n’est pas seulement celle qui affiche un prix. Elle doit aussi expliquer clairement le parcours, rester joignable et proposer une organisation compatible avec vos disponibilités.",
    readingTime: "5 min de lecture",
    image: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Une voiture stationnée dans une rue urbaine",
    sections: [
      {
        heading: "Comparer ce qui est réellement inclus",
        paragraphs: ["Deux tarifs ne sont comparables que si les prestations sont les mêmes. Demandez les frais séparés, les modalités de paiement et les conditions en cas d’absence ou de reprise."],
      },
      {
        heading: "Évaluer la qualité des explications",
        paragraphs: ["Dès le premier contact, observez si vos questions reçoivent des réponses simples et précises. Un bon accompagnement administratif annonce souvent une relation pédagogique plus sereine."],
      },
      {
        heading: "Vérifier la proximité et les horaires",
        paragraphs: ["Une auto-école facile d’accès réduit les retards et les séances manquées. À Cité Avion, Auto école Ya Ngoné reçoit les candidats de Ouakam et des quartiers voisins, avec un contact direct par téléphone et WhatsApp."],
      },
      {
        heading: "Rencontrer le moniteur",
        paragraphs: ["La patience, la ponctualité et la manière de corriger sont essentielles. Un échange avec le moniteur permet de vérifier si sa pédagogie vous convient avant de commencer."],
      },
    ],
    takeaway: "Choisissez sur des critères concrets : clarté du coût, disponibilité, proximité, qualité du suivi et confiance avec le moniteur.",
  },
] as const;

export const featuredArticles = editorialArticles.slice(0, 3);

export const editorialCategories = ["Tous", "Démarches", "Permis", "Code de la route", "Conduite", "Vie de l’auto-école"] as const;

export function getArticle(slug: string) {
  return editorialArticles.find((article) => article.slug === slug);
}
