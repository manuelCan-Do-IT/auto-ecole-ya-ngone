"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticleTableOfContents({
  sections,
}: {
  sections: readonly { heading: string }[];
}) {
  const [activeId, setActiveId] = useState<string>("");

  const formattedSections = sections.map((section) => ({
    heading: section.heading,
    id: section.heading.toLocaleLowerCase("fr").replace(/[^a-z0-9]+/g, "-"),
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -60% 0px",
        threshold: 0,
      }
    );

    formattedSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="article-aside">
      <span>Dans ce guide</span>
      <ol>
        {formattedSections.map(({ heading, id }) => {
          const isActive = activeId === id;
          return (
            <li key={id} className={isActive ? "is-active" : ""}>
              <a
                href={`#${id}`}
                className={isActive ? "is-active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  const targetEl = document.getElementById(id);
                  if (targetEl) {
                    targetEl.scrollIntoView({ behavior: "smooth" });
                    setActiveId(id);
                    history.pushState(null, "", `#${id}`);
                  }
                }}
              >
                {heading}
              </a>
            </li>
          );
        })}
      </ol>
      <Link className="button button-primary" href="/#preinscription">
        Poser une question <ArrowRight aria-hidden="true" />
      </Link>
    </aside>
  );
}
