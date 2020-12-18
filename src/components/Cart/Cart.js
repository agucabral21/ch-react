import React, {useContext} from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "./CartItem";


function Cart(){


    const cartCtx = useContext(CartContext);

    function generateCartItems(cartItemsArray){        
        return cartItemsArray.map((iCart) => {           
            return  <CartItem key={iCart.item.id} cartItem={iCart}/>
        })        
    } 

    return(
            cartCtx.cart.items.length === 0 ?
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
                    {generateCartItems(cartCtx.cart.items)}
                </tbody>
            </table>
            </div>
    )
};

export default Cart;