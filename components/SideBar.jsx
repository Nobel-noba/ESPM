
import styles from '../styles/Home.module.css'

const SideBar = ({active,setActive}) => {
  
  return (
      <div className={styles.Sidebar}>
            <button key="project" onClick={() => setActive("project")} className={active==="project" ? styles.active :styles.notactive} >Projects</button>
            <button key="tasks" onClick={() => setActive("tasks")} className={active==="tasks" ? styles.active :styles.notactive}>Tasks</button>
      </div>
  )
}

export default SideBar