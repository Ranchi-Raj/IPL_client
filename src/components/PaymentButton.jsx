import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { createOrder } from '../actions/createOrder'
import { BirdIcon as Cricket, X } from 'lucide-react'

export default function PaymentButton({price, setRazorPay}) {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => setScriptLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handlePayment = async () => {
    if (!scriptLoaded) {
      alert('Razorpay SDK is still loading. Please try again.')
      return
    }

    const { orderId } = await createOrder()

    const options = {
      key: 'rzp_test_yourtestkey', // Replace with your Razorpay test key
      amount: 99900, // Amount in paise (999 INR)
      currency: 'INR',
      name: 'IPL Fan Zone',
      description: 'Premium Membership',
      order_id: orderId,
      handler: function (response) {
        alert('Payment successful. Welcome to the IPL Fan Zone! Payment ID: ' + response.razorpay_payment_id)
      },
      prefill: {
        name: 'Cricket Fan',
        email: 'fan@ipl.com',
        contact: '9999999999'
      },
      theme: {
        color: '#172554' // IPL dark blue
      }
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-2xl font-bold text-red-300">Proceed To Pay !</div>
      <button className='relative bottom-24 left-48 w-11 h-10' onClick={() => setRazorPay(false)}><span className="text-white">X</span> </button>
      <Button 
        onClick={handlePayment} 
        disabled={!scriptLoaded}
        className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-500 hover:scale-105 flex items-center space-x-2"
      >
        <Cricket className="w-6 h-6" />
        
        <span>Pay {price} Via Razorpay</span>
      </Button>
      <div className="text-white text-sm">Note: Payment is non-refundable</div>
    </div>
  )
}

