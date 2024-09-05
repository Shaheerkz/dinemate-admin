import { useState } from "react";
import { Link } from "react-router-dom";
import EditProfile from "../component/user/EditProfile";
import ProfileSetting from "./ProfileSetting";
import ChangePassword from "../component/user/ChangePassword";
import profile from '../images/profile-img.jpg'
import { useContext } from 'react'
import { LoginContext } from "../context/Admin";
function UserProfile() {
    const [activeTab, setActiveTab] = useState("profile-overview");
    const {adminData} = useContext(LoginContext)

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
                      <div className="col-lg-9 col-md-8">{adminData.admin.name}</div>
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
                        {adminData.admin.contactNumber}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">
                        {adminData.admin.email
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