
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function Content() {
  const { theme } = useContext(ThemeContext)

  return (
    <main className={`content ${theme}`}>
      <h2>Our Content</h2>

      <div className="cards-container">
        <div className="card">
          <h3>Card 1</h3>
          <p>This is the first card.</p>
        </div>

        <div className="card">
          <h3>Card 2</h3>
          <p>This is the second card.</p>
        </div>

        <div className="card">
          <h3>Card 3</h3>
          <p>This is the third card.</p>
        </div>
      </div>
    </main>
  )
}
