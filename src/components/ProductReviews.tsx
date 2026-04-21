import { Star, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= n ? "fill-brand-yellow text-brand-yellow" : "text-muted-foreground/40"}`}
        />
      ))}
    </div>
  );
}

const reviews = [
  { name: "R. Silva", date: "23/02/2026", rating: 5, text: "Produto excelente! Encheu o pneu do meu carro super rápido, sem esforço. Entrega super rápida!" },
  { name: "M. Oliveira", date: "20/02/2026", rating: 5, text: "Compressor completo e muito bem embalado. A bateria dura bastante e enche vários pneus." },
  { name: "J. Santos", date: "17/02/2026", rating: 4, text: "Muito bom o produto! Usei na bicicleta e no carro, resolveu meu problema na estrada." },
  { name: "A. Costa", date: "14/02/2026", rating: 5, text: "Compressor original Kennedy, qualidade garantida. Recomendo demais!" },
  { name: "F. Pereira", date: "11/02/2026", rating: 5, text: "Excelente custo-benefício! Pequeno, potente e muito prático para levar no porta-luvas." },
  { name: "L. Souza", date: "08/02/2026", rating: 5, text: "Compressor portátil de qualidade profissional. Ótima precisão na medição da pressão." },
  { name: "C. Almeida", date: "05/02/2026", rating: 4, text: "Produto muito bom, fácil de usar. Encheu certinho e parou sozinho na pressão certa." },
  { name: "P. Ferreira", date: "02/02/2026", rating: 5, text: "Comprei para encher pneus de moto e ficou perfeito. Super indico!" },
  { name: "T. Ribeiro", date: "30/01/2026", rating: 5, text: "Produto de alta qualidade! A bateria é resistente e a luz LED ajuda muito à noite." },
  { name: "V. Lima", date: "27/01/2026", rating: 5, text: "Entrega rápida e produto conforme anunciado. Muito satisfeito!" },
  { name: "G. Martins", date: "24/01/2026", rating: 4, text: "Boa potência para vários tipos de pneus. Kit com bicos extras é ideal." },
  { name: "D. Rodrigues", date: "21/01/2026", rating: 5, text: "O melhor compressor portátil que já usei! Resistente e prático. Nota 10!" },
];

const dist = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 11 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 0.6 },
  { stars: 1, pct: 0.4 },
];

export function ProductReviews() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? reviews : reviews.slice(0, 3);

  return (
    <section className="px-5 mt-10">
      <h3 className="text-lg font-black tracking-wide text-foreground">AVALIAÇÕES</h3>
      <div className="flex items-center gap-3 mt-3">
        <span className="text-4xl font-black">4.9</span>
        <Stars n={5} />
        <span className="text-muted-foreground text-sm">(378)</span>
      </div>

      <div className="mt-4 space-y-2">
        {dist.map((d) => (
          <div key={d.stars} className="flex items-center gap-3 text-xs">
            <span className="w-6 font-medium">{d.stars}★</span>
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-brand-yellow" style={{ width: `${d.pct}%` }} />
            </div>
            <span className="w-12 text-right text-muted-foreground">{d.pct}%</span>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {visible.map((r) => (
          <div key={r.name + r.date} className="bg-muted/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">{r.name}</span>
                <span className="flex items-center gap-1 text-brand-green text-xs font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Verificado
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{r.date}</span>
            </div>
            <Stars n={r.rating} />
            <p className="text-sm text-foreground/85 mt-2 leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-center mt-5 text-brand-blue font-bold flex items-center justify-center gap-1"
      >
        {expanded ? "Ver menos avaliações" : "Ver mais avaliações"}
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
    </section>
  );
}
