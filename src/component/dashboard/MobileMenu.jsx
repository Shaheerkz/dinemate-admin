import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faGripVertical,
  faCartShopping,
  faMoneyBill,
  faUserTie,
  faBowlFood,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo.jpeg";
import { ToggleContext } from "../../context/ToggleSidebar";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'


function MobileMenu() {

  const navigate = useNavigate()
  const { toggle, setToggle } = useContext(ToggleContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = async()=>{
    Cookies.remove('token');
    Cookies.remove('adminName');
    Cookies.remove('adminPass');
    Cookies.remove('adminEmail');

    setTimeout(()=>{
        navigate('/')
    },2000)

  }

  return (
    <aside
      className={`${toggle ? "block" : "hidden"} w-[90%] shadow-lg h-full p-4`}
    >
      <div className="flex justify-between">
        <div className="Logo flex items-center gap-2 bg-white py-1 px-2  ">
          <img src={Logo} alt="" className="w-[3rem] h-[3rem]" />
          <h4 className="text-[30px]">
            DINE <span className="text-[#ff7782]">MATE</span>
          </h4>
        </div>
        <button
          onClick={handleToggle}
          className="text-violet-700 h-[40px] text-2xl w-[40px] flex items-center justify-center shadow-lg rounded-md bg-white"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="mt-5">
        <Link className="flex my-2 items-center gap-[1rem] hover:bg-[#7380ec] py-2 px-4 hover:text-white transition-all hover:ml-3" to={'/'}>
          <FontAwesomeIcon icon={faGripVertical} className="text-[20px]" />
          <h3 className="text-[24px]">Users</h3>
        </Link>
        <Link className="flex my-2 items-center gap-[1rem] hover:bg-[#7380ec] py-2 px-4 hover:text-white transition-all hover:ml-3" to={'/Orders'}>
          <FontAwesomeIcon icon={faCartShopping} className="text-[20px]" />
          <h3 className="text-[24px]">Orders Managment</h3>
        </Link>
        <Link className="flex my-2  items-center gap-[1rem] hover:bg-[#7380ec] py-2 px-4 hover:text-white transition-all hover:ml-3 " to={'/edit-profile'}>
          <FontAwesomeIcon icon={faUserTie} className="text-[20px]" />
          <h3 className="text-[24px]">My Profile</h3>
        </Link>
        <Link className="flex my-2 items-center gap-[1rem] hover:bg-[#7380ec] py-2 px-4 hover:text-white transition-all hover:ml-3 " to={'/payment'}>
          <FontAwesomeIcon icon={faMoneyBill} className="text-[20px]" />
          <h3 className="text-[24px]">Payment Managment</h3>
        </Link>
        <Link className="flex my-2 items-center gap-[1rem] hover:bg-[#7380ec] py-2 px-4 hover:text-white transition-all hover:ml-3 " to={'/resturent-managment'}>
          <FontAwesomeIcon icon={faBowlFood} className="text-[20px]" />
          <h3 className="text-[24px]">Resturent Managment</h3>
        </Link>
        <button className="flex my-2 items-center gap-[1rem] hover:bg-[#7380ec] py-2 px-4 hover:text-white transition-all hover:ml-3 "  onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} className="text-[20px]" />
          <h3 className="text-[24px]">Logout</h3>
        </button>
      </div>
    </aside>
  );
}

export default MobileMenu;
