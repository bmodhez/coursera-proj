import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const count = useSelector(state => state.cart.items.reduce((acc, item) => acc + item.quantity, 0));

  return (
    <header className="bg-green-700 text-white p-4 flex justify-between">
      <div>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart ({count})</Link>
      </div>
    </header>
  );
}

export default Header;
