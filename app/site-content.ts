export const siteContent = {
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "Formations", href: "#formations" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "Dossier", href: "#inscription" },
    { label: "À propos", href: "#apropos" },
    { label: "Conseils", href: "/conseils" },
  ],
  benefits: [
    { title: "Un suivi à taille humaine", description: "Échangez avec le même interlocuteur pour comprendre votre parcours et avancer à votre rythme.", image: "/images/benefit-1.png" },
    { title: "Des démarches plus simples", description: "Préparez votre dossier avec une liste claire des pièces adaptées à votre situation.", image: "/images/benefit-2.png" },
    { title: "Une auto-école proche de vous", description: "Retrouvez-nous à Cité Avion, Ouakam, et contactez-nous directement par téléphone ou WhatsApp.", image: "/images/benefit-3.png" },
  ],
  permits: [
    { code: "B", label: "Véhicule léger", title: "Permis B", description: "La catégorie destinée à la conduite des voitures particulières et véhicules légers." },
    { code: "C", label: "Véhicule de transport", title: "Permis C", description: "Une formation orientée vers la conduite des véhicules lourds, selon les conditions applicables." },
    { code: "D", label: "Transport de personnes", title: "Permis D", description: "La catégorie liée au transport de personnes, proposée dans une formule combinée avec le permis C." },
  ],
  prices: [
    { name: "Permis B", amount: "130 000", note: "Formule pour préparer la catégorie B.", featured: false, installment: false },
    { name: "Permis B + C", amount: "150 000", note: "Formule combinée pour les catégories B et C.", featured: true, installment: false },
    { name: "Permis C", amount: "80 000", note: "Formule pour préparer la catégorie C.", featured: false, installment: false },
    { name: "Permis C + D", amount: "100 000", note: "Formule combinée pour les catégories C et D.", featured: false, installment: true },
  ],
  baseDocuments: [
    "Photocopie légalisée de la carte d’identité ou du passeport",
    "Certificat de résidence délivré par la mairie",
    "Certificat de visite médicale (2 000 F CFA)",
    "Attestation du groupe sanguin",
    "Quatre photos d’identité au total",
    "Quittance de dossier de 10 000 F CFA achetée sur SenTimbre",
  ],
  steps: [
    { title: "Choisir une formule", description: "Repérez la catégorie et le tarif correspondant à votre projet." },
    { title: "Contacter l’auto-école", description: "Appelez, écrivez sur WhatsApp ou envoyez la demande de préinscription." },
    { title: "Préparer le dossier", description: "Réunissez les pièces communes et celles liées à votre situation." },
    { title: "Confirmer l’inscription", description: "Validez les conditions, le planning et le démarrage directement avec l’auto-école." },
  ],
  schedule: [
    { days: "Lundi – vendredi", hours: "08h00 – 19h00" },
    { days: "Samedi", hours: "08h00 – 18h00" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  testimonials: [
    { quote: "J’ai surtout apprécié la patience de Maodo NDIAYE. Les explications étaient simples et j’ai pu progresser sans me sentir pressée.", name: "Aminata D.", project: "Permis B" },
    { quote: "On m’a bien expliqué les pièces à fournir et les différentes étapes. J’ai gagné du temps pour préparer mon dossier.", name: "Ibrahima S.", project: "Permis C" },
    { quote: "Le contact est direct et les horaires de conduite ont été organisés selon mes disponibilités. Une expérience très rassurante.", name: "Marième F.", project: "Permis B" },
  ],
  faq: [
    { question: "Quelles catégories de permis sont proposées ?", answer: "Auto école Ya Ngoné propose les catégories B, C et D, avec des formules individuelles ou combinées." },
    { question: "Le paiement en plusieurs fois est-il possible ?", answer: "La formule Permis C + D à 100 000 F CFA est payable en deux fois. Pour les autres formules, contactez l’auto-école afin de connaître les possibilités applicables." },
    { question: "Faut-il trois ou quatre photos d’identité ?", answer: "Prévoyez quatre photos au total : trois photos pour le dossier et une photo supplémentaire destinée à la visite médicale." },
    { question: "Quels documents faut-il fournir lorsqu’on est étranger ?", answer: "Un ressortissant CEDEAO ajoute une photocopie légalisée de sa carte consulaire. Hors CEDEAO, il faut ajouter le récépissé de dépôt d’une demande d’autorisation d’établissement." },
    { question: "Quels frais ne sont pas compris dans les tarifs affichés ?", answer: "La quittance de dossier de 10 000 F CFA, la visite médicale de 2 000 F CFA, l’enrôlement et le retrait du permis sont indiqués séparément et restent à la charge du candidat." },
    { question: "Où se trouve l’auto-école ?", answer: "L’établissement se trouve à Cité Avion, dans le quartier de Ouakam à Dakar. La carte et les horaires sont disponibles dans la section « Nous trouver »." },
  ],
} as const;
