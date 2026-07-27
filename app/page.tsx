"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Camera,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  FileText,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Minus,
  MousePointerClick,
  Phone,
  Plus,
  Quote,
  X,
} from "lucide-react";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { siteContent } from "./site-content";
import { featuredArticles } from "./editorial-content";

const whatsappNumber = "221782933733";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState<"resident" | "cedeao" | "hors-cedeao">("resident");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handlePreRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const permit = String(form.get("permit") || "");
    const candidateProfile = String(form.get("profile") || "");
    const message = `Bonjour Auto école Ya Ngoné, je souhaite me préinscrire.\n\nNom : ${name}\nTéléphone : ${phone}\nFormule : ${permit}\nProfil : ${candidateProfile}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const extraDocuments =
    profile === "cedeao"
      ? ["Photocopie légalisée de la carte consulaire"]
      : profile === "hors-cedeao"
        ? ["Récépissé de dépôt d’une demande d’autorisation d’établissement"]
        : [];

  return (
    <main id="main-content">
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <header className="site-header">
        <div className="utility-bar">
          <div className="container utility-inner">
            <span><MapPin aria-hidden="true" /> Cité Avion, Ouakam — Dakar</span>
            <div>
              <a href="tel:+221782933733"><Phone aria-hidden="true" /> +221 78 293 37 33</a>
              <a href="https://wa.me/221782933733" target="_blank" rel="noreferrer"><WhatsAppIcon /> +221 78 293 37 33</a>
            </div>
          </div>
        </div>
        <nav className="container main-nav" aria-label="Navigation principale">
          <a className="brand" href="#accueil" onClick={closeMenu} aria-label="Auto école Ya Ngoné, accueil">
            <img
              src="/images/logo/svg/logo-horizontal.svg"
              alt="Auto école Ya Ngoné"
              className="brand-logo"
              width={220}
              height={60}
            />
          </a>
          <button
            className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="nav-cta" href="#preinscription" onClick={closeMenu}>Se préinscrire</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Auto-école à Ouakam</p>
            <h1>Votre permis, avec un accompagnement de proximité.</h1>
            <p className="hero-lead">Préparez les permis B, C et D au cœur de Ouakam, avec des informations claires à chaque étape.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#preinscription">Se préinscrire <ArrowRight aria-hidden="true" /></a>
              <a className="button button-secondary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><WhatsAppIcon /> Écrire sur WhatsApp</a>
            </div>
            <p className="microcopy">Une demande d’information ne vous engage à aucun paiement.</p>
          </div>
          <div className="hero-visual" aria-label="Illustration d’une leçon de conduite">
            <div className="sun-shape" />
            <img src="/images/hero-driving.png" alt="Une candidate en leçon de conduite accompagnée par un moniteur" />
            <div className="hero-badge">
              <span>Formations</span>
              <strong>Permis B · C · D</strong>
            </div>
          </div>
        </div>
        <div className="container trust-strip" aria-label="Points essentiels">
          <article><span className="trust-icon"><CarFront aria-hidden="true" /></span><div><small>Formations</small><strong>Permis B, C et D</strong><p>Quatre formules disponibles</p></div></article>
          <article><span className="trust-icon"><FileCheck2 aria-hidden="true" /></span><div><small>Inscription</small><strong>Un dossier bien préparé</strong><p>Toutes les pièces expliquées</p></div></article>
          <article><span className="trust-icon"><MapPin aria-hidden="true" /></span><div><small>Proximité</small><strong>Cité Avion, Ouakam</strong><p>Un contact direct à Dakar</p></div></article>
        </div>
      </section>

      <section className="section intro-section" id="apropos">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">Bienvenue chez Ya Ngoné</p>
            <h2>Un parcours plus simple, dès votre première question.</h2>
          </div>
          <div className="intro-copy">
            <p>Auto école Ya Ngoné accompagne les candidats à Ouakam dans la préparation des permis B, C et D. Chaque parcours commence par un échange clair sur votre projet, votre disponibilité et les démarches à effectuer.</p>
            <p>De la préparation du dossier aux séances de conduite, vous bénéficiez d’un suivi de proximité et d’un contact direct avec l’auto-école.</p>
          </div>
        </div>
        <div className="container benefit-grid">
          <figure className="benefit-media">
            <img
              src="https://images.pexels.com/photos/9518018/pexels-photo-9518018.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Un accompagnateur explique les commandes d’un véhicule à un jeune conducteur"
            />
            <figcaption><strong>Pédagogie & Présence Humaine</strong><span>Des explications simples et un accompagnement rassurant à chaque étape.</span></figcaption>
          </figure>
          <div className="benefit-list">
          {siteContent.benefits.map((benefit, index) => (
            <article className="benefit-card" key={benefit.title}>
              <span
                className="benefit-card-bg"
                style={{ backgroundImage: `url(${benefit.image})` }}
                aria-hidden="true"
              />
              <span className="card-number">0{index + 1}</span>
              <div><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="section formations-section" id="formations">
        <div className="container section-heading split-heading">
          <div><p className="eyebrow">Nos formations</p><h2>Choisissez la catégorie qui correspond à votre projet.</h2></div>
          <p>Les conditions d’accès et le contenu précis de chaque formule sont confirmés avec l’auto-école avant l’inscription.</p>
        </div>
        <div className="container permit-grid">
          {siteContent.permits.map((permit) => (
            <article className="permit-card" key={permit.code}>
              <div className="permit-header-photo">
                <img src={permit.image} alt={permit.title} />
                <span className="permit-code">{permit.code}</span>
              </div>
              <div className="permit-body">
                <p className="permit-kicker">{permit.label}</p>
                <h3>{permit.title}</h3>
                <p>{permit.description}</p>
                <a href="#tarifs">En savoir plus <ArrowRight aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section instructor-section" id="moniteur">
        <div className="container instructor-grid">
          <div className="instructor-gallery">
            <figure className="instructor-main-photo">
              <img src="https://images.pexels.com/photos/9518021/pexels-photo-9518021.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Un moniteur accompagne un élève pendant une leçon de conduite" />
            </figure>
            <figure className="instructor-small-photo">
              <img src="https://images.pexels.com/photos/6817037/pexels-photo-6817037.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Une candidate échange avec son accompagnateur dans un véhicule" />
            </figure>
            <div className="experience-card"><span>Votre moniteur</span><strong>Maodo NDIAYE</strong><p>Écoute · Patience · Progression</p></div>
          </div>
          <div className="instructor-copy">
            <p className="eyebrow">Votre accompagnement</p>
            <h2>Apprendre avec Maodo NDIAYE, étape par étape.</h2>
            <p className="instructor-lead">Moniteur principal de l’Auto école Ya Ngoné, Maodo NDIAYE accompagne chaque candidat avec une pédagogie simple, calme et adaptée à son niveau.</p>
            <p>Son objectif est de vous aider à comprendre les bons réflexes, à gagner en assurance au volant et à avancer régulièrement jusqu’à l’examen. Les séances alternent explications pratiques, correction des difficultés et mise en situation sur route.</p>
            <div className="instructor-points"><span>Explications accessibles</span><span>Suivi personnalisé</span><span>Progression à votre rythme</span></div>
            <a className="button button-primary" href="#preinscription">Échanger avec l’auto-école <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="section documents-section" id="inscription">
        <div className="container documents-grid">
          <div className="documents-intro">
            <p className="eyebrow">Préparer son dossier</p>
            <h2>Les pièces essentielles, selon votre situation.</h2>
            <p>Sélectionnez votre profil pour afficher la liste adaptée. La photo utilisée pour la visite médicale s’ajoute aux trois photos du dossier : prévoyez donc quatre photos d’identité au total.</p>
            <div className="photo-callout"><span className="photo-icon"><Camera aria-hidden="true" /></span><div><strong>4 photos d’identité</strong><span>3 pour le dossier + 1 pour la visite médicale</span></div></div>
          </div>
          <div className="documents-panel">
            <div className="profile-tabs" role="tablist" aria-label="Profil du candidat">
              <button role="tab" aria-selected={profile === "resident"} onClick={() => setProfile("resident")}>Sénégalais</button>
              <button role="tab" aria-selected={profile === "cedeao"} onClick={() => setProfile("cedeao")}>Étranger CEDEAO</button>
              <button role="tab" aria-selected={profile === "hors-cedeao"} onClick={() => setProfile("hors-cedeao")}>Hors CEDEAO</button>
            </div>
            <ul className="document-list">
              {siteContent.baseDocuments.map((document) => <li key={document}><span><Check aria-hidden="true" /></span>{document}</li>)}
              {extraDocuments.map((document) => <li className="extra-document" key={document}><span><Plus aria-hidden="true" /></span>{document}</li>)}
            </ul>
            <p className="panel-note">Les exigences administratives peuvent évoluer. L’auto-école confirme la liste avant le dépôt définitif.</p>
          </div>
        </div>
      </section>

      <section className="section steps-section" id="demarche">
        <div className="container section-heading centered-heading">
          <p className="eyebrow">Comment commencer ?</p>
          <h2>Quatre étapes pour lancer votre démarche.</h2>
        </div>
        <div className="container steps-grid">
          {siteContent.steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <div className="step-header">
                <span className="step-number">0{index + 1}</span>
                <div className="step-icon">
                  {index === 0 && <MousePointerClick aria-hidden="true" />}
                  {index === 1 && <MessageSquare aria-hidden="true" />}
                  {index === 2 && <FileText aria-hidden="true" />}
                  {index === 3 && <BadgeCheck aria-hidden="true" />}
                </div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing-section" id="tarifs">
        <div className="container section-heading centered-heading">
          <p className="eyebrow">Nos tarifs</p>
          <h2>Des formules présentées clairement.</h2>
          <p>Choisissez une première option, puis contactez l’auto-école pour confirmer les conditions et les éléments inclus.</p>
        </div>
        <div className="container pricing-grid">
          {siteContent.prices.map((price) => (
            <article className={`price-card ${price.featured ? "featured" : ""}`} key={price.name}>
              {price.featured && <span className="featured-label">Formule combinée</span>}
              <p className="price-name">{price.name}</p>
              <p className="price-value">{price.amount}<span> F CFA</span></p>
              <p>{price.note}</p>
              {price.installment && <span className="installment">Paiement en 2 fois</span>}
              <a className="text-link" href="#preinscription">Choisir cette formule <ArrowRight aria-hidden="true" /></a>
            </article>
          ))}
        </div>
        <div className="container pricing-note">
          <strong>À prévoir séparément</strong>
          <p>Quittance du dossier : 10 000 F CFA sur SenTimbre · Visite médicale : 2 000 F CFA · Enrôlement et retrait du permis à la charge du candidat.</p>
        </div>
      </section>

      <section className="section testimonials-section" id="temoignages">
        <div className="container section-heading split-heading testimonial-heading">
          <div><p className="eyebrow">Paroles de candidats</p><h2>Ils ont avancé avec confiance.</h2></div>
          <p>Des parcours différents, avec le même besoin : être écouté, bien guidé et progresser sereinement.</p>
        </div>
        <div className="container testimonial-grid">
          {siteContent.testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <span className="quote-icon"><Quote aria-hidden="true" /></span><p>« {testimonial.quote} »</p>
              <div><span className="testimonial-avatar">{testimonial.name.charAt(0)}</span><span><strong>{testimonial.name}</strong><small>{testimonial.project}</small></span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div className="faq-intro">
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Les réponses avant de vous déplacer.</h2>
            <p>Vous ne trouvez pas votre réponse ? Écrivez directement sur WhatsApp.</p>
            <a className="button button-secondary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><WhatsAppIcon /> Poser une question</a>
          </div>
          <div className="accordion">
            {siteContent.faq.map((item, index) => (
              <article className={openFaq === index ? "is-open" : ""} key={item.question}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  <span>{item.question}</span><b>{openFaq === index ? <Minus aria-hidden="true" /> : <Plus aria-hidden="true" />}</b>
                </button>
                <div className="accordion-answer"><p>{item.answer}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-editorial-section" aria-labelledby="home-editorial-title">
        <div className="container editorial-heading-row">
          <div>
            <p className="eyebrow">Conseils & actualités</p>
            <h2 id="home-editorial-title">Des réponses utiles avant de prendre la route.</h2>
          </div>
          <div className="editorial-heading-aside">
            <p>Permis, dossier, Code de la route et conduite : retrouvez des guides simples, pensés pour les candidats au Sénégal.</p>
            <Link className="button button-secondary" href="/conseils">Voir tous les conseils <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="container home-article-grid">
          {featuredArticles.map((article) => (
            <article className="home-article-card" key={article.slug}>
              <Link className="home-article-image" href={`/conseils/${article.slug}`} aria-label={`Lire : ${article.title}`}>
                <img src={article.image} alt={article.imageAlt} loading="lazy" />
                <span>{article.category}</span>
              </Link>
              <div className="home-article-copy">
                <p>{article.readingTime}</p>
                <h3><Link href={`/conseils/${article.slug}`}>{article.title}</Link></h3>
                <p>{article.excerpt}</p>
                <Link className="article-btn" href={`/conseils/${article.slug}`}>Lire l’article <ArrowRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="preinscription">
        <div className="container contact-shell">
          <div className="contact-copy">
            <p className="eyebrow">Préinscription</p>
            <h2>Parlons de votre projet de permis.</h2>
            <p>Remplissez ces quelques informations. Votre demande sera préparée puis ouverte dans WhatsApp afin que vous puissiez l’envoyer directement.</p>
            <div className="contact-details">
              <a href="https://wa.me/221782933733" target="_blank" rel="noreferrer"><span className="contact-icon whatsapp-icon"><WhatsAppIcon /></span><span><small>WhatsApp & Téléphone</small>+221 78 293 37 33</span></a>
              <a href="mailto:mawdondiaye432@gmail.com"><span className="contact-icon mail-icon"><Mail aria-hidden="true" /></span><span><small>E-mail</small>mawdondiaye432@gmail.com</span></a>
              <span><span className="contact-icon location-icon"><MapPin aria-hidden="true" /></span><span><small>Adresse</small>Cité Avion, Ouakam, Dakar</span></span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handlePreRegistration}>
            <div className="field-row">
              <label>Nom complet<input name="name" autoComplete="name" placeholder="Votre nom" required /></label>
              <label>Téléphone<input name="phone" inputMode="tel" autoComplete="tel" placeholder="77 000 00 00" required /></label>
            </div>
            <label>Formule souhaitée
              <span className="select-shell">
                <select name="permit" defaultValue="" required>
                  <option value="" disabled>Choisir une formule</option>
                  {siteContent.prices.map((price) => <option key={price.name}>{price.name} — {price.amount} F CFA</option>)}
                </select>
                <ChevronDown aria-hidden="true" />
              </span>
            </label>
            <label>Votre situation
              <span className="select-shell">
                <select name="profile" defaultValue="Candidat sénégalais" required>
                  <option>Candidat sénégalais</option>
                  <option>Étranger CEDEAO</option>
                  <option>Étranger hors CEDEAO</option>
                </select>
                <ChevronDown aria-hidden="true" />
              </span>
            </label>
            <button className="button button-primary form-submit" type="submit">Continuer sur WhatsApp <ArrowRight aria-hidden="true" /></button>
            <p className="form-note">Votre message ne sera envoyé qu’après votre validation dans WhatsApp.</p>
          </form>
        </div>
      </section>

      <section className="section location-section" id="contact">
        <div className="container location-grid">
          <div className="location-copy">
            <p className="eyebrow">Nous trouver</p>
            <h2>À Cité Avion, au cœur de Ouakam.</h2>
            <p>Auto école Ya Ngoné vous accueille à Cité Avion, Ouakam, Dakar. Avant votre première visite, vous pouvez nous écrire sur WhatsApp pour recevoir un repère précis et confirmer votre venue.</p>
            <div className="address-card"><span className="location-icon"><MapPin aria-hidden="true" /></span><div><small>Adresse</small><strong>Cité Avion, Ouakam</strong><span>Dakar, Sénégal</span></div></div>
            <div className="schedule-card">
              <div className="schedule-heading"><Clock3 aria-hidden="true" /><strong>Horaires & Organisation</strong></div>
              <div className="schedule-group">
                <div className="schedule-module-title"><BookOpen aria-hidden="true" /><span>Cours Théoriques (Code de la route)</span></div>
                <div className="schedule-row"><span>Lundi, Mardi, Jeudi, Vendredi</span><strong>08h00 – 12h00 & 15h30 – 19h00</strong></div>
              </div>
              <div className="schedule-group">
                <div className="schedule-module-title"><CarFront aria-hidden="true" /><span>Conduite Pratique</span></div>
                <div className="schedule-row"><span>Mercredi & Samedi</span><strong>Sur planning / rendez-vous</strong></div>
              </div>
              <div className="schedule-row schedule-closed"><span>Dimanche</span><strong>Fermé</strong></div>
            </div>
            <a className="button button-secondary" href="https://www.google.com/maps/search/?api=1&query=Cit%C3%A9+Avion+Ouakam+Dakar" target="_blank" rel="noreferrer">Ouvrir l’itinéraire <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="map-shell">
            <iframe title="Carte de Cité Avion à Ouakam, Dakar" src="https://www.google.com/maps?q=Cit%C3%A9%20Avion%2C%20Ouakam%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="map-caption"><MapPin aria-hidden="true" /><div><strong>Auto école Ya Ngoné</strong><span>Cité Avion · Ouakam · Dakar</span></div></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-cta">
          <div><span>Besoin d’une précision ?</span><strong>Votre projet de permis commence par une simple discussion.</strong></div>
          <div className="footer-cta-actions">
            <a href="https://wa.me/221782933733" target="_blank" rel="noreferrer"><WhatsAppIcon /> Écrire sur WhatsApp</a>
            <a href="tel:+221782933733"><Phone aria-hidden="true" /> Appeler maintenant</a>
          </div>
        </div>
        <div className="container footer-grid">
          <div className="footer-about">
            <a className="brand footer-brand" href="#accueil" aria-label="Auto école Ya Ngoné, accueil">
              <img
                src="/images/logo/svg/logo-horizontal-inverse.svg"
                alt="Auto école Ya Ngoné"
                className="brand-logo footer-logo"
                width={220}
                height={60}
              />
            </a>
            <p>Une auto-école de proximité pour préparer les permis B, C et D à Cité Avion, Ouakam.</p>
            <span className="footer-address"><MapPin aria-hidden="true" /> Cité Avion, Ouakam — Dakar</span>
          </div>
          <div>
            <strong>Formations & Tarifs</strong>
            <a href="#formations">Permis B (Véhicule léger)</a>
            <a href="#formations">Permis C (Transport)</a>
            <a href="#formations">Permis D (Transport de personnes)</a>
            <a href="#tarifs">Grille des tarifs</a>
          </div>
          <div>
            <strong>Informations & Démarches</strong>
            <a href="#inscription">Pièces à fournir</a>
            <a href="#preinscription">Préinscription en ligne</a>
            <a href="#faq">Questions fréquentes</a>
            <Link href="/conseils">Conseils & actualités</Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Auto école Ya Ngoné. Tous droits réservés.</span>
          <span>Permis B · C · D — Ouakam, Dakar</span>
        </div>
      </footer>
    </main>
  );
}
