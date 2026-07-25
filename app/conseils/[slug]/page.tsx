import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ArticleCard } from "../../components/ArticleCard";
import { ArticleTableOfContents } from "../../components/ArticleTableOfContents";
import { EditorialFooter, EditorialHeader } from "../../components/EditorialChrome";
import { editorialArticles, getArticle } from "../../editorial-content";
import { siteUrl } from "../../site-url";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return editorialArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.excerpt,
    alternates: { canonical: `/conseils/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/conseils/${article.slug}`,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const otherArticles = editorialArticles.filter((item) => item.slug !== article.slug);
  const related = [
    ...otherArticles.filter((item) => item.category === article.category),
    ...otherArticles.filter((item) => item.category !== article.category),
  ].slice(0, 2);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: { "@type": "Organization", name: "Auto école Ya Ngoné" },
    publisher: { "@type": "Organization", name: "Auto école Ya Ngoné" },
    mainEntityOfPage: `${siteUrl}/conseils/${article.slug}`,
  };

  return (
    <main className="editorial-page article-page">
      <EditorialHeader />
      <article>
        <header
          className="article-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 17, 33, 0.86), rgba(11, 17, 33, 0.94)), url("${article.image}")`,
          }}
        >
          <div className="container article-hero-copy">
            <nav className="breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><Link href="/conseils">Conseils</Link><span>/</span><span>{article.category}</span></nav>
            <span className="article-category">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.intro}</p>
            <div className="article-byline"><strong>Auto école Ya Ngoné</strong><span>{article.readingTime}</span><span>Guide pratique</span></div>
          </div>
        </header>
        <div className="container article-layout">
          <ArticleTableOfContents sections={article.sections} />
          <div className="article-body">
            {article.sections.map((section) => {
              const id = section.heading.toLocaleLowerCase("fr").replace(/[^a-z0-9]+/g, "-");
              return <section id={id} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>;
            })}
            <aside className="article-takeaway"><span>L’essentiel à retenir</span><p>{article.takeaway}</p></aside>
            {article.source && <p className="article-source">Pour vérifier les informations administratives : <a href={article.source.url} target="_blank" rel="noreferrer">{article.source.label}</a>.</p>}
            <div className="article-next-step"><div><span>Besoin d’une réponse adaptée à votre situation ?</span><h2>Parlez-nous de votre projet de permis.</h2></div><Link className="button button-primary" href="/#preinscription">Se préinscrire <ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </div>
      </article>
      <section className="section related-articles-section">
        <div className="container"><div className="related-heading"><div><p className="eyebrow">Pour continuer</p><h2>Deux autres conseils utiles.</h2></div><Link className="text-link" href="/conseils">Voir tous les articles <ArrowRight aria-hidden="true" /></Link></div><div className="related-article-grid">{related.map((item) => <ArticleCard article={item} key={item.slug} />)}</div></div>
      </section>
      <EditorialFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  );
}
