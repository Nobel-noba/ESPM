
import style from '../styles/Home.module.css'
import {MDBBtn} from 'mdb-react-ui-kit'

const SideBar = () => {
  return (
      <div className={style.Sidebar}>
            <MDBBtn className="mb-2 mt-2" style={{width:"100%"}}>Projects</MDBBtn>
            <MDBBtn className="mb-2" style={{width:"100%"}}>Tasks</MDBBtn>
      </div>
  )
}

export default SideBar