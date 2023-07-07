import Image from "next/image";
import ProductProvider from "../context/ProductsContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-400 p-24">
      <ProductProvider>
        <h1>e-dokan</h1>
      </ProductProvider>
    </main>
  );
}
