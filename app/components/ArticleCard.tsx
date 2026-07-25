import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { EditorialArticle } from "../editorial-content";

export function ArticleCard({ article }: { article: EditorialArticle }) {
  return (
    <article className="directory-article-card">
      <Link className="directory-article-image" href={`/conseils/${article.slug}`} aria-label={`Lire : ${article.title}`}>
        <img src={article.image} alt={article.imageAlt} loading="lazy" />
        <span>{article.category}</span>
      </Link>
      <div className="directory-article-copy">
        <p className="article-meta">{article.readingTime}</p>
        <h2><Link href={`/conseils/${article.slug}`}>{article.title}</Link></h2>
        <p>{article.excerpt}</p>
        <Link className="article-btn" href={`/conseils/${article.slug}`}>Lire l’article <ArrowRight aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
