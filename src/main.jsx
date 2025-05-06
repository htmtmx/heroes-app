import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { HeroesApp } from './HeroesApp.jsx'
import { StrictMode } from 'react'

import './styles.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename='/'>
            <HeroesApp/>
        </BrowserRouter>
  </StrictMode>,
)
