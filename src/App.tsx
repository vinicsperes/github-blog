import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Blog } from './pages/Blog'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Blog></Blog>
    </ThemeProvider>
  )
}
