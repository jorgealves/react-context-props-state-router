import React, { Children, useContext, useState } from 'react'
import { ProductModel, ShopCartContext, useShoppingCart } from './Context'


export function ShoppingCartContextComponent({children}:any){
    let [items, setItems] = useState<ProductModel[]>([])

    let addProduct = (product: ProductModel)=>{
        let newCart = [...items, product]
        setItems(newCart)
    }
    let removeProduct = (id: number)=>{
        let cart = [...items]
        let productToRemove = cart.find((el)=>el.id ===id)
        if(!productToRemove){
            return;
        }
        let newCart = cart.filter((prd)=>prd.id !== id)
        setItems(newCart)
    }

    let shoppingCart = {items, addProduct, removeProduct}

    return <ShopCartContext.Provider value={shoppingCart}>{children}</ShopCartContext.Provider>
}


export function ShopCartComponent({children}:any){
    let shoppingCart = useShoppingCart();

    return (
        <div>
            <ul>
                {shoppingCart.items.map((product)=>
                    <li>
                        {product.name} (x{product.quantity}) = {product.price*product.quantity}€ 
                        <button onClick={()=>shoppingCart.removeProduct(product.id)}>❌</button>
                    </li>
                )}
            </ul>
            {children}
        </div>
    )
}