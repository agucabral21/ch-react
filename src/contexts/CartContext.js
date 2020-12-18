import React, {useState, useReducer} from "react";
//Contextos react
//https://www.freecodecamp.org/news/react-context-in-5-minutes/
const CartContext = React.createContext();

//REDUCER hook
//https://dev.to/aneeqakhan/building-shopping-cart-actions-and-reducers-with-redux-in5
//https://css-tricks.com/getting-to-know-the-usereducer-react-hook/
const cartReducer = (cart,action)=>{
  console.log("accion de cartReducer")
  console.log(action)
  switch (action.type) {
      case "con" : {
          console.log("items actuales")
          console.log(cart.items);
          return cart;
      }
      case "ADD_ITEM": {
      let exist = cart.items.find(cartItem => cartItem.item.id === action.payload.item.id)
      
      return exist ? {
        ...cart,
        items: cart.items.map( cartItem =>
            cartItem.item.id === action.payload.item.id
            ?{...cartItem, count: (cartItem.count + action.payload.count)}
            :cartItem,
        ),     
      }
      :{
        ...cart,
        items:[...cart.items, {item:action.payload.item, count:action.payload.count}]
      }
      };
      default: return{cart};
  }
};


function CartCtxProvider({children}) {

    const [cart, cartDispatch] = useReducer(cartReducer,{buyer:{},items:[],totalPrice:0})
    
    return(
      <CartContext.Provider value={{cart,cartDispatch}}>
        {children}
      </CartContext.Provider>
    )
}

export default CartContext
export { CartCtxProvider};