// src/pages/ProductListing.jsx
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';
import plants from '../data/plants';

function Products() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Available Houseplants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plants.map(plant => {
          const isInCart = cartItems.find(item => item.id === plant.id);
          return (
            <div key={plant.id} className="border p-4 rounded shadow">
              <img src={plant.image} alt={plant.name} className="w-full h-40 object-cover" />
              <h3 className="text-xl mt-2">{plant.name}</h3>
              <p>₹{plant.price}</p>
              <button
                onClick={() => handleAdd(plant)}
                disabled={isInCart}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
              >
                {isInCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
