import React, { useCallback, useContext, useEffect } from "react";
import prfile from "../../images/profile-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faRightFromBracket,
  faBell,
  faBarsStaggered,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { ToggleContext } from "../../context/ToggleSidebar";
import { LoginContext } from "../../context/Admin";
import { Accordion } from "react-bootstrap";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Right() {
  let token = Cookies.get("token");
  const navigate = useNavigate();



  const fetchFaqs = async () => {
    const url = "https://backend.mydinemate.com/api/admin/getFAQs";
    const faqRes = await axios.get(url);
    await setfaqs(faqRes.data.data);
    console.log(faqs);
  };

  const fetchPolicy = async () => {
    const url = "https://backend.mydinemate.com/api/admin/getPrivacyPolicy";
    const faqRes = await axios.get(url);
    await setpolicy(faqRes.data.data);
    console.log(policy);
  };

  const addFaq = async () => {
    const url = "https://backend.mydinemate.com/api/admin/createFAQs";
    const data = {
      question: faqQ,
      answer: faqA,
    };
    await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("added");
    setmessage("Faqs is Added");
    setshowmessage(true);
    setTimeout(() => {
      setshowmessage(setshowmessage(false));
    }, 3000);
  };

  const editFaq = async () => {
    const url = `https://backend.mydinemate.com/api/admin/editFAQs/${FaqId}`;
    const data = {
      question: faqQ,
      answer: faqA,
    };
    const response = await axios.put(url, data, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response, "edited");
    setmessage("Faqs is updated");
    setshowmessage(true);
    setTimeout(() => {
      setshowmessage(setshowmessage(false));
    }, 3000);
  };
  const deletFaq = async (e) => {
    const url = `https://backend.mydinemate.com/api/admin/deleteFAQs/${e}`;
    const response = await axios.delete(url, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(faqs);

    console.log("deleted");
    setmessage("Faqs is Deleted");
    setshowmessage(true);
    setTimeout(() => {
      setshowmessage(setshowmessage(false));
    }, 3000);
  };

  const updatePolicy = async () => {
    const url = "https://backend.mydinemate.com/api/admin/editPrivacyPolicy";
    const data = {
      policy: ckData,
    };

    const response = await axios.put(url, data, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("edited Policy");
    setmessage("Policy is updated");
    setshowmessage(true);
    setTimeout(() => {
      setshowmessage(setshowmessage(false));
    }, 3000);
  };

  const { adminData } = useContext(LoginContext);
  const { toggle, setToggle } = useContext(ToggleContext);
  const [noti, setnoti] = useState(false);
  const [faqs, setfaqs] = useState([]);
  const [faqQ, setfaqQ] = useState("");
  const [faqA, setfaqA] = useState("");
  const [policy, setpolicy] = useState([]);
  const [Faqshow, setFaqShow] = useState(false);
  const [policyshow, setpolicyShow] = useState(false);
  const [FaqEdit, setFaqEdit] = useState(false);
  const [FaqId, setFaqId] = useState("");
  const [message, setmessage] = useState("");
  const [showmessage, setshowmessage] = useState(false);
  const [Data, setData] = useState();
  const [ckData, setckData] = useState("");

  const pass = Cookies.get("adminPass");
  const Email = Cookies.get("adminEmail");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log("Content was updated:", data , event , editor);
    setckData(data)

  };

  const fetchData = async () => {
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

    await setData(result.data);
  };

  const name = Data ? Data.admin.name : "Anus";
  const Image = Data ? prfile : prfile;

  useCallback(() => {
    fetchFaqs();
  }, [setfaqs, faqs]);

  useEffect(() => {
    let cookie = Cookies.get("token");
    if (cookie) {
      fetchData();
      fetchFaqs();
      fetchPolicy();
    } else {
      navigate("/");
    }
  }, []);

  const handleFaqClose = () => setFaqShow(false);
  const handleFaqEditClose = () => setFaqEdit(false);
  const handlePolicyClose = () => setpolicyShow(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="right">
      <div className="top">
        <button onClick={handleToggle} id="menu-btn">
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
        <div className="relative">
          <FontAwesomeIcon
            onClick={() => setnoti(!noti)}
            className="text-[#7380ec] text-[25px] cursor-pointer"
            icon={faBell}
          />
          <div className="absolute message w-4 rounded-full flex justify-center items-center h-5 bg-red-500 text-white bottom-4 -right-1">
            7
          </div>
        </div>

        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>{name}</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>

      <div className="faqs mt-3">
        <h2 className="my-2">FAQ's</h2>
        <Accordion className="rounded-lg shadow-lg">
          {faqs.length
            ? faqs.map((faq, index) => (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>
                    {faq.question}{" "}
                    <button
                      onClick={(e) => {
                        setFaqId(faq._id);
                        setFaqEdit(true);
                        console.log(FaqId);
                        fetchFaqs();
                      }}
                      id={faq._id}
                      className="bg-green-600 ml-2 text-white p-1 rounded-md "
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>{" "}
                    <button
                      onClick={() => deletFaq(faq._id)}
                      id={faq._id}
                      className="bg-red-600 ml-2 text-white p-1 rounded-md "
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>{" "}
                  </Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))
            : ""}
        </Accordion>
        <button
          className="item add-product my-2"
          onClick={() => setFaqShow(true)}
        >
          <h3>Add Faqs</h3>
        </button>
      </div>
      <div className="sales-analytics ">
        <h2>Privacy Policy</h2>
        <div className="bg-white shadow-lg rounded-md p-2 my-2 overflow-x-scroll">
           {/* {policy.policy} */}
           <div dangerouslySetInnerHTML={{__html :policy.policy }}></div>
        </div>
        <button
          className="item add-product"
          onClick={() => setpolicyShow(true)}
        >
          <h3>Update Policy</h3>
        </button>
      </div>
      <div className="recent-update">
        <h2>Notification</h2>
        <div className="updates">
          <div className="update">
            <div className="profile-photo">
              <img src={prfile} alt="" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone
              </p>
              <small className="text-muted">2 minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={prfile} alt="" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone
              </p>
              <small className="text-muted">2 minutes Ago</small>
            </div>
          </div>
        </div>
      </div>

      {noti ? (
        <div className="updates fixed top-14 rounded-lg shadow-xl w-fit p-4 right-2 bg-white block">
          <div className="update">
            <div className="profile-photo">
              <img src={prfile} alt="" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone
              </p>
              <small className="text-muted">2 minutes Ago</small>
            </div>
          </div>
          <div className="update ">
            <div className="profile-photo">
              <img src={prfile} alt="" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone
              </p>
              <small className="text-muted">2 minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={prfile} alt="" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone
              </p>
              <small className="text-muted">2 minutes Ago</small>
            </div>
          </div>
        </div>
      ) : (
        <div className="updates hidden">
          <div className="update">
            <div className="profile-photo">
              <img src={prfile} alt="" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone
              </p>
              <small className="text-muted">2 minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={prfile} alt="" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone
              </p>
              <small className="text-muted">2 minutes Ago</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={prfile} alt="" />
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone
              </p>
              <small className="text-muted">2 minutes Ago</small>
            </div>
          </div>
        </div>
      )}
      <Modal show={Faqshow} onHide={handleFaqClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Faq</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            <div>
              <Form.Label htmlFor="inputPassword4">Question</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={faqQ}
                onChange={(e) => setfaqQ(e.target.value)}
              />
            </div>
            <div>
              <Form.Label htmlFor="inputPassword4">Awnser</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={faqA}
                onChange={(e) => setfaqA(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFaqClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addFaq}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={FaqEdit} onHide={handleFaqEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Faq</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            <div>
              <Form.Label htmlFor="inputPassword4">Question</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={faqQ}
                onChange={(e) => setfaqQ(e.target.value)}
              />
            </div>
            <div>
              <Form.Label htmlFor="inputPassword4">Awnser</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={faqA}
                onChange={(e) => setfaqA(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePolicyClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editFaq}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={policyshow} onHide={handlePolicyClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT POLICY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            
              <Form.Label htmlFor="inputPassword4">Policy</Form.Label>
              {/* <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={faqQ}
                onChange={(e) => setfaqQ(e.target.value)}
              />
            </div> */}
            <CKEditor
              editor={ClassicEditor}
              data="<p>Type here...</p>"
              onChange={handleEditorChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePolicyClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updatePolicy}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className={`fixed ${
          showmessage ? "opacity-100" : "opacity-0"
        } transition-opacity bg-green-600  bottom-0 right-2 px-4 py-2 text-white `}
      >
        {message} in several minutes
      </div>
    </div>
  );
}

export default Right;
