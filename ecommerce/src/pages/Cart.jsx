import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

 
  const totalPrice = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-2/3">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  
                  <span className="ml-4 text-lg font-semibold">{product.title}</span>
                </div>

               
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2 text-lg font-semibold">{product.quantity}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                
                <span className="text-xl font-bold text-gray-700">${(product.price * product.quantity).toFixed(2)}</span>

                
                <button
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => removeFromCart(product.id)}
                >
                  ❌
                </button>
              </div>
            ))}

           
            <div className="flex justify-between mt-6 p-4 bg-gray-200 rounded">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-green-600">${totalPrice}</span>
            </div>

            
            <Link
              to="/checkout"
              className="block mt-6 bg-blue-500 hover:bg-blue-600 text-white text-center p-3 rounded-lg font-semibold text-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
