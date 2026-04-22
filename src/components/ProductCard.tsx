import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import img1 from "@/assets/produto-1.jpeg";
import img2 from "@/assets/produto-2.jpeg";
import img3 from "@/assets/produto-3.jpeg";
import img4 from "@/assets/produto-4.jpeg";
import img5 from "@/assets/produto-5.jpeg";
import img6 from "@/assets/produto-6.jpeg";
import img7 from "@/assets/produto-7.jpeg";
import img8 from "@/assets/produto-8.jpeg";
import { useState } from "react";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export const PRODUCT = {
  id: "compressor-kennedy",
  name: "Compressor De Ar Elétrico Portátil Digital Encher Pneu Carro Moto Bike",
  price: 47.74,
  image: img1,
};

export function ProductCard() {
  const { addItem } = useCart();
  const [active, setActive] = useState(0);

  return (
    <div className="px-4">
      {/* Carrossel arrastável */}
      <div className="-mx-4 px-4">
        <div
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-hide"
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.7));
            setActive(Math.min(images.length - 1, Math.max(0, idx)));
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[70%] h-56 bg-white rounded-lg border overflow-hidden flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Compressor ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 mt-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-4 bg-brand-blue" : "w-1.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Cor */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[10px] text-foreground/70">cor: preto</span>
        <div className="h-8 w-8 rounded border-2 border-brand-blue overflow-hidden bg-white">
          <img src={img1} alt="preto" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Preço */}
      <div className="mt-4 flex items-start justify-between">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-brand-blue text-2xl font-bold leading-none">R$47,74</span>
          <span className="text-muted-foreground line-through text-sm">R$149,21</span>
          <span className="text-[10px] font-semibold text-brand-blue bg-brand-blue/10 px-1.5 py-0.5 rounded">
            -68%
          </span>
        </div>
        <button aria-label="Favoritar" className="text-muted-foreground">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Título em 2 linhas */}
      <h2 className="mt-2 text-sm leading-snug text-foreground line-clamp-2">
        Compressor De Ar Elétrico Portátil Digital — Carro, Moto, Bike e Infláveis
      </h2>

      {/* Frete grátis */}
      <div className="mt-4 text-center">
        <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-sm px-4 py-2 rounded-full">
          🚚 FRETE GRÁTIS
        </span>
      </div>

      {/* Botão Comprar */}
      <button
        onClick={() => addItem(PRODUCT)}
        className="mt-4 w-full bg-brand-blue text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-blue-dark transition-colors"
      >
        <ShoppingCart className="h-5 w-5" />
        COMPRAR AGORA
      </button>
    </div>
  );
}
