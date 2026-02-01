import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import EventDetails from './events.tsx'
import { SortProvider } from './SortContext.tsx'

import { BrowserRouter, Routes, Route} from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SortProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Routes>
      </BrowserRouter>
    </SortProvider>
  </StrictMode>,
)
