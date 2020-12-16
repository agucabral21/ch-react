import React from "react";
import { CartCtxConsumer } from "../../contexts/CartContext";
import CartItem from "./CartItem";


function Cart(){

    function generateCartItems(cartItemsArray){        
        return cartItemsArray.map(iCart => {           
            return  <CartItem cartItem={iCart}/>
        })        
    } 

    return(
        <CartCtxConsumer>{cartCtx => (
            
            cartCtx.cart.length === 0 ?
            <div className="table-responsive">no hay items ameo</div> :
            <div className="table-responsive">
            <table className="table table-sm">
                <thead>
                <tr>                    
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Precio</th>                     
                    <th scope="col">Cantidad</th>
                </tr>
                </thead>
                <tbody>
                    {generateCartItems(cartCtx.cart)}
                </tbody>
            </table>
            </div>
            
            )}
        </CartCtxConsumer>
    )
};

export default Cart;