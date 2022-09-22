import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      <h1>ItemList</h1>
      {/* <Item name={products[0].name} />
      <Item name={products[1].name} />
      <Item name={products[2].name} />
      <Item name={products[4].name} /> */}
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </>
  );
}
 
export default ItemList;