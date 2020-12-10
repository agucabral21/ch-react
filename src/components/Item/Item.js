import React, {} from "react";
import {NavLink} from "react-router-dom";

function Item({item}) {

  return (   
    <tr>
      <th scope="row"><span className="nav-link">{item.id}</span></th>
        <td> <span className="nav-link">{item.name}</span></td>
        <td> <span>{item.description}</span></td>
        <td> <span className="nav-link">{item.color}</span></td>
        <td><NavLink to={'/item/'+item.id}>  <span className="nav-link">Ver</span> </NavLink></td>
    </tr>);
  }  
export default Item;
  