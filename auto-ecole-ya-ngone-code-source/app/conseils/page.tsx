import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { ArticleDirectory } from "../components/ArticleDirectory";
import { EditorialFooter, EditorialHeader } from "../components/EditorialChrome";

export const metadata: Metadata = {
  title: "Conseils permis et Code de la route",
  description: "Guides pratiques sur le permis de conduire, le dossier d’inscription, le Code de la route et la conduite à Dakar.",
  alternates: { canonical: "/conseils" },
  openGraph: {
    title: "Conseils & actualités | Auto école Ya Ngoné",
    description: "Des réponses simples pour préparer votre permis, votre dossier et l’examen du Code de la route au Sénégal.",
    url: "/conseils",
  },
};

export default function ConseilsPage() {
  return (
    <main className="editorial-page">
      <EditorialHeader />
      <section className="editorial-hero">
        <div className="container editorial-hero-grid">
          <div>
            <nav className="breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><span>Conseils & actualités</span></nav>
            <p className="eyebrow">Le guide Ya Ngoné</p>
            <h1>Comprendre le permis, avant de prendre la route.</h1>
            <p>Des explications claires sur les démarches, les catégories de permis, le Code de la route et les premières leçons de conduite.</p>
          </div>
          <aside className="editorial-hero-note">
            <span>À lire en premier</span>
            <strong>Vous préparez votre inscription ?</strong>
            <p>Commencez par notre guide du dossier pour réunir les bonnes pièces sans multiplier les déplacements.</p>
            <Link href="/conseils/pieces-dossier-permis-senegal">Voir la checklist <ArrowRight aria-hidden="true" /></Link>
          </aside>
        </div>
      </section>
      <section className="section article-directory-section">
        <div className="container">
          <div className="directory-intro"><div><p className="eyebrow">Tous nos conseils</p><h2>Choisissez le sujet qui vous concerne.</h2></div><p>Ces contenus donnent des repères pratiques. Pour confirmer une pièce, un tarif ou une condition administrative, contactez directement l’auto-école.</p></div>
          <Suspense fallback={<p>Chargement des conseils…</p>}><ArticleDirectory /></Suspense>
        </div>
      </section>
      <EditorialFooter />
    </main>
  );
}
