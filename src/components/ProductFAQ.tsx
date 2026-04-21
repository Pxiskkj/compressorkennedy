import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "O compressor é realmente sem fio?",
    a: "Sim! Possui bateria recarregável de 4000mAh embutida, totalmente sem fio. Não é necessário conectar ao isqueiro do carro nem a tomadas durante o uso.",
  },
  {
    q: "Quantos pneus consigo encher com uma carga?",
    a: "Com uma carga completa, é possível encher de 4 a 6 pneus de carro de tamanho médio (de 0 a 35 PSI), dependendo do volume e da pressão desejada.",
  },
  {
    q: "Serve para pneu de carro, moto e bicicleta?",
    a: "Sim! Acompanha bicos para pneus de carro, moto, bicicleta, além de agulha para bolas e bicos para infláveis e balões.",
  },
  {
    q: "Como funciona a parada automática?",
    a: "Você define a pressão desejada no display digital. Ao atingir o valor, o compressor desliga automaticamente, evitando o risco de estourar o pneu.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "O prazo varia conforme a sua região. Trabalhamos com frete grátis para todo Brasil e a entrega leva entre 7 e 15 dias úteis após a confirmação do pagamento.",
  },
  {
    q: "O produto tem garantia?",
    a: "Sim! Oferecemos 12 meses de garantia contra defeitos de fabricação, além de 7 dias de prazo para arrependimento conforme o Código de Defesa do Consumidor.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos PIX (com desconto), cartão de crédito em até 12x e boleto bancário. Compra 100% segura e protegida.",
  },
];

export function ProductFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-5 mt-10">
      <h3 className="text-lg font-black tracking-wide text-foreground">PERGUNTAS FREQUENTES</h3>
      <div className="mt-4 space-y-2">
        {faqs.map((f, i) => (
          <div key={i} className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold"
            >
              <span>{f.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <p className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
