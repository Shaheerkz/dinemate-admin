import React , {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { LoginContext } from '../../context/Admin'


function Insights() {

    const {adminData} = useContext(LoginContext)
    const [data, setdata] = useState([])

    const fetchInsight = async () =>{
        const url="https://backend.mydinemate.com/api/admin/getTotalUsersandSubscribedUsers"

        const response = await axios.get(url, {
            headers : {
                accept: '*/*',
                'Authorization' : `Bearer ${adminData.token}`
            }
        })

       await setdata(response.data)
        console.log('insight Data' ,  data);
        
    }

    useEffect(() => {
        fetchInsight()
    }, []);

  return (
    <div className="insights">
    <div className="sales">
      <div className="middle">
        <div className="left">
          <h3>Total User</h3>
          <h1>{data.totalUsers}</h1>
        </div>
        <div className="progress">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div className="number">
            <p>100%</p>
          </div>
        </div>
      </div>
      <small className="text-muted">last 24 hours</small>
    </div>
    <div className="expenses">
      <div className="middle">
        <div className="left">
          <h3>NonSuscribed User</h3>
          <h1>{data.nonSubscribedUsers}</h1>
        </div>
        <div className="progress">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div className="number">
            <p>99%</p>
          </div>
        </div>
      </div>
      <small className="text-muted">last 24 hours</small>
    </div>
    <div className="income">
      <div className="middle">
        <div className="left">
          <h3>Suscribed User</h3>
          <h1>{data.subscribedUsers}</h1>
        </div>
        <div className="progress">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div className="number">
            <p>1%</p>
          </div>
        </div>
      </div>
      <small className="text-muted">last 24 hours</small>
    </div>
  </div>
    )
}

export default Insights