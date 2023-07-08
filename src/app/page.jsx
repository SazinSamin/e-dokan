

import ProductProvider from "../context/ProductsContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-500 p-24">
      <ProductProvider>
        <h1>e-dokan test</h1>
      </ProductProvider>
    </main>
  );
}
