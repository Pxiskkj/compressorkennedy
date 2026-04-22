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
              className="w-full flex items-center justify-between px-5 py-4 text-left text-xs font-bold tracking-wide"
            >
              <span>{s.title}</span>
              <ChevronRight
                className={`h-4 w-4 transition-transform ${open === s.title ? "rotate-90" : ""}`}
              />
            </button>
            {open === s.title && (
              <ul className="px-5 pb-3 space-y-1.5 text-[11px] text-white/90">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="px-5 py-6 border-t border-white/15 text-center space-y-3">
        <p className="text-[11px] text-white leading-relaxed">
          © {new Date().getFullYear()} Compressores Kennedy │ CNPJ 08.858.579/0015-35 │ Matriz: Rod
          Contorno Sul de Garuva Sidney Pensky Palmital - Garuva Nº 8661 - SC CEP: 89.248-000
        </p>
        <p className="text-[11px] text-white/90 leading-relaxed">
          Todos os preços e condições deste site são válidos apenas para compras no site. Os preços
          previstos no site prevalecem aos demais anunciados em outros meios de comunicação e sites
          de buscas. Em caso de divergência, o preço válido é o do carrinho de compras deste site.
          Imagens ilustrativas. Confira condições na sacola de compras.
        </p>
      </div>
    </footer>
  );
}
