import React, {useState} from "react";

function Item({ name, category }) {
   const [isInCart, setisInCart] = useState(false);

   function handleClick(){
    setisInCart((isInCart)=> !isInCart);
   }

   const itemClass = isInCart? "in-cart" : "" ;

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
