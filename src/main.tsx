import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'
import { store } from './app/store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <Auth0Provider
    domain="dev-za460nyv0ukr8y3k.us.auth0.com"
    clientId="yPjHerZ8DcwWEYXR3dD82TlMBopKEOL5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
    </Provider>
  </StrictMode>,
)
