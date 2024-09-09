import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { LoginContext } from "../../context/Admin";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Cookie from 'js-cookie'

function Pricing() {


   const token  = Cookie.get('token')
  const { adminData } = useContext(LoginContext);
  const [data, setdata] = useState([]);
  const [editPkg, seteditPkg] = useState([]);
  const [show, setShow] = useState(false);
  const [pkgNum, setpkgNum] = useState("");
  const [mothlyPrice, setmothlyPrice] = useState("0");
  const [yearlyPrice, setyearlyPrice] = useState("0");
  const [features, setfeatures] = useState([]);
  const [Inputfeatures, setInputfeatures] = useState("");
  
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const savePkg = async () => {
    const url = "https://backend.mydinemate.com/api/admin/updateSubscription";
    const data = {
      subscriptionLevel: pkgNum,
      monthlyPrice: mothlyPrice,
      yearlyPrice: yearlyPrice,
      features: [Inputfeatures],
    };

    const savePkg = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(savePkg.data);
  };

  const fetchPricing = async () => {
    const response = await axios.get(
      "https://backend.mydinemate.com/api/admin/getSubscriptionPackages"
    );
    await setdata(response.data);
    console.log(data);
  };

  useEffect(() => {
    fetchPricing();
  }, []);

  return (
    <section className="relative mt-5 overflow-hidden   py-3 dark:bg-dark">
      <div className="container-fluid mx-auto">
        <div className="-mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="flex flex-wrap -mx-4 ">
            {data.length ? (
              data.map((card) => (
                <div className="w-full px-2 md:w-1/2 lg:w-1/2 my-2">
                  <div className="relative  overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
                    <span className="mb-3 block text-lg font-semibold text-primary">
                      {card.name}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <h2 className=" text-[27px] font-bold text-dark dark:text-white">
                        {card.yearlyPrice}
                        <span className="text-base font-medium text-body-color dark:text-dark-6">
                          / {"year"}
                        </span>
                      </h2>
                      <h2 className=" text-[27px] font-bold text-dark dark:text-white">
                        {card.monthlyPrice}
                        <span className="text-base font-medium text-body-color dark:text-dark-6">
                          / {"month"}
                        </span>
                      </h2>
                    </div>

                    <div className="mb-9 flex flex-col gap-[14px]">
                      {" "}
                      {card.features.map((list) => (
                        <List>{list}</List>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">

                      <button
                        id={card._id}
                        onClick={async () => {
                          setShow(true);
                          let a =  data.find((d) => d._id === card._id);
                         await seteditPkg(a);
                          console.log(editPkg);
                          setpkgNum(a.subscriptionLevel)
                          setmothlyPrice(a.monthlyPrice)
                          setyearlyPrice(a.yearlyPrice)
                          setInputfeatures(a.features)
                        }}
                        className="block w-[44%] rounded-md border border-stroke bg-transparent hover:bg-green-600 p-3 text-center text-base font-medium text-green-600 transition hover:border-green-600  dark:border-dark-3"
                      >
                        Edit
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              ))
            ) : (
              <p>Load.....</p>
            )}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pricing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            <div>
              <Form.Label htmlFor="inputPassword4">
                Subscription Level
              </Form.Label>
              <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={pkgNum}
                onChange={(e) => setpkgNum(e.target.value)}
              />
            </div>
            <div>
              <Form.Label htmlFor="inputPassword4">Mothly Price</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={mothlyPrice}
                onChange={(e) => setmothlyPrice(e.target.value)}
              />
            </div>
            <div>
              <Form.Label htmlFor="inputPassword4">Yearly Price</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={yearlyPrice}
                onChange={(e) => setyearlyPrice(e.target.value)}
              />
            </div>
            <div>
              <Form.Label htmlFor="inputPassword4">feature</Form.Label>

              <Form.Control
                type="text"
                id="inputPassword4"
                aria-describedby="passwordHelpBlock"
                value={Inputfeatures}
                onChange={(e) => setInputfeatures(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={savePkg}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Pricing;

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};
