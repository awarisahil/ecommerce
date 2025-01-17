import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    alert("🎉 Order placed successfully!");
    clearCart();  
    navigate("/");  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-2/3">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Checkout</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            
            {cart.map((product) => (
              <div key={product.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
                  <span className="ml-4 text-lg font-semibold">{product.title}</span>
                </div>
                <span className="text-lg font-semibold">x{product.quantity}</span> {/* Display quantity */}
                <span className="text-xl font-bold text-gray-700">${(product.price * product.quantity).toFixed(2)}</span> {/* Multiply by quantity */}
              </div>
            ))}

            
            <div className="flex justify-between mt-6 p-4 bg-gray-200 rounded">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-green-600">${totalPrice}</span>
            </div>

           
            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold text-lg"
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
