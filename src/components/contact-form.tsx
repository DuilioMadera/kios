import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const INTERESTS = [
  { value: "rover", label: "Rover Lunar 6WD" },
  { value: "brazo", label: "Brazo robótico" },
  { value: "mcu", label: "Kit de microcontroladores" },
  { value: "formacion", label: "Capacitación docente" },
  { value: "no-se", label: "Todavía no sé" },
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      nombre: String(data.get("nombre") ?? ""),
      institucion: String(data.get("institucion") ?? ""),
      email: String(data.get("email") ?? ""),
      interes: String(data.get("interes") ?? ""),
      mensaje: String(data.get("mensaje") ?? ""),
      fecha: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("kios-consultas") ?? "[]") as unknown[];
      localStorage.setItem("kios-consultas", JSON.stringify([payload, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota / private mode */
    }
    setName(payload.nombre.split(" ")[0] || "");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
        <CheckCircle2 className="size-8 text-brand" aria-hidden />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
          {name ? `Listo, ${name}` : "Listo"}
        </h3>
        <p className="mt-2 leading-relaxed text-muted">
          Recibimos tu consulta. En una versión en producción te responderíamos por
          correo. Por ahora quedó guardada en este dispositivo.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-line bg-surface p-5 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" name="nombre" autoComplete="name" required placeholder="Tu nombre" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="institucion">Institución</Label>
          <Input
            id="institucion"
            name="institucion"
            placeholder="Escuela, instituto o universidad"
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="email">Correo</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="vos@institucion.edu.ar"
          />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="interes">Me interesa</Label>
          <select
            id="interes"
            name="interes"
            defaultValue="no-se"
            className="flex h-11 w-full rounded-md border border-line bg-surface px-3 text-base text-ink focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
          >
            {INTERESTS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="mensaje">Mensaje</Label>
          <Textarea
            id="mensaje"
            name="mensaje"
            required
            placeholder="Contanos el año, la cantidad de estudiantes o lo que necesités."
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Enviar consulta
      </Button>
    </form>
  );
}
