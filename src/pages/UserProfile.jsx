import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditProfile from "../component/user/EditProfile";
import ProfileSetting from "./ProfileSetting";
import ChangePassword from "../component/user/ChangePassword";
import profile from '../images/profile-img.jpg'
import { useContext } from 'react'
import { LoginContext } from "../context/Admin";
import axios from "axios";
import Cookie from 'js-cookie'
function UserProfile() {

  const pass = Cookie.get('adminPass')
  const Email = Cookie.get('adminEmail')

    const [activeTab, setActiveTab] = useState("profile-overview");
    const [Data , setData] = useState()

    const fetchData = async ()=>{
      const url = "https://backend.mydinemate.com/api/admin/login";
      const data = {
        email: Email,
        password: pass,
      };

        const result = await axios.post(url, data, {
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
          },
        });
       
        await setData(result.data)
        
        
      }
      
      console.log(Data);

  useEffect(()=>{
    fetchData()
  },[])
      

  return (
    <main>
     <h1>My Profile</h1>
    <div className="date">
        <input type="date" name="" id="" />
        </div>
    <section className="section profile mt-5">
      <div className="row">

        <div className="col-xl-12">
          <div className="card">
            <div className="card-body pt-3">
              <ul className="nav nav-tabs nav-tabs-bordered">
                <li className="nav-item">
                  <button
                    className={`nav-link text-[#ef1c23] ${
                      activeTab === "profile-overview" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("profile-overview")}
                  >
                    Overview
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "profile-edit" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("profile-edit")}
                  >
                    Edit Profile
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "profile-settings" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("profile-settings")}
                  >
                    Settings
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "profile-change-password" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("profile-change-password")}
                  >
                    Change Password
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-2">
                {activeTab === "profile-overview" && (
                  <div
                    className="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <h5 className="card-title">About</h5>
                    <p className="small fst-italic">
                      Sunt est soluta temporibus accusantium neque nam maiores
                      cumque temporibus. Tempora libero non est unde veniam
                      est qui dolor. Ut sunt iure rerum quae quisquam autem
                      eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                      unde.
                    </p>

                    <h5 className="card-title">Profile Details</h5>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label ">
                        Full Name
                      </div>
                      <div className="col-lg-9 col-md-8">{Data ?  Data.admin.name : "dummy"}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Country</div>
                      <div className="col-lg-9 col-md-8">USA</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Address</div>
                      <div className="col-lg-9 col-md-8">
                        A108 Adam Street, New York, NY 535022
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Phone</div>
                      <div className="col-lg-9 col-md-8">
                        {Data ?  Data.admin.contactNumber : "dummy" }
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">
                        { Data ?  Data.admin.email : "dummy"
                        }
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "profile-edit" && (
                  <div
                    className="tab-pane fade show active profile-edit pt-3"
                    id="profile-edit"
                  >
                    <EditProfile />
                  </div>
                )}
                {activeTab === "profile-settings" && (
                  <div
                    className="tab-pane fade show active pt-3"
                    id="profile-settings"
                  >
                    <ProfileSetting/>
                  </div>
                )}
                {activeTab === "profile-change-password" && (
                  <div
                    className="tab-pane fade show active pt-3"
                    id="profile-change-password"
                  >
                    <ChangePassword />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>  )
}

export default UserProfile