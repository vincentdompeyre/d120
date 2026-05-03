import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/d120-logo.png";
import vincent from "@/assets/vincent.jpg";

const CAL_URL = "https://cal.com/vincent-dompeyre/rdv-de-decouverte";

export const Route = createFileRoute("/")({
  component: Index,
});

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="D120" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-secondary/80">
          <a href="#enjeux" className="hover:text-primary transition-colors">Enjeux</a>
          <a href="#vision" className="hover:text-primary transition-colors">Vision</a>
          <a href="#qui" className="hover:text-primary transition-colors">À propos</a>
        </nav>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          Prendre rendez-vous
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-32 lg:pt-36 lg:pb-44">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-8 font-bold">
            <span className="h-px w-8 bg-primary" />
            Pilotage de studio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] text-secondary">
            D120 : le pilotage opérationnel et financier conçu pour les{" "}
            <span className="text-primary">studios de production audiovisuelle</span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-secondary/70 max-w-2xl leading-relaxed font-normal">
            Nous co-construisons avec vous un outil sur-mesure, adapté à vos process et à votre équipe.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
            >
              Prendre un rendez-vous
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="py-16 border-y border-border/60 bg-accent/20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="text-xs uppercase tracking-[0.2em] text-primary shrink-0 font-bold">
            Déjà déployé
          </div>
          <p className="text-xl md:text-2xl font-display font-light text-secondary leading-snug">
            Dans un studio de doublage de <span className="font-medium">50 personnes</span> et{" "}
            <span className="font-medium">5 M€ de chiffre d'affaires</span> en région lyonnaise.
          </p>
        </div>
      </div>
    </section>
  );
}

const pains = [
  {
    n: "01",
    title: "La planification de vos productions mobilise vos chargés de prod. Au détriment du pilotage.",
    body: "D120 centralise la vision de vos ressources : studios, matériel, intervenants humains et IA. Pour que votre équipe arbitre vite, sans aller-retour.",
  },
  {
    n: "02",
    title: "Vous savez que certains projets vous coûtent plus qu'ils ne rapportent. Mais vous ne savez pas lesquels.",
    body: "D120 calcule la marge nette de chaque projet en temps réel : coûts humains, coûts fixes, rémunérations. Et prépare l'intégration native des coûts de génération IA pour piloter la rentabilité de demain.",
  },
  {
    n: "03",
    title: "Humain ou IA : vous prenez encore cette décision à l'instinct.",
    body: "D120 modélise les coûts et la marge de chaque type de production : sessions studio classiques, génération IA, ou hybride — pour que vous arbitriez sur des chiffres, pas sur des impressions.",
  },
];

function Pains() {
  return (
    <section id="enjeux" className="py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-6 font-bold">Les enjeux</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Trois angles morts qui freinent les studios aujourd'hui.
          </h2>
        </div>

        <div className="space-y-px">
          {pains.map((p, i) => (
            <article
              key={p.n}
              className="group grid md:grid-cols-12 gap-8 py-12 lg:py-16 border-t border-border/60 last:border-b transition-colors hover:bg-accent/15"
            >
              <div className="md:col-span-2">
                <div className="text-sm font-display font-medium text-primary tracking-wider">{p.n}</div>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-xl md:text-2xl font-medium leading-snug">{p.title}</h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-secondary/70 leading-relaxed font-normal">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="py-28 lg:py-40 bg-secondary text-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-8 font-bold">Vision</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-background">
            Vers une production pilotée par l'IA.
          </h2>
          <p className="mt-10 text-lg md:text-xl text-background/75 leading-relaxed font-normal">
            Les plateformes de génération IA transforment la production audiovisuelle. D120 prépare dès aujourd'hui les outils qui permettront demain de lire un brief client, estimer un coût IA maximal, et créer un projet automatiquement.
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="qui" className="py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-6 font-bold">À propos</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">Qui est D120</h2>
          </div>
          <div className="md:col-span-8 md:pt-2">
            <div className="space-y-6 text-lg text-secondary/80 leading-relaxed font-normal">
              <p>
                Vincent a un TDAH. Depuis toujours, il ne supporte pas l'information éparpillée. Ingénieur de formation, commercial pendant 6 ans, il a développé par nécessité une obsession : <span className="text-secondary font-normal">centraliser, structurer, rendre lisible ce qui ne l'est pas.</span>
              </p>
              <p>
                En découvrant la production audiovisuelle, il a trouvé son terrain : un secteur exigeant, en pleine mutation avec l'IA, et encore très dépendant d'Excel pour piloter des projets complexes.
              </p>
              <p>
                D120 est né de cette rencontre, entre une méthode et un métier qui en avait besoin.
              </p>
              <div className="pt-8">
                <img
                  src={vincent}
                  alt="Vincent Dompeyre"
                  className="h-32 w-32 rounded-full object-cover border-4 border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-24 lg:py-36 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight">
          Parlons de votre studio.
        </h2>
        <div className="mt-12">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 text-base font-medium text-background transition-all hover:bg-secondary/90 hover:shadow-2xl"
          >
            Prendre un rendez-vous
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary/60">
        <div>
          <span className="font-display font-medium text-secondary">D120</span> — <a href="mailto:vincent@d120.fr" className="hover:text-primary transition-colors">vincent@d120.fr</a>
        </div>
        <div>© {new Date().getFullYear()} D120. Tous droits réservés.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Proof />
        <Pains />
        <Vision />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
