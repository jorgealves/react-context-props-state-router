import React from "react";

export interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export let AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
  return React.useContext(AuthContext);
}
export interface ProductModel{
  id: number
  name: string
  price: number
  quantity:number
}

export interface ShoppingCartModel{
  items: ProductModel[];
  addProduct: (product: ProductModel)=>void;
  removeProduct: (id: number)=>void;
}

export let ShopCartContext = React.createContext<ShoppingCartModel>(null!)

export function useShoppingCart(){
  return React.useContext(ShopCartContext)
}