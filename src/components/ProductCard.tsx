import { Heart } from "lucide-react";
import produto from "@/assets/produto-compressor.jpeg";

export function ProductCard() {
  return (
    <div className="px-4">
      <div className="max-w-[240px] mx-auto">
        <div className="text-[11px] text-foreground/80 mb-1">cor: preto</div>
        <div className="h-20 w-20 rounded-md border-2 border-brand-red overflow-hidden bg-white">
          <img src={produto} alt="Compressor de ar portátil preto" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="max-w-[240px] mx-auto mt-3 flex items-start justify-between">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-brand-red text-2xl font-bold leading-none">R$47,74</span>
          <span className="text-muted-foreground line-through text-sm">R$149,21</span>
          <span className="text-[10px] font-semibold text-brand-red bg-red-50 px-1.5 py-0.5 rounded">
            -68%
          </span>
        </div>
        <button aria-label="Favoritar" className="text-muted-foreground">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="max-w-[240px] mx-auto mt-2 flex gap-2">
        <span className="text-[10px] font-bold text-white bg-brand-red px-1.5 py-0.5 rounded h-fit mt-0.5">
          Indicado
        </span>
        <h2 className="text-sm leading-snug text-foreground">
          Compressor De Ar Elétrico Portátil Digital Encher Pneu Carro Moto Bike Bicicleta Bola
          Piscina Inflável
        </h2>
      </div>

      <div className="mt-4 text-center">
        <span className="inline-block bg-brand-green/10 text-brand-green font-bold text-sm px-4 py-2 rounded-full">
          🚚 FRETE GRÁTIS
        </span>
      </div>
    </div>
  );
}
