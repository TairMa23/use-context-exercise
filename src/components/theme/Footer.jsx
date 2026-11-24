
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <footer className="footer">
      <p>Theme: {theme}</p>
    </footer>
  )
}
