import React, {useState} from "react";
const { Provider, Consumer } = React.createContext();

function CartCtxProvider({children}) {

    const [cart,setCart] = useState([]);

    const addItem = (item,count) => {
        if(cart.length > 0 && cart.find(x => { console.log(x); return x.item.id === item.id;})){
            //si el elemento ya existia lo que hago es avisar
            console.log("ya existia");
        }else{//Agrego elemento al carrito            
             setCart( oldCart => [ ...oldCart, {item:item,count:count}])
        }        
    } 

    return(
      <Provider value={{cart: cart, addItem: addItem }}>
        {children}
      </Provider>
    )

}

export { CartCtxProvider, Consumer as CartCtxConsumer };