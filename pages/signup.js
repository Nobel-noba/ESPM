import styles from '../styles/Home.module.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from '../components/Navbar'
import { MDBContainer} from 'mdb-react-ui-kit'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import Signup from '../components/Signup'

const signup = () => {
  return (
        <>
        <Navbar />
        <MDBContainer fluid style={{margin:"auto"}}>
        <div className={styles.outter} >
            <div className={styles.inner} >
                <Signup />
            </div>
        </div>
        </MDBContainer>
        </>
  );
};

export default signup;
