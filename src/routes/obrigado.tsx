import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ArrowLeft, CreditCard } from "lucide-react";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado pela compra — Compressores Kennedy" },
      {
        name: "description",
        content:
          "Obrigado por comprar com a Compressores Kennedy. Confirme seu pagamento ou volte para a loja.",
      },
    ],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-xl">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10 text-center">
        <div className="h-20 w-20 rounded-full bg-brand-green/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-12 w-12 text-brand-green" strokeWidth={2.5} />
        </div>

        <h1 className="text-2xl font-black text-foreground mb-3">
          Obrigado pelo seu pedido!
        </h1>
        <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
          Recebemos sua solicitação com sucesso.
        </p>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          Assim que confirmarmos o pagamento, seu pedido será preparado e enviado
          com frete grátis para todo o Brasil.
        </p>

        <div className="w-full bg-muted/40 border border-border rounded-xl p-4 mb-8">
          <p className="text-xs text-muted-foreground mb-1">Status do pedido</p>
          <p className="text-sm font-semibold text-brand-blue">
            Aguardando confirmação de pagamento
          </p>
        </div>

        <div className="w-full space-y-3">
          <a
            href="https://compressorkennedy.netlify.app"
            className="flex items-center justify-center gap-2 w-full bg-brand-green text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity shadow-md"
          >
            <CreditCard className="h-5 w-5" />
            Já realizei o pagamento
          </a>

          <a
            href="https://compressorkennedy.netlify.app"
            className="flex items-center justify-center gap-2 w-full border-2 border-brand-blue text-brand-blue font-bold py-3.5 rounded-lg hover:bg-brand-blue/5 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar para o site
          </a>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Dúvidas? Fale conosco pelo WhatsApp.
        </p>
      </main>
    </div>
  );
}
