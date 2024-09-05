
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../../context/Admin";
function UserApiRow(props) {


  const {adminData} = useContext(LoginContext)

  const handleDelete = async () => {

    console.log(props.id);
    
    const url = "https://backend.mydinemate.com/api/admin/deleteUser";
    const data = {
      userId: props.id,
    };
    try {
      return await axios.delete(url, data, {
        headers: {
          Accept: '*/*',
          "Content-Type": "application/json",
          'Authorization': `Bearer ${adminData.token}` 

        },
      });
    } catch (error) {
      console.log(error.message);
      
    }
  };

  return (
    <tr key={props.Key}>
    <td className="pt-3">{props.index }</td>
    <td className="">
      <span>{props.td1}</span>{" "}
      {/* <Link
        className="bg-green-600 text-white p-1 rounded-md "
        to={`/edit-user/${props.id}`}
      >
        <FontAwesomeIcon icon={faPen} />
      </Link> */}
    </td>
    <td className="pt-3">{props.td2}</td>
   
    <td className="pt-3">
        {props.td4}
    </td>
    <td className="">
    <Link
        className="bg-green-600 text-white p-1 rounded-md "
        to={`/edit-user/${props.id}`}
      >
        View
      </Link>
    </td>
  </tr>  
  )
}

export default UserApiRow