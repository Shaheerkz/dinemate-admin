import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useContext } from "react";
import { LoginContext } from "../../context/Admin";
import ApiReviews from "./ApiReviews";
import DummyReviews from "./DummyReviews";
import axios from "axios";

function OrdersTable() {

  const {adminData , setuserData , userData} = useContext(LoginContext)
  const  [data, setData] = useState([]);
  const  [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://backend.mydinemate.com/api/admin/getUsers', {
        headers: {
          'Accept': '*/*',
          'Authorization': `Bearer ${adminData.token}` 
        }
      });
      setData(response.data); 
      setuserData(response.data);
      console.log('api Data',data);
      setError(null);
    
    }
    catch (err) {
      setError(err.response ? err.response.data : err.message);
      console.log(error);
      
    }

    
}

  useEffect( () => {    
    fetchUsers()
  }, [])
  
  


  return (
      
      <main>
      <h1>Reviews Managment</h1>
      <div className="date flex gap-2">
          <input type="input" name="" id="" className="py-3 w-[300px] px-10 rounded-md mr-2"  placeholder="search..."/>
          <button className="bg-[#2f007e] px-5 py-3 rounded-md text-white">Search</button>
      </div>
      <div className="insights">
          <div className="sales">
              <div className="middle">
                  <div className="left">
                      <h3>Total sales</h3>
                      <h1>250</h1>
                  </div>
                  <div className="progress">
                      <svg>
                          <circle cx="38" cy="38" r="36"></circle>
                      </svg>
                      <div className="number">
                          <p>82%</p>
                      </div>
                  </div>
              </div>
              <small className="text-muted">
                  last 24 hours
              </small>
          </div>
          <div className="expenses">
              <div className="middle">
                  <div className="left">
                      <h3>Deliverd</h3>
                      <h1>144</h1>
                  </div>
                  <div className="progress">
                      <svg>
                          <circle cx="38" cy="38" r="36"></circle>
                      </svg>
                      <div className="number">
                          <p>61%</p>
                      </div>
                  </div>
              </div>
              <small className="text-muted">
                  last 24 hours
              </small>
          </div>
          <div className="income">
              <div className="middle">
                  <div className="left">
                      <h3>Pending</h3>
                      <h1>27</h1>
                  </div>
                  <div className="progress">
                      <svg>
                          <circle cx="38" cy="38" r="36"></circle>
                      </svg>
                      <div className="number">
                          <p>47%</p>
                      </div>
                  </div>
              </div>
              <small className="text-muted">
                  last 24 hours
              </small>
          </div>
      </div>
      <div className="row justify-between my-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
          <h3 className="text-4xl text-[#2f007e]">Reviews</h3></div>
            {/* <div className="col-lg-2 col-md-6 col-sm-6">
              <Link className="bg-[#2f007e] rounded-lg py-3 px-6 text-white">
                Add User
              </Link>
            </div> */}
          </div>
          <Table className="orders">
        <thead>
          <tr>
            <th className="py-2">name</th>
            <th className="py-2">Profile Rating</th>
            <th className="py-2">Profile Review</th>
            <th className="py-2">Email</th>
            <th className="py-2">Options</th>
          </tr>
        </thead>
        {
          data.lenght ? <tbody>
            {data.map((user)=>(<ApiReviews/>))}
          </tbody> : <DummyReviews/>
        }
    
      </Table>
  </main>
  );
}

export default OrdersTable;
