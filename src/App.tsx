import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import logo from "@/assets/d120-logo.png";
import clientLogo from "@/assets/client-logo.png";
import vincent from "@/assets/vincent.jpg";
import rentabilite from "@/assets/rentabilite.png";
import planning from "@/assets/planning.png";
import { Reveal, StaggerGroup, staggerItem } from "@/components/Reveal";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  { src: planning, alt: "Planning des sessions par studio et affectations par personne" },
  { src: rentabilite, alt: "Vue rentabilité projet — marge nette, coûts, ventilation des rémunérations" },
];

const CAL_URL = "https://cal.com/vincent-dompeyre/rdv-de-decouverte";

function Screenshots() {
  return (
    <section className="lg:py-28 bg-accent/20 overflow-hidden py-[40px]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Aperçu</div>
        </Reveal>
        <Reveal>
          <Carousel opts={{ loop: true, duration: 28 }} className="px-12">
            <CarouselContent>
              {screenshots.map((s) => (
                <CarouselItem key={s.src}>
                  <div className="rounded-2xl overflow-hidden border border-border/60 bg-background shadow-xl">
                    <img src={s.src} alt={s.alt} className="w-full h-auto block" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-50"
    />
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <motion.img
            src={logo}
            alt="D120 - Pilotage de studio"
            className="h-9 w-auto"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-secondary/80">
          <a href="#enjeux" className="hover:text-primary transition-colors">Enjeux</a>
          <a href="#methode" className="hover:text-primary transition-colors">Méthode</a>
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section id="top" className="relative lg:pt-36 lg:pb-44 overflow-hidden py-[40px]">
      <motion.div style={{ y }} className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-8 font-bold"
          >
            <span className="h-px w-8 bg-primary" />
            Pilotage de studio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] text-secondary"
          >
            D120 : le pilotage opérationnel et financier conçu pour les{" "}
            <span className="text-primary">studios de production audiovisuelle</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-lg md:text-xl text-secondary/70 max-w-2xl leading-relaxed font-medium"
          >
            Nous co-construisons avec vous un ERP sur-mesure, adapté à vos process et à votre équipe.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Prendre un rendez-vous
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Proof() {
  return (
    <section className="py-16 border-y border-border/60 bg-accent/20 overflow-hidden">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-6">
          <div className="text-xs uppercase tracking-[0.2em] text-primary shrink-0 font-bold self-start md:self-auto">
            Déjà déployé
          </div>
          <p className="text-xl md:text-2xl font-display font-light text-secondary leading-snug">
            Dans un studio de doublage de{" "}
            <span className="font-medium">
              <AnimatedNumber value={50} /> personnes
            </span>{" "}
            et{" "}
            <span className="font-medium">
              <AnimatedNumber value={5} /> M€ de chiffre d'affaires
            </span>{" "}
            en région lyonnaise.
          </p>
          <img
            src={clientLogo}
            alt="Logo anatole Studio"
            className="h-28 md:h-44 w-auto shrink-0 md:ml-auto"
          />
        </div>
      </Reveal>
    </section>
  );
}

const pains = [
  {
    n: "01",
    title: "La planification de vos productions mobilise vos chargés de prod. Au détriment du pilotage.",
    body: "Nous centralisons la vision de vos ressources — studios, intervenants humains et IA — pour que votre équipe arbitre vite, sans aller-retour. Vous maximisez l'occupation de vos studios, et donc votre chiffre d'affaires.",
  },
  {
    n: "02",
    title: "Vous savez que certains projets vous coûtent plus qu'ils ne rapportent. Mais vous ne savez pas lesquels.",
    body: "Nous calculons la marge nette de chaque projet en temps réel — coûts humains, coûts fixes, rémunérations. Et prépare l'intégration native des coûts de génération IA pour piloter et donc optimiser votre rentabilité de demain.",
  },
  {
    n: "03",
    title: "Humain ou IA : vous prenez encore cette décision à l'instinct.",
    body: "Nous modélisons les coûts et la marge de chaque type de production : sessions studio classiques, génération IA, ou hybride — pour que vous arbitriez sur des chiffres, pas sur des impressions.",
  },
];

function Pains() {
  return (
    <section id="enjeux" className="lg:py-28 overflow-hidden py-[60px]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-6 font-bold">Les enjeux</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Trois angles morts qui freinent les studios aujourd'hui.
          </h2>
        </Reveal>

        <StaggerGroup className="space-y-px" stagger={0.15}>
          {pains.map((p) => (
            <motion.article
              key={p.n}
              variants={staggerItem}
              className="group relative grid md:grid-cols-12 gap-8 py-12 lg:py-16 border-t border-border/60 last:border-b transition-colors hover:bg-accent/15"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <div className="md:col-span-2">
                <div className="text-sm font-display font-medium text-primary tracking-wider transition-transform duration-300 ease-out group-hover:translate-x-2">
                  {p.n}
                </div>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-xl md:text-2xl font-medium leading-snug">{p.title}</h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-secondary/70 leading-relaxed font-normal">{p.body}</p>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Audit",
    body: "Plusieurs ateliers sur site pour cartographier vos process et vos données business, créer une architecture système, et dessiner une expérience utilisateur.",
  },
  {
    n: "02",
    title: "Co-construction",
    body: "Nous développons avec vous, par itérations courtes, uniquement les modules dont votre équipe a besoin. Vous validez à chaque étape — pas de développement figé sur un cahier des charges qui aura changé six mois plus tard.",
  },
  {
    n: "03",
    title: "Déploiement & formation",
    body: "Mise en production progressive, formation de vos équipes, et ajustements pendant les premières semaines d'usage réel — jusqu'à ce que l'outil colle vraiment à votre façon de travailler.",
  },
];

function Process() {
  return (
    <section id="methode" className="lg:py-28 bg-accent/10 overflow-hidden py-[60px]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-6 font-bold">Méthode</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Comment nous construisons votre ERP.
          </h2>
        </Reveal>

        <div className="relative mb-10 md:mb-14">
          <motion.div
            aria-hidden
            className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="hidden md:grid grid-cols-3 gap-10 lg:gap-12 relative">
            {steps.map((s, i) => (
              <div key={s.n} className="flex justify-start py-4">
                <div className="relative h-3 w-3">
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-primary/50"
                    initial={{ scale: 1, opacity: 0.6 }}
                    whileInView={{ scale: 2.4, opacity: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                  />
                  <motion.span
                    className="relative block h-3 w-3 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <StaggerGroup className="grid md:grid-cols-3 gap-10 lg:gap-12" stagger={0.15}>
          {steps.map((s) => (
            <motion.div key={s.n} variants={staggerItem} className="group relative">
              <div className="text-sm font-display font-medium text-primary tracking-wider mb-4 transition-transform duration-300 ease-out group-hover:translate-x-1">
                {s.n}
              </div>
              <h3 className="text-xl md:text-2xl font-medium leading-snug mb-3 transition-colors duration-300 group-hover:text-primary">
                {s.title}
              </h3>
              <p className="text-secondary/70 leading-relaxed font-normal">{s.body}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="relative py-20 lg:py-28 bg-secondary text-background overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-primary mb-8 font-bold">Vision</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-background">
            Vers une production pilotée par l'IA.
          </h2>
          <p className="mt-10 text-lg md:text-xl text-background/75 leading-relaxed font-normal">
            Les plateformes de génération IA transforment la production audiovisuelle. D120 prépare dès aujourd'hui les outils qui permettront demain de lire un brief client, estimer un coût IA maximal, et créer un projet automatiquement.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="qui" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary mb-6 font-bold">À propos</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">Qui est D120</h2>
          </Reveal>
          <div className="md:col-span-8 md:pt-2">
            <StaggerGroup className="space-y-6 text-lg text-secondary/80 leading-relaxed font-normal" stagger={0.15}>
              <motion.p variants={staggerItem}>
                Vincent a un TDAH. Depuis toujours, il ne supporte pas l'information éparpillée. Ingénieur de formation, commercial pendant 6 ans, il a développé par nécessité une obsession : <span className="text-secondary font-normal">centraliser, structurer, rendre lisible ce qui ne l'est pas.</span>
              </motion.p>
              <motion.p variants={staggerItem}>
                En découvrant la production audiovisuelle, il a trouvé son terrain : un secteur exigeant, en pleine mutation avec l'IA, et encore très dépendant d'Excel pour piloter des projets complexes.
              </motion.p>
              <motion.p variants={staggerItem}>
                D120 est né de cette rencontre, entre une méthode et un métier qui en avait besoin.
              </motion.p>
              <motion.div variants={staggerItem} className="pt-8">
                <motion.img
                  src={vincent}
                  alt="Vincent Dompeyre"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="h-32 w-32 rounded-full object-cover border-4 border-primary"
                />
              </motion.div>
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-primary overflow-hidden">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-10 py-16 lg:py-24 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground leading-tight">
          Parlons de votre studio.
        </h2>
        <div className="mt-12">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 text-base font-medium text-background transition-all hover:bg-secondary/90 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Prendre un rendez-vous
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </Reveal>
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

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Proof />
        <Pains />
        <Process />
        <Screenshots />
        <Vision />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
