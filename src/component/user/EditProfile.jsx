import React, { useEffect, useState} from 'react'
import Profile from '../../images/profile-img.jpg'
import User from '../../images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload , faTrash } from '@fortawesome/free-solid-svg-icons'
import { LoginContext } from '../../context/Admin'
import { useContext } from 'react'
function EditProfile() {

  const {adminData} = useContext(LoginContext)
  const [file, setFile] = useState(Profile);
  const [data, setdata] = useState([]);



  useEffect( () => {

  }, []);
  const handleUpload = (e)=>{
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
    <div>
      <form>
        <div className="row mb-3">
          <label
            htmlFor="profileImage"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Profile Image
          </label>
          <div className="col-md-8 col-lg-9">
            <img src={file} className='h-[400px] w-[350px]' alt="Profile" />
            <div className="pt-2">
              <label
                className="btn btn-primary btn-sm"
                htmlFor="upload"
              >
                <FontAwesomeIcon icon={faUpload} />
              </label>
              <input type='file' id='upload' name='upload' className='hidden' onChange={handleUpload}/>
              <button
                onClick={(e)=>{
                  e.preventDefault();
                  setFile(User)
                }}
                className="btn btn-danger btn-sm"
                title="Remove my profile image"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="fullName"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Full Name
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="fullName"
              type="text"
              className="form-control"
              id="fullName"
              value={adminData.lenght ? adminData.admin.name : 'dummy'  }
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">
            About
          </label>
          <div className="col-md-8 col-lg-9">
            <textarea
              name="about"
              className="form-control"
              id="about"
              style={{ height: "100px" }}
            >
              Sunt est soluta temporibus accusantium neque nam maiores cumque
              temporibus. Tempora libero non est unde veniam est qui dolor. Ut
              sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
              Fuga sequi sed ea saepe at unde.
            </textarea>
          </div>
        </div>

          <div className="row mb-3">
          <label htmlFor="Job" className="col-md-4 col-lg-3 col-form-label">
            Title
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="job"
              type="text"
              className="form-control"
              id="Job"
              value={adminData?.admin.role ? adminData.admin.role : "Admin"}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="Country"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Country
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="country"
              type="text"
              className="form-control"
              id="Country"
              value="USA"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="Address"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Address
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="address"
              type="text"
              className="form-control"
              id="Address"
              value="A108 Adam Street, New York, NY 535022"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">
            Phone
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="phone"
              type="text"
              className="form-control"
              id="Phone"
              value={adminData.admin.contactNumber ? adminData.admin.contactNumber  : "00112233"}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">
            Email
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="email"
              type="email"
              className="form-control"
              id="Email"
              value={adminData.admin.email ? adminData.admin.email : 'admin@test.com' }
            />
          </div>
        </div>

        {/* <div className="row mb-3">
          <label
            htmlFor="Twitter"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Twitter Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="twitter"
              type="text"
              className="form-control"
              id="Twitter"
              value="https://twitter.com/#"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="Facebook"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Facebook Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="facebook"
              type="text"
              className="form-control"
              id="Facebook"
              value="https://facebook.com/#"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="Instagram"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Instagram Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="instagram"
              type="text"
              className="form-control"
              id="Instagram"
              value="https://instagram.com/#"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="Linkedin"
            className="col-md-4 col-lg-3 col-form-label"
          >
            Linkedin Profile
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="linkedin"
              type="text"
              className="form-control"
              id="Linkedin"
              value="https://linkedin.com/#"
            />
          </div>
        </div> */}

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </>
  )
}

export default EditProfile