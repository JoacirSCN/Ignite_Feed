import { BsFillPencilFill } from 'react-icons/bs'
import { Avatar } from '../Avatar'

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
        alt="baba"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/JoacirSCN.png" />

        <strong>Joacir Sampaio</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <BsFillPencilFill size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
