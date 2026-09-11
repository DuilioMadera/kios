import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Level = "tecnica" | "superior" | "docente";
type Goal = "movilidad" | "automatizacion" | "electronica";

const LEVELS: { id: Level; title: string; hint: string }[] = [
  { id: "tecnica", title: "Escuela técnica", hint: "Secundaria, electromecánica o electrónica." },
  { id: "superior", title: "Instituto o universidad", hint: "Terciario, ingeniería o laboratorio." },
  { id: "docente", title: "Formación docente", hint: "Profesorado o capacitación de instructores." },
];

const GOALS: { id: Goal; title: string; hint: string }[] = [
  { id: "movilidad", title: "Moverse y explorar", hint: "Motores, sensores y un robot que recorre el aula." },
  { id: "automatizacion", title: "Automatizar y manipular", hint: "Cinemática, servos y líneas de montaje." },
  { id: "electronica", title: "Programar el hardware", hint: "MCU, datos, IoT y el diálogo placa–sensor." },
];

const RESULTS: Record<
  Goal,
  { name: string; level: string; why: string; href: string }
> = {
  movilidad: {
    name: "Rover Lunar 6WD",
    level: "Nivel 1",
    why: "Seis ruedas independientes, sensores y un proyecto que se ve, se toca y se programa.",
    href: "#rover",
  },
  automatizacion: {
    name: "Brazo robótico",
    level: "Nivel 2",
    why: "Para simular una línea industrial: agarre, precisión y cálculo de movimientos.",
    href: "#brazo",
  },
  electronica: {
    name: "Kit de microcontroladores",
    level: "Nivel 3",
    why: "El punto de partida para firmware, sensores y protocolos. Ideal para el banco de trabajo.",
    href: "#mcu",
  },
};

function Choice({
  selected,
  title,
  hint,
  onSelect,
}: {
  selected: boolean;
  title: string;
  hint: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex min-h-20 w-full flex-col items-start rounded-lg border px-4 py-3.5 text-left transition-[border-color,background-color,transform] duration-150 ease-out active:scale-[0.99]",
        selected
          ? "border-brand bg-brand-soft"
          : "border-line bg-surface hover:border-ink/25",
      )}
    >
      <span className="flex items-center gap-2 font-medium text-ink">
        {selected ? (
          <Check className="size-4 text-brand" aria-hidden />
        ) : (
          <span className="size-4 rounded-full border border-line" aria-hidden />
        )}
        {title}
      </span>
      <span className="mt-1 pl-6 text-sm leading-snug text-muted">{hint}</span>
    </button>
  );
}

export function KitGuide() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [level, setLevel] = useState<Level | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);

  const result = goal ? RESULTS[goal] : null;
  const levelLabel = LEVELS.find((l) => l.id === level)?.title;

  function reset() {
    setStep(1);
    setLevel(null);
    setGoal(null);
  }

  return (
    <div className="rounded-xl border border-line bg-surface p-5 shadow-card sm:p-8">
      <p className="text-sm font-medium text-brand">Guía de 2 pasos</p>
      <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
        ¿Qué plataforma te conviene?
      </h3>
      <p className="mt-2 max-w-xl text-muted">
        Contestá dos preguntas simples. Te sugerimos un kit para arrancar, sin
        jerga innecesaria.
      </p>

      <div className="mt-6 flex gap-2" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={cn(
              "h-1 flex-1 rounded-full",
              n <= step ? "bg-brand" : "bg-line",
            )}
          />
        ))}
      </div>

      {step === 1 && (
        <fieldset className="mt-6">
          <legend className="mb-3 text-sm font-medium text-ink">
            1. ¿Dónde lo van a usar?
          </legend>
          <div className="grid gap-3">
            {LEVELS.map((item) => (
              <Choice
                key={item.id}
                selected={level === item.id}
                title={item.title}
                hint={item.hint}
                onSelect={() => setLevel(item.id)}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <Button disabled={!level} onClick={() => setStep(2)}>
              Siguiente
              <ArrowRight />
            </Button>
          </div>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="mt-6">
          <legend className="mb-3 text-sm font-medium text-ink">
            2. ¿Qué querés que aprendan primero?
          </legend>
          <div className="grid gap-3">
            {GOALS.map((item) => (
              <Choice
                key={item.id}
                selected={goal === item.id}
                title={item.title}
                hint={item.hint}
                onSelect={() => setGoal(item.id)}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-between gap-3">
            <Button variant="outline" onClick={() => setStep(1)}>
              <ArrowLeft />
              Atrás
            </Button>
            <Button disabled={!goal} onClick={() => setStep(3)}>
              Ver sugerencia
              <ArrowRight />
            </Button>
          </div>
        </fieldset>
      )}

      {step === 3 && result && (
        <div className="mt-6">
          <p className="text-sm text-muted">
            Para {levelLabel?.toLowerCase() ?? "tu institución"}
          </p>
          <p className="mt-1 text-sm font-medium uppercase tracking-wider text-brand">
            {result.level}
          </p>
          <h4 className="mt-1 font-display text-2xl font-semibold text-ink">{result.name}</h4>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">{result.why}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={result.href}>Ver esta plataforma</a>
            </Button>
            <Button variant="outline" onClick={reset}>
              Empezar de nuevo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
