import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Blog } from './pages/Blog'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Post from './pages/Post'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
          {/* Add more routes here if needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
