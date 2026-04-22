import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Finalizar Compra — Compressores Kennedy" }] }),
  component: CheckoutPage,
});

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function CheckoutPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-xl">
      <SiteHeader />
      <main className="flex-1 px-5 py-6">
        <h1 className="text-xl font-black text-foreground mb-4">Finalizar Compra</h1>

        {items.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-muted-foreground mb-4">Seu carrinho está vazio.</p>
            <Link
              to="/"
              className="inline-block bg-brand-blue text-white font-bold px-6 py-3 rounded-lg"
            >
              Voltar à loja
            </Link>
          </div>
        ) : (
          <>
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3 border rounded-lg p-3">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="h-20 w-20 object-contain rounded border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-2">{it.name}</p>
                    <p className="text-brand-blue font-bold mt-1">{brl(it.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(it.id, it.quantity - 1)}
                        className="h-7 w-7 rounded border flex items-center justify-center"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {it.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(it.id, it.quantity + 1)}
                        className="h-7 w-7 rounded border flex items-center justify-center"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeItem(it.id)}
                        className="ml-auto text-muted-foreground"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{brl(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Frete</span>
                <span className="text-brand-green font-semibold">Grátis</span>
              </div>
              <div className="flex justify-between text-lg font-black pt-2 border-t">
                <span>Total</span>
                <span className="text-brand-blue">{brl(totalPrice)}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-brand-blue text-white font-bold py-3.5 rounded-lg hover:bg-brand-blue-dark">
              Confirmar e Pagar
            </button>
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
