// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import CustomLayout from './layouts/CustomLayout.jsx'
import './i18n';

export default function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<CustomLayout />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
