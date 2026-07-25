import Link from "next/link";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function EditorialHeader() {
  return (
    <header className="site-header editorial-site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Conseils pratiques pour les candidats au permis</span>
          <div><a href="tel:+221782933733"><Phone aria-hidden="true" /> 78 293 37 33</a><a href="https://wa.me/221782933733" target="_blank" rel="noreferrer"><WhatsAppIcon /> 78 293 37 33</a></div>
        </div>
      </div>
      <nav className="container main-nav" aria-label="Navigation principale">
        <Link className="brand" href="/" aria-label="Auto école Ya Ngoné, accueil">
          <img
            src="/images/logo/svg/logo-horizontal.svg"
            alt="Auto école Ya Ngoné"
            className="brand-logo"
            width={220}
            height={60}
          />
        </Link>
        <div className="editorial-desktop-nav">
          <Link href="/">Accueil</Link>
          <Link href="/#formations">Formations</Link>
          <Link href="/#tarifs">Tarifs</Link>
          <Link href="/#inscription">Dossier</Link>
          <Link href="/#apropos">À propos</Link>
          <Link className="is-current" href="/conseils">Conseils</Link>
          <Link className="nav-cta" href="/#preinscription">Se préinscrire</Link>
        </div>
        <details className="editorial-menu">
          <summary aria-label="Ouvrir le menu"><Menu aria-hidden="true" /></summary>
          <div><Link href="/">Accueil</Link><Link href="/#formations">Formations</Link><Link href="/#tarifs">Tarifs</Link><Link href="/#inscription">Dossier</Link><Link href="/#apropos">À propos</Link><Link href="/conseils">Conseils</Link><Link href="/#preinscription">Se préinscrire</Link></div>
        </details>
      </nav>
    </header>
  );
}

export function EditorialFooter() {
  return (
    <footer className="editorial-footer">
      <div className="container footer-cta">
        <div><span>Une question sur votre permis ?</span><strong>Échangez directement avec Auto école Ya Ngoné.</strong></div>
        <div className="footer-cta-actions"><a href="https://wa.me/221782933733" target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp</a><a href="tel:+221782933733"><Phone aria-hidden="true" /> Appeler</a></div>
      </div>
      <div className="container editorial-footer-grid">
        <div>
          <Link className="brand footer-brand" href="/" aria-label="Auto école Ya Ngoné, accueil">
            <img
              src="/images/logo/svg/logo-horizontal-inverse.svg"
              alt="Auto école Ya Ngoné"
              className="brand-logo footer-logo"
              width={220}
              height={60}
            />
          </Link>
          <p>Permis B, C et D à Cité Avion, Ouakam — Dakar.</p>
        </div>
        <div><strong>Découvrir</strong><Link href="/#formations">Nos formations</Link><Link href="/#tarifs">Les tarifs</Link><Link href="/#inscription">Le dossier</Link></div>
        <div><strong>S’informer</strong><Link href="/conseils">Tous les conseils</Link><Link href="/conseils?categorie=Démarches">Démarches</Link><Link href="/conseils?categorie=Code%20de%20la%20route">Code de la route</Link></div>
        <div><strong>Nous contacter</strong><a href="https://wa.me/221782933733">78 293 37 33</a><a href="mailto:mawdondiaye432@gmail.com">mawdondiaye432@gmail.com</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Auto école Ya Ngoné.</span><Link href="/">Retour au site principal <ArrowRight aria-hidden="true" /></Link></div>
    </footer>
  );
}
