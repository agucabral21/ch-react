import React, {} from "react";
import {NavLink} from 'react-router-dom';

function Item({prod}) {

  return (   
    <tr>
      <th scope="row"><span className="nav-link">{prod.id}</span></th>
        <td> <span className="nav-link">{prod.name}</span></td>
        <td> <span>{prod.description}</span></td>
        <td> <span className="nav-link">{prod.color}</span></td>
        <td><NavLink to={'/item/'+prod.id}>  <span className="nav-link">Ver</span> </NavLink></td>
    </tr>);
  }  
export default Item;
  