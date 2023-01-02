import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeContextProvider } from './contexts/MusicContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/Global'
import { defaultTheme } from './styles/themes/Default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <CoffeContextProvider>
          <Router />
        </CoffeContextProvider>

      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
