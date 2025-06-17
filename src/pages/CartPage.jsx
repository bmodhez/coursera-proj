import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeItem } from '../features/cart/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {items.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price} x {item.quantity}</p>
              <div className="flex gap-2 mt-2">
                <button onClick={() => dispatch(increment(item.id))}>+</button>
                <button onClick={() => dispatch(decrement(item.id))}>-</button>
                <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h3 className="text-xl">Total Items: {items.length}</h3>
      <h3 className="text-xl mb-4">Total: ₹{total}</h3>
      <button className="bg-gray-600 text-white px-4 py-2 rounded mr-4">Checkout (Coming Soon)</button>
      <Link to="/products" className="text-blue-600 underline">Continue Shopping</Link>
    </div>
  );
}

export default Cart;
