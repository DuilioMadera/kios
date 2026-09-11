import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Cpu, GraduationCap, Landmark, School, University, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { KitGuide } from "@/components/kit-guide";
import { KiosWordmark } from "@/components/logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({ component: Home });

const PLATFORMS = [
  {
    id: "rover",
    level: "Nivel 1",
    name: "Rover Lunar 6WD",
    image: "/images/rover.jpg",
    alt: "Rover lunar de seis ruedas con acentos naranja sobre una mesa de taller",
    lead: "El producto ancla. Un robot que se mueve, evita obstáculos y enseña sistemas de verdad.",
    points: [
      "Tracción independiente en seis ruedas",
      "Sensores ultrasónicos y control por MCU",
      "Ideal para escuelas técnicas e institutos",
    ],
  },
  {
    id: "brazo",
    level: "Nivel 2",
    name: "Brazo robótico",
    image: "/images/brazo.jpg",
    alt: "Brazo robótico de varios ejes sosteniendo un cubo de madera",
    lead: "Para cursos de automatización: simular una línea de montaje, calcular movimientos y manejar servos.",
    points: [
      "Varios ejes y pinza de precisión",
      "Cinemática y control de servomotores",
      "Pensado para educación superior",
    ],
  },
  {
    id: "mcu",
    level: "Nivel 3",
    name: "Kit de microcontroladores",
    image: "/images/mcu.jpg",
    alt: "Kit de microcontroladores, sensores y protoboard sobre un banco de electrónica",
    lead: "El diálogo entre hardware y software: datos, sensores y protocolos IoT en el laboratorio.",
    points: [
      "Placa, sensores y módulos IoT",
      "Adquisición de datos y firmware",
      "Base de los laboratorios de ingeniería",
    ],
  },
];

const AUDIENCES = [
  {
    icon: School,
    title: "Escuelas técnicas",
    text: "Electromecánica, electrónica y computación. Plataformas robustas para sensores, motores y sistemas embebidos.",
  },
  {
    icon: Wrench,
    title: "Institutos superiores",
    text: "Formación técnica profesional, automatización y robótica industrial sin kits de juguete.",
  },
  {
    icon: GraduationCap,
    title: "Profesorados",
    text: "Capacitamos a quien enseña. Un docente formado multiplica la plataforma en decenas de aulas.",
  },
  {
    icon: University,
    title: "Universidades",
    text: "Mecatrónica, electrónica y mecánica: hardware accesible y profundamente programable.",
  },
];

function Home() {
  return (
    <div className="min-h-dvh bg-paper">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Saltar al contenido
      </a>
      <SiteHeader />

      <main id="contenido">
        <Hero />
        <Intro />
        <Platforms />
        <Guide />
        <Audience />
        <Training />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="bg-brand text-brand-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div>
          <KiosWordmark className="reveal text-[clamp(3.4rem,8vw,5.5rem)]" />
          <h1 className="reveal reveal-2 mt-8 max-w-xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight">
            Robots de verdad, para aprender de verdad.
          </h1>
          <p className="reveal reveal-3 mt-5 max-w-lg text-base leading-relaxed text-brand-fg/90 sm:text-lg">
            Llevamos robótica de ingeniería a escuelas técnicas, institutos y
            universidades de Argentina. Sin bloques de plástico: sensores,
            motores y código.
          </p>
          <div className="reveal reveal-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="invert">
              <a href="#plataformas">
                Ver plataformas
                <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-fg/35 text-brand-fg hover:border-brand-fg hover:bg-brand-fg/10"
            >
              <a href="#guia">Elegir un kit</a>
            </Button>
          </div>
        </div>
        <div className="reveal reveal-3 overflow-hidden rounded-xl shadow-card">
          <img
            src="/images/taller.jpg"
            alt="Instructor en un taller técnico junto a un rover y un brazo robótico"
            className="aspect-4/3 h-full w-full object-cover sm:aspect-video lg:aspect-4/3"
            width={1792}
            height={1008}
          />
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Qué hacemos</p>
        <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-tight text-ink">
          Acortamos la distancia entre el hardware serio y el aula.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          kios integra plataformas de robótica avanzada con la realidad de la
          educación técnica argentina: el currículo, el laboratorio y quien
          enseña. Arrancás simple. Profundizás cuando el grupo está listo.
        </p>
      </div>
      <ol className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          {
            n: "01",
            title: "Elegís la plataforma",
            text: "Rover, brazo o kit de microcontroladores. Según el año y lo que quieras enseñar.",
          },
          {
            n: "02",
            title: "Preparamos al docente",
            text: "Capacitación clara, con certificación. El aula arranca con confianza, no con un manual perdido.",
          },
          {
            n: "03",
            title: "El laboratorio queda",
            text: "Hardware duradero, pensado para años de uso institucional — no para una feria de ciencias.",
          },
        ].map((step) => (
          <li key={step.n} className="rounded-lg border border-line bg-surface p-6">
            <p className="font-display text-sm font-medium tabular-nums text-brand">{step.n}</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Platforms() {
  return (
    <section id="plataformas" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Plataformas</p>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-tight text-ink">
          Tres niveles. Un mismo lenguaje de ingeniería.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Empezá por el rover si querés un proyecto visible. Pasá al brazo para
          automatización. El kit MCU es el banco de trabajo de electrónica.
        </p>

        <div className="mt-12 grid gap-8">
          {PLATFORMS.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="grid overflow-hidden rounded-xl border border-line bg-paper md:grid-cols-2 md:items-stretch"
            >
              <div className={index % 2 === 1 ? "md:min-h-96 md:order-2" : "md:min-h-96"}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-4/3 h-full w-full object-cover object-center"
                  width={1792}
                  height={1008}
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <p className="text-sm font-medium uppercase tracking-wider text-brand">{item.level}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{item.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.lead}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <a href="#contacto">Consultar este kit</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section id="guia" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Para principiantes</p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-tight text-ink">
            No hace falta saber de robótica para elegir.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Si estás armando un laboratorio por primera vez, esta guía te deja
            en un kit concreto. Después profundizamos juntos.
          </p>
        </div>
        <KitGuide />
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id="para-quien" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Para quién</p>
        <h2 className="mt-3 max-w-xl font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-tight text-ink">
          Educación técnica de nivel medio y superior.
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {AUDIENCES.map((item) => (
            <li key={item.title} className="flex gap-4 rounded-lg border border-line bg-paper p-5">
              <item.icon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden />
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section id="formacion" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-8 overflow-hidden rounded-xl bg-ink text-brand-fg lg:grid-cols-[1.15fr_0.85fr]">
        <div className="p-7 sm:p-12">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-brand">
            <Landmark className="size-4" aria-hidden />
            Formación docente
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-tight">
            El hardware se queda si el docente se siente seguro.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-brand-fg/80">
            Diseñamos capacitaciones y certificaciones para que el equipo
            docente implemente las plataformas desde el primer día. No es una
            importación suelta: es un estándar de aula.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-brand-fg/90">
            <li className="flex gap-2">
              <Cpu className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              Práctica sobre el mismo equipo que llega al laboratorio
            </li>
            <li className="flex gap-2">
              <GraduationCap className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              Recorrido claro, de la puesta en marcha al proyecto final
            </li>
          </ul>
          <Button asChild variant="invert" className="mt-8">
            <a href="#contacto">Pedir capacitación</a>
          </Button>
        </div>
        <div className="min-h-56">
          <img
            src="/images/mcu.jpg"
            alt="Kit de microcontroladores usado en la capacitación docente"
            className="h-full w-full object-cover"
            width={1792}
            height={1008}
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand">Contacto</p>
          <h2 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.25rem)] font-semibold tracking-tight text-ink">
            Contanos qué laboratorio querés armar.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Escuela técnica, instituto o universidad: escribí con el año, la
            cantidad de grupos y si ya tienen un espacio. Te devolvemos una
            propuesta simple.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
