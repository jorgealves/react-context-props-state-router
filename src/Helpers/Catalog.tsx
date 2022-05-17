import React, { EventHandler } from "react";
import { useShoppingCart } from "./Context"

const products=[
    {
        id:1,
        name: "Nike AirMax",
        price:180,
    },
    {
        id:2,
        name: "NewBalance Special Edition Plus",
        price:270
    },
    {
        id:3,
        name: "Espuma super fixes",
        price: 25
    }
]

export function Catalog(){
    let shoppingCart = useShoppingCart();
    return (
        <div>
            {products.map((product)=>
                <div className="productCard">
                    <p>{product.name} ({product.price})</p>
                    {/* <input type="number" name="quantity" id={`${product.id}-quantity`} /> */}
                    <button onClick={()=> shoppingCart.addProduct({
                        id: product.id,
                        name:product.name,
                        price: product.price,
                        quantity: 1
                    })}>🛒</button>
                </div>
            )}
        </div>
    )

}