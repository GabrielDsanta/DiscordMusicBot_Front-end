import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'

import { Login } from './pages/Login'
import { PlaylistCards } from './pages/PlaylistCards'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/auth" element={<Login />} />
        <Route
          path="//logintoken=BQCOOROK29zHyGVli13PSluwnImmcIv794oM_IEWwA2wlDTC_tmY0Rxhh7ga46Zh4orWLDmVTjiDpfsTyimP8E8Hz87p9zPHUwepSwMKLUk-8k9EUyEBayF03Ao3Kx8dLVfYSFYYYJd7N5zLXIFzrP077QdneMyyEHY6H60oRIlKoGO14x69xTZ7n7xPJ3ZuMx0TQsF1Fe8MFTtPDwS9qRuN25xvK67SCFftDrC4iovfp9HvJ3YHjw&refresh_token=AQAPrtF9n0273gcNPEDE80wlSi0WpBDtCeqwRQeSTcdiCvsJFM64kmY8sGIAC8KjI9YZrKug6EDOZXqMjOosyc7iuTG5_KIm2XCEVZ3q6SItPFWloKsFE-FhGxJrdZ19YIc"
          element={<PlaylistCards />}
        />
      </Route>
    </Routes>
  )
}
