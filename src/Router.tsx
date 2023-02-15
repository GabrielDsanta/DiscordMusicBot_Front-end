import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'

import { Login } from './pages/Login'
import { PlaylistCards } from './pages/PlaylistCards'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PlaylistCards />} />
      </Route>
    </Routes>
  )
}
