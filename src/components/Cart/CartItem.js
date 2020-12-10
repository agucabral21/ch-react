import React from "react";
import {NavLink} from "react-router-dom";

function CartItem({cartItem}){
    return (   
        <tr>
          <th scope="row"><span className="nav-link">{cartItem.item.id}</span></th>
            <td> <span className="nav-link">{cartItem.count}</span></td>
            <td> <span className="nav-link">{cartItem.item.name}</span></td>
            <td> <span>{cartItem.item.description}</span></td>
            <td> <span className="nav-link">{cartItem.item.color}</span></td>
            <td><NavLink to={'/item/'+cartItem.item.id}>  <span className="nav-link">Ver</span> </NavLink></td>
        </tr>
        );
};

export default CartItem;