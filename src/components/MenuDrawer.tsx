import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { ChevronRight, Package, Home, User, Phone, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";

const items = [
  { icon: Home, label: "Início", to: "/" as const },
  { icon: Package, label: "Produtos", to: "/" as const },
  { icon: Wrench, label: "Compressores", to: "/" as const },
  { icon: User, label: "Minha Conta", to: "/login" as const },
  { icon: Phone, label: "Contato", to: "/contato" as const },
];

export function MenuDrawer() {
  const { isMenuOpen, closeMenu } = useCart();

  return (
    <Sheet open={isMenuOpen} onOpenChange={(o) => !o && closeMenu()}>
      <SheetContent side="left" className="w-[85%] sm:max-w-sm p-0">
        <SheetHeader className="bg-brand-blue text-white px-5 py-6">
          <SheetTitle className="text-white flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white text-brand-blue font-black flex items-center justify-center">
              CK
            </div>
            <span className="font-black">COMPRESSORES KENNEDY</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="py-2">
          {items.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              onClick={closeMenu}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted border-b"
            >
              <span className="flex items-center gap-3 font-medium">
                <it.icon className="h-5 w-5 text-brand-blue" />
                {it.label}
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
