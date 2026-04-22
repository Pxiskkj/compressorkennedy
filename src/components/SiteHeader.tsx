import { User, ShoppingCart, AlignLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const { totalItems, openCart, openMenu } = useCart();

  return (
    <header className="w-full">
      <div className="bg-brand-blue-dark text-center py-2 px-4 text-xs sm:text-sm">
        <span className="text-brand-yellow font-bold">Frete Grátis</span>
        <span className="text-white"> para todo Brasil! </span>
        <span className="text-brand-yellow font-bold">Confira Condições</span>
      </div>
      <div className="bg-brand-blue px-4 py-4 flex items-center justify-between">
        <button aria-label="Menu" className="text-white" onClick={openMenu}>
          <AlignLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center gap-2 text-white">
          <div className="h-10 w-10 rounded-full bg-white text-brand-blue font-black flex items-center justify-center text-lg">
            CK
          </div>
          <div className="leading-tight font-black text-sm sm:text-base">
            <div>COMPRESSORES</div>
            <div>KENNEDY</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-white">
          <Link to="/login" aria-label="Identificação">
            <User className="h-6 w-6" />
          </Link>
          <button onClick={openCart} aria-label="Carrinho" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-blue-dark text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {totalItems}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
