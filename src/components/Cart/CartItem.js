import React from "react";
import {NavLink} from "react-router-dom";

function CartItem({cartItem}){
    return (   
        <tr>
            <td> <NavLink to={'/item/'+cartItem.item.id}>  <span className="nav-link">{cartItem.item.label}</span> </NavLink></td>
            <td> <span>{cartItem.item.description}</span></td>
            <td> <span className="nav-link">{cartItem.item.price}</span></td>
            <td> <span className="nav-link">{cartItem.count}</span></td>
        </tr>
        );
};

export default CartItem;