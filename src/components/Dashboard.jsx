import { useEffect, useState } from 'react';
import { Header } from './Header';
import { ProductCard } from './ProductCard.jsx';
import { themes } from '../styles/theme.js';
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../features/details/detailSlice.js'
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import IplForm from './IPLForm.jsx';
import {urls} from '../urls/url.js';
import CheckOut from './CheckOut.jsx';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const details = useSelector(state => state.details.details);
  const cart = useSelector(state => state.details.cart);

  const [teamed, setTeamed] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState('RCB');
  const theme = themes[selectedTeam];
  const url = urls[selectedTeam];
  const [showCheckout, setShowCheckout] = useState(false);
 
  const products = [
    { id: 1, name: 'Team Jersey', price: 999, image: url.jersey },
    { id: 2, name: 'Team Cap', price: 99, image: url.cap },
    { id: 3, name: 'Team Lowers', price: 499, image: url.lowers },
    { id: 4, name: 'Team Bottle', price: 599, image: url.bottle },
  ];

  useEffect(() => {
    console.log("Dashboard",user.name, user.email);
    dispatch(update({name : user.name, email : user.email}));
    console.log("Email Sent", user.email)

    axios.post('/api/user',{email : user.email})
      .then((res) => {
        if(!res.data)
           setTeamed(false);
        else
        {
          setSelectedTeam(res.data.team);
          dispatch(update({name : res.data.name, email : res.data.email, team : res.data.team}));
        }
      })
      .catch((err) => console.log(err));
  },[])

  return (
    <div className="min-h-screen w-screen
      text-gray-800 font-sans" style={{backgroundImage : `url(${url.logo})`, backgroundRepeat : 'no-repeat', backgroundSize : 'cover',}}>
      <Header team={selectedTeam} logo={url.logo} setTeam={setSelectedTeam}/>

      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-center text-gray-800 
             bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-2">
        Welcome, <span style={{ color: theme.colors.primary }}>{details.name}</span>
      </h1>
        
        <main className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </main>
      </div>
      {
        (  cart[1] > 0 || cart[2] > 0 || cart[3] > 0 || cart[4] > 0 ) &&
        <button className='py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out relative bottom-8' onClick={() => setShowCheckout(true)}>
          Checkout
        </button>

      }

      {!teamed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
          <IplForm 
            name={details.name} 
            email={details.email} 
            setTeamed={setTeamed} 
            setTeam={setSelectedTeam}
          />
        </div>
      )}

      {
        showCheckout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <CheckOut setCheckout={setShowCheckout}/>
          </div>
        )
      }
    </div>
  );
}