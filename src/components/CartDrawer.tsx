import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, totalPrice, totalItems } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-5 py-4 border-b">
          <SheetTitle className="flex items-center gap-2 text-brand-blue">
            <ShoppingBag className="h-5 w-5" />
            Meu Carrinho ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground mt-10">
              Seu carrinho está vazio.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-3 border-b pb-4">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="h-20 w-20 object-contain rounded-md border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium line-clamp-2">{it.name}</p>
                    <p className="text-brand-blue font-bold mt-1">{brl(it.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(it.id, it.quantity - 1)}
                        className="h-7 w-7 rounded border flex items-center justify-center hover:bg-muted"
                        aria-label="Diminuir"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">
                        {it.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(it.id, it.quantity + 1)}
                        className="h-7 w-7 rounded border flex items-center justify-center hover:bg-muted"
                        aria-label="Aumentar"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => removeItem(it.id)}
                        className="ml-auto text-muted-foreground hover:text-brand-red"
                        aria-label="Remover"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-5 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-xl font-black text-brand-blue">{brl(totalPrice)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="block w-full bg-brand-blue text-white text-center font-bold py-3 rounded-lg hover:bg-brand-blue-dark transition-colors"
            >
              Finalizar Compra
            </Link>
            <button
              onClick={closeCart}
              className="block w-full text-brand-blue text-sm font-semibold py-2"
            >
              Continuar comprando
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
