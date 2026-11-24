
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';


export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="header">
      <h1>Theme Context App</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  )
}
