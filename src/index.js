import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import product provider
import ProductProvider from "./contexts/ProductContext";
// import sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// import cart provider
import CartProvider from "./contexts/CartContext";

import { ThemeProvider } from "@material-tailwind/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
