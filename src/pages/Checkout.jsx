import '../styles/checkout.css';
import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {items.map(i => <p key={i.id}>{i.title} - ${i.price}</p>)}
      <h3>Total: ${total}</h3>
    </div>
  );
}
