import { useState } from 'react'
import './App.css'
import styles from './style';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primary w-full overflow-hidden App">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          NAVBAR
        </div>
      </div>
  
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          HERO
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          STATS
          BUSINESS
          BILLING
          CARD DEAL
          TESTIMONIAL
          CLIENTS
          CTA
          FOOTER
        </div>
      </div>
    </div>
  )
}

export default App
