
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'

const SideBar = ({active,setActive}) => {
  
  const [token,setToken] = useState("") 

  useEffect(() => {
    const loggedinuser = localStorage.getItem('token')
    setToken(loggedinuser);
},[])

  return (
      <div className={styles.Sidebar}>
            <button key="project" onClick={() => setActive("project")} className={active==="project" ? styles.active :styles.notactive} >Projects</button>
            <button key="tasks" onClick={() => setActive("tasks")} className={active==="tasks" ? styles.active :styles.notactive}>Tasks</button>
      </div>
  )
}

export default SideBar