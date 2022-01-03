import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  const [classActive, setClassActive] = useState(``)

  const toggleNav = () => {
    if (open === false) {
      setClassActive(`${styles.active}`),
      setOpen(true),
      console.log(open)
    } 
    
    if (open === true) {
      setClassActive(``),
      setOpen(false),
      console.log(open)
    }
  }

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <h4>
            Logo
          </h4>
        </div>
        <button onClick={toggleNav} className={`${styles.hamburguer} ${classActive}`} />
        <div className={`${styles.links} ${classActive}`}>
          <ul>
            <li>
              Item
            </li>
            <li>
              Item
            </li>
            <li>
              Item
            </li>
            <li>
              Item
            </li>
            <li>
              Item
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Home
