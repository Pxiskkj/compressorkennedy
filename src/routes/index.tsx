import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { ProductDescription } from "@/components/ProductDescription";
import { ProductReviews } from "@/components/ProductReviews";
import { ProductFAQ } from "@/components/ProductFAQ";
import { ArrowDownNarrowWide } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Compressores Kennedy — Compressor de Ar Portátil Digital" },
      {
        name: "description",
        content:
          "Compressor de ar elétrico portátil digital. Encha pneus de carro, moto, bike e infláveis. Frete grátis para todo Brasil.",
      },
      { property: "og:title", content: "Compressores Kennedy" },
      {
        property: "og:description",
        content: "Compressor de ar portátil digital com frete grátis para todo Brasil.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-xl">
      <SiteHeader />
      <main className="pt-6 pb-4">
        <div className="px-5 flex items-center justify-between mb-4">
          <button aria-label="Ordenar" className="text-foreground/70">
            <ArrowDownNarrowWide className="h-5 w-5" />
          </button>
        </div>
        <h1 className="text-center text-2xl font-light text-foreground/70 mb-6">
          Compressores de Ar
        </h1>
        <ProductCard />
        <ProductDescription />
        <ProductReviews />
        <ProductFAQ />
      </main>
      <SiteFooter />
    </div>
  );
}
