import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './styles/tokens.css'
import './styles/global.css'
import './styles/components.css'
import './styles/pages.css'
import './styles/responsive.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Future flags opt in to the React Router v7 behaviours now, so the
        upgrade is a version bump rather than a behavioural change. */}
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
