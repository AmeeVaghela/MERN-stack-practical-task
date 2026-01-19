import '../styles/navbar.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.length);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/checkout">Cart ({count})</Link>
    </nav>
  );
}