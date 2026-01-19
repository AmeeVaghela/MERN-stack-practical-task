import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { useEffect, useState } from "react";
import '../styles/products.css';

export default function Home() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.products);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [page]);

  return (
    <>
      <div className="products">
        {list.map((p) => (
          <div key={p.id} className="card">
            <img src={p.thumbnail}/>
            <h4>{p.title}</h4>
            <p>₹{p.price}</p>
            <button onClick={()=>dispatch(addToCart(p))}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={()=>setPage(page-8)}>Prev</button>
        <button onClick={()=>setPage(page+8)}>Next</button>
      </div>
    </>
  );
}
