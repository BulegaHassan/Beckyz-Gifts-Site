"use client";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";

export function Providers({ children }) {
  return (
    <ProductsProvider>
      <FilterProvider>{children}</FilterProvider>
    </ProductsProvider>
  );
}
