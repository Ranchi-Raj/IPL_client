import React from 'react'
import { useSelector } from 'react-redux'
import { X } from 'lucide-react'
import {themes} from '../styles/theme.js';
import PaymentButton from './PaymentButton.jsx';

export default function CheckOut({ setCheckout }) {
  const cart = useSelector((state) => state.details.cart)
  const details = useSelector((state) => state.details.details)
  const price = useSelector((state) => state.details.price)
  const theme = themes[details.team];

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your submit logic here
  }

  const name = {
    1: "Jersey",
    2: "Cap",
    3: "Lowers",
    4: "Bottle"
  }

  const totalAmount = Object.entries(cart).reduce((total, [key, value]) => total + (value * price[key]), 0)
  const [razorpay, setRazorpay] = React.useState(false)

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white border-opacity-20 w-full max-w-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-yellow-400 opacity-30 z-0"></div>
        {!razorpay && <div className="relative z-10">
          //
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Bill Invoice</h2>

          <div className="mb-6 text-yellow-300 font-semibold text-lg">Name: {details.name}</div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.entries(cart)
              .filter(([_, value]) => value > 0)
              .map(([key, value]) => (
                <div key={key} className="flex justify-between items-center text-white">
                  <span>{name[key]}</span>
                  <span>
                    {value} X ₹{price[key]} = ₹{(value * price[key]).toLocaleString()}
                  </span>
                </div>
              ))}
            <div className="border-t border-white border-opacity-20 pt-4 mt-4">
              <div className="flex justify-between items-center text-xl font-bold text-yellow-300">
                <span>Total</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full transition-colors duration-300 flex-grow mr-2"
                style={{ backgroundColor: theme.colors.primary, color: theme.colors.accent }}
                onClick={() => setRazorpay(true)}
              >
                Pay Now
              </button>
              
              <button
                type="button"
                onClick={() => setCheckout(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex-grow ml-2"
                style={{ backgroundColor: theme.colors.secondary, color: "white" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>}
        //
        {
          razorpay && <PaymentButton price={totalAmount} setRazorPay={setRazorpay}/>
        }
      </div>
    </div>
  )
}

