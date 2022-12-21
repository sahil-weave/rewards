import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
function AdminPanel() {
    useEffect(() => {
        if(!sessionStorage.getItem("username"))
        {
          navigate("/auth")
        }
        if(sessionStorage.getItem("username")!=="Admin")
        {
            navigate("/")
        }
    }, []);
const navigate = useNavigate();
  return (
    <div>AdminPanel</div>
  )
}

export default AdminPanel