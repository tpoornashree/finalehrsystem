import doctor_profile from "../assets/img/dashboard/doctor2.png";
import reports from "../assets/img/dashboard/report2_pbl.png";
import search from "../assets/img/dashboard/search2.png";
import add_pre_logo from "../assets/img/dashboard/add_prescription_logo.png";
import Footer from "../components/landingPage/Footer";
import eye from "../assets/img/dashboard/eye.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
const DoctorDashboard = (props) => {
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [dob, setDob] = useState("01/01/2006");
  const [patient, setPatient] = useState({});
  const [prescriptions, setPrescriptions] = useState([{}]);
  const [doctor, setDoctor] = useState({
    name: {
      firstName: "",
      middleName: "",
      surName: "",
    },
    org: "",
    orgAddress: {
      building: "",
      city: "",
      taluka: "",
      district: "",
      state: "",
      pincode: "",
    },
    emergencyno: "",
    orgNumber: "",
    dob: "",
    mobile: "",
    email: "",
    adharCard: "",
    bloodGroup: "",
    education: [{ degree: "" }],
    address: {
      building: "",
      city: "",
      taluka: "",
      district: "",
      state: "",
      pincode: "",
    },
    specialization: [{ special: "" }],
    password: "",
    _id: "",
  });

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    async function getdoctor() {
      const res = await fetch("/getdoctor");
      const data = await res.json();
      if (data.AuthError) {
        props.settoastCondition({
          status: "info",
          message: "Please Login to Proceed!!!",
        });
        props.setToastShow(true);
        navigate("/");
      } else {
        setDoctor(data.doctor);
      }
    }
    async function getpatient() {
      setLoading(true);
      if (props.healthID.length === 12) {
        const res = await fetch(`/searchpatient/${props.healthID}`);
        const data = await res.json();

        if (data.AuthError) {
          setLoading(false);
          props.settoastCondition({
            status: "info",
            message: "Please Login to proceed!!!",
          });
          props.setToastShow(true);
          navigate("/");
        } else if (data.error) {
          setLoading(false);
          props.settoastCondition({
            status: "error",
            message: "This HealthID doesn't exist!!!",
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
          props.setToastShow(true);
        } else {
          setPatient(data.patient);
          if (data.patient.prescriptions) {
            setPrescriptions(data.patient.prescriptions.reverse());
          }
          setDob(convertDatetoString(patient.dob));
          setLoading(false);
        }
      } else if (props.healthID.length === 0) {
        setLoading(false);
        setPatient({});
      }
      setLoading(false);
    }
    getdoctor();
    getpatient();
  }, [dob]);

  const searchPatient = async (e) => {
    e.preventDefault();
    if (props.healthID.length === 12) {
      setLoading(true);
      const res = await fetch(`/searchpatient/${props.healthID}`);
      const data = await res.json();

      if (data.AuthError) {
        setLoading(false);
        props.settoastCondition({
          status: "info",
          message: "Please Login to proceed!!!",
        });
        props.setToastShow(true);
        navigate("/");
      } else if (data.error) {
        setLoading(false);
        props.settoastCondition({
          status: "error",
          message: "This HealthID doesn't exist!!!",
        });
        props.setToastShow(true);
      } else {
        setPatient(data.patient);
        if (data.patient.prescriptions) {
          setPrescriptions(data.patient.prescriptions.reverse());
        }
        setDob(convertDatetoString(patient.dob));
        setLoading(false);
      }
    } else {
      props.settoastCondition({
        status: "warning",
        message: "Please Enter 12 Digit HealthID !!!",
      });
      props.setToastShow(true);
    }
  };

  return (
    <div className="h-screen col-span-10 full-body">
      <div className="body-without-footer bg-bgprimary ">
        <div className="m-2 main ">
          {/* dashboard today start */}
          <div className="">
            <div className="flex h-12 m-2 mt-4 rounded bg-bgprimary ">
              <div>
                <h1 className="p-2 text-2xl font-bold font-poppins ">
                  DashBoard Today
                </h1>
              </div>

              <div className="flex h-10 ml-20 ">
                <input
                  placeholder="Search"
                  className="pl-4 ml-4 text-xl border rounded w-96 focus:outline-none "
                ></input>
                <div className="pl-2 bg-white rounded ">
                  <img src={search} className="h-6 mt-2 " alt="search"></img>
                </div>
              </div>

              <Link to="/doctor/profile">
                <div className="flex px-4 bg-white rounded shadow ml-60 h-14 ">
                  <img
                    src={doctor_profile}
                    className="w-12 p-1 rounded-2xl"
                    alt="profile"
                  ></img>
                  <div className="grid grid-rows-2 gap-2 mb-4 ml-4">
                    <div className="text-base font-bold font-poppins">
                      <h1 className="">
                        {`Dr. ${doctor.name.firstName} ${doctor.name.surName}`}
                      </h1>
                    </div>
                    <div className="">
                      <h2 className="text-sm">
                        {doctor.specialization[0].special}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* dashboard today end */}

          <form
            onSubmit={searchPatient}
            className="grid grid-cols-9 p-4 mt-4 ml-12 mr-8 bg-white rounded shadow"
          >
            <div className="grid col-span-3 col-start-1">
              <h1 className="p-2 text-xl font-bold font-poppins ">
                Search Patient By Health Id :
              </h1>
            </div>
            <div className="grid col-span-3 ">
              <input
                placeholder="Health ID"
                className="pl-4 text-xl border-2 rounded bg-bgsecondary focus:outline-none"
                type="number"
                value={props.healthID}
                onChange={(e) => {
                  props.setHealthID(e.target.value);
                }}
              ></input>
            </div>
            {Loading ? (
              <div className="grid h-10 col-start-8 ml-4">
                <ReactLoading
                  type={"bubbles"}
                  color={""}
                  height={"45%"}
                  width={"45%"}
                />
              </div>
            ) : (
              <div className="grid h-10 col-start-8 ml-4 font-semibold rounded shadow-sm  bg-primary font-poppins hover:bg-bgsecondary">
                <div className="flex items-center px-4 py-2 ">
                  <img src={search} className="h-4 " alt="search"></img>
                  <button className="flex ml-2 font-semibold rounded shadow-sm font-poppins hover:bg-bgsecondary ">
                    Search
                  </button>
                </div>
              </div>
            )}
            <div className="grid h-10 col-start-9 ml-4 font-semibold rounded shadow-sm bg-primary font-poppins hover:bg-bgsecondary ">
              <div className="flex items-center px-4 py-2 ">
                <div
                  className="flex ml-2 font-semibold rounded shadow-sm cursor-pointer font-poppins hover:bg-bgsecondary "
                  onClick={() => {
                    props.setHealthID("");
                  }}
                >
                  Remove
                </div>
              </div>
            </div>
          </form>

          {Object.keys(patient).length !== 0 ? (
            <div className="grid grid-cols-2">
              <div className="p-4 m-4">
                <div>
                  <h1 className="text-xl font-bold font-poppins ">
                    Patient Details
                  </h1>
                </div>
                <div className="p-4 px-8 mt-4 bg-white shadow font-poppins rounded-xl">
                  <div className="flex">
                    <div>
                      <h1>Name : </h1>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="pl-3">{`${patient.name.firstName} `}</h1>
                      <h1 className="pl-1">{`${patient.name.middleName} `}</h1>
                      <h1 className="pl-1">{patient.name.surName}</h1>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <h1>Date : </h1>
                    </div>
                    <div className="ml-2">
                      <h1>{dob}</h1>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <h1>Blood group : </h1>
                    </div>
                    <div className="ml-2">
                      <h1>{patient.bloodGroup}</h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="mt-4 font-bold">Past Health History</h1>
                    <div>{`${patient.diseases[0].disease} (${patient.diseases[0].yrs} yrs.)`}</div>
                  </div>
                </div>
              </div>
              {/* recent health check up start */}
              <div className="p-4 m-4 ">
                <div>
                  <h1 className="text-xl font-bold font-poppins ">
                    Recent Health Checkup
                  </h1>
                </div>
                {prescriptions.length > 0 ? (
                  <div className="p-4 px-8 mt-4 bg-white shadow font-poppins rounded-xl">
                    <div className="flex ">
                      <div>
                        <h1>Consultant Doctor :</h1>
                      </div>
                      <div className="ml-2">
                        <h1>{`Dr. ${prescriptions[0].doctor}`}</h1>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <h1>Date :</h1>
                      </div>
                      <div className="ml-2">
                        <h1>
                          {convertDatetoString(prescriptions[0].createdAt)}
                        </h1>
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <h1>Diagnosis : </h1>
                      </div>
                      <div className="ml-2">
                        <h1>{prescriptions[0].diagnosis}</h1>
                      </div>
                    </div>
                    <Link
                      to="/doctor/prescription"
                      onClick={() => {
                        props.setPrescriptionID(prescriptions[0]._id);
                      }}
                    >
                      <div className="flex items-center w-5/12 px-2 py-1 mt-2 text-base font-semibold rounded shadow-sm  justify-evenly bg-primary font-poppins hover:bg-bgsecondary">
                        <img src={reports} className="h-4" alt="report"></img>

                        <button className="pl-1 font-semibold ">
                          Preview Prescription
                        </button>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="flex justify-center p-4 px-8 mt-4 font-bold bg-white shadow font-poppins rounded-xl">
                    {" "}
                    No Data Found...{" "}
                  </div>
                )}
                {/* recent health check up end */}
              </div>
              <div></div>
            </div>
          ) : (
            <div className="flex items-center justify-center text-xl font-bold my-60">
              Search Patient to Add Diagnosis
            </div>
          )}

          {Object.keys(patient).length !== 0 ? (
            <div className="m-4 font-poppins ">
              <div className="flex justify-between m-8">
                <div className="ml-4 text-xl font-bold">
                  <h1>Patient Dashboard</h1>
                </div>
                <Link to="/doctor/addDiagno">
                  <div className="flex items-center py-1 pl-0 pr-3 font-semibold rounded shadow-sm  bg-primary justify-items-center font-poppins hover:bg-bgsecondary">
                    <img
                      src={add_pre_logo}
                      className="h-3 mx-3"
                      alt="adddiagno"
                    ></img>

                    <button className="font-semibold">Add New Diagnosis</button>
                  </div>
                </Link>
              </div>
              <div className="m-4 bg-white rounded-lg ">
                <div className="grid grid-rows-2 gap-2 p-6 shadow">
                  <div className="grid grid-cols-4 font-bold border-b-2">
                    <div>
                      <h1>Date</h1>
                    </div>
                    <div>
                      <h1>Doctor Name</h1>
                    </div>
                    <div>
                      <h1>Diagnosis</h1>
                    </div>
                    <div>
                      <h1>Prescription</h1>
                    </div>
                  </div>

                  {prescriptions.length > 0 ? (
                    prescriptions.slice(1, 3).map((prescription) => {
                      return (
                        <div className="grid grid-cols-4">
                          <div>
                            <h1>
                              {convertDatetoString(prescription.createdAt)}
                            </h1>
                          </div>
                          <div className="flex">
                            <h1>Dr. </h1>
                            <h1>{prescription.doctor}</h1>
                          </div>
                          <div>
                            <h1>{prescription.diagnosis}</h1>
                          </div>
                          <Link
                            to="/doctor/prescription"
                            onClick={() =>
                              props.setPrescriptionID(prescription._id)
                            }
                          >
                            <div className="flex justify-center w-2/5 px-3 py-1 font-semibold rounded shadow-sm  bg-primary font-poppins hover:bg-bgsecondary">
                              <img
                                src={eye}
                                className="h-4 my-auto"
                                alt="preview"
                              ></img>
                              <button className="ml-2 font-bold">
                                Preview{" "}
                              </button>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div className="mx-auto mt-3">No Records Found...</div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="mt-16 mb-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DoctorDashboard;
