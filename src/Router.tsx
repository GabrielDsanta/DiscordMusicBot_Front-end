import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Auth } from './pages/auth'
import { Home } from './pages/home'

import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { PlaylistCards } from './pages/PlaylistCards'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />

        <Route path="/auth" element={<Auth />}>
          <Route path=":token"></Route>
        </Route>

        <Route path="/home" element={<Home />} />

        <Route path="/playlist" element={<PlaylistCards />} />

        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  )
}
