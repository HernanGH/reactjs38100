import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemList/Item"
import './ItemDetail.css'; 

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);

  const handleAdd = (value) => {
    setCount(value);
    setShowItemCount(false);
  };

  return (
    <div className='itemDetailContainer'>
      <Item product={product} />
      {showItemCount && (<ItemCount
          initial={1}
          stock={10}
          onAdd={handleAdd}
        />)}
      {!showItemCount && (
          <Link to='/cart'>
            <Button variant="success">
                Ir al Carrito
            </Button>
          </Link>
      )}
    </div>
  );
}
 
export default ItemDetail;