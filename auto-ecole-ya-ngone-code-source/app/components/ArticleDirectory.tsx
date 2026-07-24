"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { editorialArticles, editorialCategories } from "../editorial-content";

export function ArticleDirectory() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categorie");
  const validInitial = editorialCategories.includes(initialCategory as (typeof editorialCategories)[number]) ? initialCategory! : "Tous";
  const [category, setCategory] = useState(validInitial);
  const [query, setQuery] = useState("");

  const results = useMemo(() => editorialArticles.filter((article) => {
    const matchesCategory = category === "Tous" || article.category === category;
    const haystack = `${article.title} ${article.excerpt} ${article.category}`.toLocaleLowerCase("fr");
    return matchesCategory && haystack.includes(query.trim().toLocaleLowerCase("fr"));
  }), [category, query]);

  return (
    <>
      <div className="editorial-controls" aria-label="Filtrer les conseils">
        <div className="category-tabs" role="group" aria-label="Catégories">
          {editorialCategories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="article-search"><span>Rechercher</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex. dossier, permis B…" /></label>
      </div>
      <div className="article-result-count" aria-live="polite">{results.length} {results.length > 1 ? "conseils trouvés" : "conseil trouvé"}</div>
      <div className="directory-article-grid">
        {results.map((article) => <ArticleCard article={article} key={article.slug} />)}
      </div>
      {results.length === 0 && <div className="empty-articles"><strong>Aucun conseil ne correspond à cette recherche.</strong><p>Essayez un autre mot ou affichez toutes les catégories.</p><button type="button" onClick={() => { setCategory("Tous"); setQuery(""); }}>Réinitialiser les filtres</button></div>}
    </>
  );
}
