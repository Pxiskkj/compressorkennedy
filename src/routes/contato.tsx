import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Compressores Kennedy" },
      { name: "description", content: "Entre em contato com a Compressores Kennedy. WhatsApp, telefone, e-mail e endereço." },
    ],
  }),
  component: ContatoPage,
});

const WHATSAPP = "5531991032530";
const PHONE = "31991032530";
const EMAIL = "contato@compressorkennedy.com.br";
const ADDRESS = "Rod Contorno Sul de Garuva Sidney Pensky Palmital - Garuva Nº 8661 - SC CEP: 89.248-000";

function ContatoPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-xl">
      <SiteHeader />
      <main className="flex-1 px-5 py-6">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:underline">Início</Link>
          <span className="mx-2">{">"}</span>
          <span>Contato</span>
        </nav>
        <h1 className="text-3xl font-black text-foreground mb-8">Contato</h1>

        <ul className="space-y-5">
          <li>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[32px_1fr] items-center gap-4"
            >
              <span className="h-7 w-7 rounded-full flex items-center justify-center text-white justify-self-center" style={{ backgroundColor: "#25D366" }}>
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.945l-.999 3.648 3.893-1.292z"/></svg>
              </span>
              <span className="text-base font-medium text-foreground">{WHATSAPP}</span>
            </a>
          </li>
          <li>
            <a href={`tel:${PHONE}`} className="grid grid-cols-[32px_1fr] items-center gap-4 text-foreground">
              <Phone className="h-6 w-6 justify-self-center" />
              <span className="text-base">{PHONE}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${EMAIL}`} className="grid grid-cols-[32px_1fr] items-center gap-4 text-foreground break-all">
              <Mail className="h-6 w-6 justify-self-center" />
              <span className="text-base">{EMAIL}</span>
            </a>
          </li>
          <li className="grid grid-cols-[32px_1fr] items-start gap-4 text-foreground">
            <MapPin className="h-6 w-6 justify-self-center mt-1" />
            <span className="text-base leading-relaxed">{ADDRESS}</span>
          </li>
        </ul>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
