import React from "react";
import { Catalog } from "../Helpers/Catalog";
import {
  ShopCartComponent,
  ShoppingCartContextComponent,
} from "../Helpers/ShoppingCart";

export default function ShopPage() {
  return (
    <>
      <h3>Shop Page</h3>
      <ShoppingCartContextComponent>
        <ShopCartComponent/>
        <Catalog/>
      </ShoppingCartContextComponent>
    </>
  );
}
