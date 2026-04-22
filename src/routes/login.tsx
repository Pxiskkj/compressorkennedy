import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Identificação — Compressores Kennedy" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-xl">
      <SiteHeader />
      <main className="flex-1 px-5 py-6">
        <h1 className="text-xl font-black text-foreground">Identificação</h1>

        <section className="mt-8">
          <h2 className="text-center text-lg font-medium mb-4">Já sou cliente</h2>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Informe seu e-mail"
              className="w-full bg-muted rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <a href="#" className="block text-brand-blue underline text-sm">
              Esqueceu seu e-mail?
            </a>
            <input
              type="password"
              placeholder="Insira sua senha"
              className="w-full bg-muted rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <p className="text-sm">
              Não se lembra de sua senha?{" "}
              <a href="#" className="text-brand-blue underline block">
                Crie ou Recupere sua senha
              </a>
            </p>
            <button
              type="submit"
              className="w-full bg-brand-blue text-white font-bold py-3.5 rounded-lg hover:bg-brand-blue-dark"
            >
              Entrar
            </button>
          </form>
        </section>

        <section className="mt-12">
          <h2 className="text-center text-lg font-medium mb-4">Ainda não sou cliente</h2>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Insira seu e-mail"
              className="w-full bg-muted rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button
              type="submit"
              className="w-full bg-brand-blue text-white font-bold py-3.5 rounded-lg hover:bg-brand-blue-dark"
            >
              Continuar
            </button>
          </form>
        </section>

        <Link to="/" className="block text-center text-brand-blue text-sm mt-8">
          ← Voltar para a loja
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
