import { ThemeProvider } from 'styled-components'
import { PlaylistCard } from './components/PlaylistCard'
import { defaultTheme } from './styles/themes/Default'

function App() {

  return ( 
    <ThemeProvider theme={defaultTheme}>
      <PlaylistCard />
    </ThemeProvider>
  )
}

export default App
