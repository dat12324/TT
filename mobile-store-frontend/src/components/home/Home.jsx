import { useState } from 'react'
import heroImg from '../../assets/images/hero.png'
import reactLogo from '../../assets/images/react.svg'
import viteLogo from '../../assets/images/vite.svg'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div>
        <h1>Mobile Store</h1>
        <p>Project structure is ready for development.</p>
      </div>
      <button type="button" className="counter" onClick={() => setCount((value) => value + 1)}>
        Count is {count}
      </button>
    </section>
  )
}

export default Home
