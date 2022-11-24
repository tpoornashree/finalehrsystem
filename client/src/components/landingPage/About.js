import Footer from "./Footer";
import Navbar from "./Navbar";
import name from "../../assets/img/dashboard/admin-user.png";
import email from "../../assets/img/dashboard/admin-email.png";
import admin_git from "../../assets/img/dashboard/admin-git.png";
import admin_insta from "../../assets/img/dashboard/admin-insta-2.png";
import admin_linkedin from "../../assets/img/dashboard/admin-linkedin.png";
import admin_card_profile from "../../assets/img/dashboard/admin-card-profile.png";
const About = () => {
  return (
    <div className="flex flex-col h-screen body lg:overflow-hidden lg:h-screen max-h-min">
      <Navbar></Navbar>

      <div className=" bg-secoundry font-poppins over">
        <div className="flex justify-center ">
          <h1 className="p-4 px-8 text-3xl font-bold ">About us</h1>
        </div>
        <div className="">
          <div>
            <h1 className="flex justify-center text-xl font-bold">
              -- Developers --
            </h1>
            <div className="grid grid-cols-4 mt-12 ml-20 ">
              <div className="w-9/12 p-4 mt-6 border-2 rounded-md shadow-sm hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={admin_card_profile}
                    alt="admin_profile"
                    className="w-40 h-40 border-2 rounded-full"
                  ></img>
                </div>
                <div className="p-6 ">
                  <div className="flex justify-center ">
                    <img src={name} className="w-4 h-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Poornashree </h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="w-4 h-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">tpoornashree@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://www.instagram.com/codeliketheresnotomorrow/">
                      <img
                        src={admin_insta}
                        className="w-5 h-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://github.com/tpoornashree">
                      <img src={admin_git} className="w-5 h-5" alt="git"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/rohit-patil-35b08b209/">
                      <img
                        src={admin_linkedin}
                        className="w-5 h-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-9/12 p-4 mt-6 border-2 rounded-md shadow-sm hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={admin_card_profile}
                    alt="admin_profile"
                    className="w-40 h-40 rounded-full "
                  ></img>
                </div>
                <div className="p-6 ">
                  <div className="flex justify-center ">
                    <img src={name} className="w-4 h-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Vidhya Bharathi</h1>
                  </div>
                  <div className="flex justify-center mt-2 ">
                    <img src={email} className="w-4 h-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">vb@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://www.instagram.com/shadingmyfadinglife/">
                      <img
                        src={admin_insta}
                        className="w-5 h-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://github.com/rohitvpatil0810">
                      <img src={admin_git} className="w-5 h-5" alt="git"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/rohit-patil-35b08b209/">
                      <img
                        src={admin_linkedin}
                        className="w-5 h-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-9/12 p-4 mt-6 border-2 rounded-md shadow-sm hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={admin_card_profile}
                    alt="admin_profile"
                    className="w-40 h-40 border-2 rounded-full"
                  ></img>
                </div>
                <div className="p-6 ">
                  <div className="flex justify-center ">
                    <img src={name} className="w-4 h-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">Vinishaa R</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="w-4 h-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">vinisha@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://www.instagram.com/rohitvpatil0810/">
                      <img
                        src={admin_insta}
                        className="w-5 h-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://github.com/rohitvpatil0810">
                      <img src={admin_git} className="w-5 h-5" alt="git"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/rohit-patil-35b08b209/">
                      <img
                        src={admin_linkedin}
                        className="w-5 h-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-9/12 p-4 mt-6 border-2 rounded-md shadow-sm hover:shadow-xl">
                <div className="flex justify-center">
                  <img
                    src={admin_card_profile}
                    alt="admin_profile"
                    className="w-40 h-40 border-2 rounded-full "
                  ></img>
                </div>
                <div className="p-6 ">
                  <div className="flex justify-center ">
                    <img src={name} className="w-4 h-4 mt-1 " alt="name"></img>
                    <h1 className="ml-2">rakshitha prakasam</h1>
                  </div>
                  <div className="flex justify-center mt-2">
                    <img src={email} className="w-4 h-4 mt-1" alt="email"></img>
                    <h4 className="ml-2">rakshitha@gmail.com</h4>
                  </div>
                  <div className="flex justify-center gap-10 mt-6 ">
                    <a href="https://www.instagram.com/rohitvpatil0810/">
                      <img
                        src={admin_insta}
                        className="w-5 h-5"
                        alt="insta"
                      ></img>
                    </a>
                    <a href="https://github.com/rohitvpatil0810">
                      <img src={admin_git} className="w-5 h-5" alt="git"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/rohit-patil-35b08b209/">
                      <img
                        src={admin_linkedin}
                        className="w-5 h-5 "
                        alt="linkedin"
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
