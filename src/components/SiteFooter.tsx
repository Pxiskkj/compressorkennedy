import { ChevronRight } from "lucide-react";
import { useState } from "react";

const sections = [
  {
    title: "INSTITUCIONAL",
    items: ["Sobre Nós", "Nossa História", "Trabalhe Conosco", "Contato"],
  },
  {
    title: "POLÍTICAS",
    items: ["Política de Privacidade", "Política de Trocas", "Termos de Uso", "Política de Frete"],
  },
  {
    title: "AJUDA",
    items: ["Central de Atendimento", "Como Comprar", "Rastrear Pedido", "Perguntas Frequentes"],
  },
];

export function SiteFooter() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer className="bg-brand-blue text-white mt-8">
      <div className="divide-y divide-white/15">
        {sections.map((s) => (
          <div key={s.title}>
            <button
              onClick={() => setOpen(open === s.title ? null : s.title)}
              className="w-full flex items-center justify-between px-5 py-5 text-left font-bold tracking-wide"
            >
              <span>{s.title}</span>
              <ChevronRight
                className={`h-5 w-5 transition-transform ${open === s.title ? "rotate-90" : ""}`}
              />
            </button>
            {open === s.title && (
              <ul className="px-5 pb-4 space-y-2 text-sm text-white/90">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="px-5 py-8 border-t border-white/15">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-white text-brand-blue font-black flex items-center justify-center text-xl">
            CK
          </div>
          <div className="font-black leading-tight">
            <div>COMPRESSORES</div>
            <div>KENNEDY</div>
          </div>
        </div>
        <p className="text-sm text-white/90 leading-relaxed">
          A Compressores Kennedy se consagra no mercado de compressores de ar, máquinas e
          equipamentos para diversos segmentos, desde 1995. Atualmente, ampliamos ainda mais
          nossas atividades trabalhando com um nicho completo de produtos que atendem desde
          profissionais até o uso particular.
        </p>
        <p className="text-xs text-white/70 mt-6 text-center">
          © {new Date().getFullYear()} Compressores Kennedy. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
