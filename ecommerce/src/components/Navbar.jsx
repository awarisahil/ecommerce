import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="p-4 bg-pink-800 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">E-Commerce For BharatGo</Link>
      <div className="flex gap-4">
        <Link to="/cart">🛍️ Cart ({cart.length})</Link>
         <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
            <Link to="/signup" className="bg-green-500 px-4 py-2 rounded">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
