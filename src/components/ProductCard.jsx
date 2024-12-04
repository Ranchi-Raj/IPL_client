import { themes } from '../styles/theme';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart , removeFromCart} from '../features/details/detailSlice';

export function ProductCard({product}) {
  // const toDefault = useSelector(state => state.details.toDefault);
  const cart = useSelector(state => state.details.cart);
  //const add = useSelector(state => state.details.added);
  const [add, setAdded] = useState(false);
  // const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  // if(cart[product.id] <= 0) setAdded(false);

  // if(toDefault)
  // {
  //   console.log(product.id, "Team change hua to ab hoga")
  //   setAdded(false);
  //   setCount(1);
  //   dispatch(setToDefaultToFalse());
  // }
  useEffect(() => {
    if(cart[product.id] > 0) setAdded(true);
    else setAdded(false);
  }, [cart]);
  
  const increment = () => {
    dispatch(addToCart(product.id))
    // setCount(count + 1);
  }
  const decrement = () =>{ 
    if(cart[product.id] > 0)
      dispatch(removeFromCart(product.id));
       
    if(cart[product.id] <= 1) setAdded(false);
  }

 const handleAdd = () => {
    console.log("Added")
    setAdded(true);
    dispatch(addToCart(product.id));
  }


  return (
    <div key={product.id} className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-white border-opacity-30">
                  <div className="relative h-64 md:h-48">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-fill"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                    <p className="text-gray-600 mb-2">₹{product.price}</p>

                   { !add ? <button 
                      className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out" onClick={handleAdd}
                    >
                      Add to Cart
                    </button>
                    :
                    <div className="flex items-center justify-center space-x-4 p-2 bg-gray-100 rounded-lg shadow-md">
                    <button
                      onClick={decrement}
                      className="px-2 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      -
                    </button>
                    <span className="text-2xl font-semibold text-gray-700">{cart[product.id]}</span>
                    <button
                      onClick={increment}
                      className="px-2 py-1 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      +
                    </button>
                  </div>
                    }

                  </div>
                </div>
              </div>
  );
}
