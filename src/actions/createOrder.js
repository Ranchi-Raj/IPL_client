export async function createOrder() {
  // In a real application, you would make an API call to your backend
  // to create an order and get the order ID from Razorpay
  const orderId = 'order_' + Math.random().toString(36).substring(2, 9)
  return { orderId }
}

