import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { PlaylistCards } from './pages/PlaylistCards'


export function Router() {
  return (
    <Routes>
        <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<PlaylistCards />}/>
        </Route>
    </Routes>
  )
}