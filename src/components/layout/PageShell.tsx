import type { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen overflow-hidden bg-surface-900 text-slate-100">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
