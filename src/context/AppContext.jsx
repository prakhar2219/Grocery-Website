// This code sets up a React Context called AppContext which allows sharing global state and functions (like navigate, user, etc.) across your React component tree without passing them as props manually.
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
//  hold shared state that will  be used throughout the app.
export const AppContext = createContext();
// This component wraps around other components to provide them access to the shared state.
export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  // const fetchProducts=async()=>{
  //     const response=await fetch("https://dummyjson.com/products")
  //     const data=await response.json()
  //     setProducts(data.products)
  // }

  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Item added to cart");
  };
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Item updated in cart");
  };

  const removeCartItem = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Item removed from cart");
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let count = 0;
    for (const item in cartItems) {
      count += cartItems[item];
    }
    return count;
  }
  const getCartTotal = () => {
    let total = 0;
    for (const item in cartItems) {
      const product = products.find((product) => product._id === item);
      if (product) {
        total += product.price * cartItems[item];
      }
    }
    return total;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // const value={navigate,user,setUser,isSeller,setIsSeller}
  // All the state values and their setters + navigate are packed into an object to be shared.
  const value = {
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    navigate,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeCartItem,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartTotal,
    getCartCount,
  };
  // The AppContext.Provider makes the value accessible to any child component wrapped inside this provider.
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => {
  return useContext(AppContext);
};
