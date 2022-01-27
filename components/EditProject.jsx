import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit'

import React,{useEffect, useState} from 'react';
import axios from 'axios';

const EditProject = ({project,_pid}) => {
    const [prj,setPrj] = useState([]);
    const pid=_pid
    let projec;
    console.log(pid)

    const  GetUsers = async () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=11')
            .then(function (response) {
                  // handle success         
              setPrj(response.data)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
          }

          useEffect(()=>{
            GetUsers()
          },[])


  return (
            <MDBCard className='mt-2'>
                <MDBCardBody>
            {           prj.map(_project => {
                        if(_project.id === pid){
                            projec=_project
                            console.warn(_project)   

                            return true
                        }
                    })?<>
                    {console.log(projec )}
                    <MDBCardTitle style={{fontWeight:"700",fontSize:"50px",padding:"12px"}}>Project {project.id}</MDBCardTitle>
                    <MDBCardText>Assigned Develpers</MDBCardText>
                    <MDBCardText>
                        <ul>
                            <li>Nobel</li>
                            <li>Mikiyas</li>
                        </ul>
                    </MDBCardText>
                    <MDBCardText>DeadLine</MDBCardText>
                    <MDBCardText> 1/2/23
                    </MDBCardText>
                    <MDBCardText style={{position:"absolute",top:"5px",right:"80px"}}>priority:</MDBCardText>
                    <div>{project.title}</div>
                    <div>{project.body}</div>
                    <button style={{float:"right"}} className='btn btn-primary'>See more</button>
                    </>:<></>
              }
                    
                </MDBCardBody>
            </MDBCard>
            )
};

export default EditProject;
