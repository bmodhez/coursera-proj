// src/components/PlantCard.jsx
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cart/CartSlice'

function PlantCard({ plant }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const isInCart = cartItems.some(item => item.id === plant.id)

  const handleAdd = () => {
    dispatch(addToCart(plant))
  }

  return (
    <div className="border p-4 rounded shadow">
      <img src={plant.image} alt={plant.name} className="w-full h-40 object-cover" />
      <h3 className="text-xl mt-2">{plant.name}</h3>
      <p>₹{plant.price}</p>
      <button
        onClick={handleAdd}
        disabled={isInCart}
        className={`mt-2 px-4 py-2 rounded ${
          isInCart ? 'bg-gray-400' : 'bg-green-600 text-white'
        }`}
      >
        {isInCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default PlantCard
