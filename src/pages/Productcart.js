import { useTitle } from "../hooks/useTitle";
import { Cardcart } from "../components/Cardcart";
import { useCart } from "../context/CartContext";

export const Productcart = () => {
  const {total,cartList}=useCart();
  useTitle("Cart");
  
  

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList?.length}/${total}</h1>
        { cartList?.map((product) => (
          <Cardcart key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
