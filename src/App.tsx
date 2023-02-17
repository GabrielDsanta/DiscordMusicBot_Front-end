import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { MusicContextProvider } from './contexts/MusicContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/Global'
import { defaultTheme } from './styles/themes/Default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MusicContextProvider>
          <RecoilRoot>
            <Router />
          </RecoilRoot>
        </MusicContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
