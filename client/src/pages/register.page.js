import { useState } from "react";
import registerIMG from "../accets/register.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth;

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);
      console.log(response.ok);

      const res_data = await response.json();
      console.log(res_data);

      if (response.ok) {
        
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast("Registration Successfully : ")
        navigate("/login")
        storeTokenInLS(res_data.token);
      } else {
        console.log("invalid credential : ");
        // navigate("/login")
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      {/* <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src={registerIMG}
                  alt="a nurse with a cute look"
                  // width="500"
                  // height="500"
                />
              </div>
             
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section> */}

      {/* *************************************************************************************************** */}

      <div class="container mt-5">
        <div class="row text-center">
          <div class="col-sm-6">
            <section>
              <main>
                <div className="section-registration">
                  <div className="container">
                    <div className="registration-image reg-img">
                      <img
                        src={registerIMG}
                        alt="a nurse with a cute look"
                        width="80%"
                      />
                    </div>
                  </div>
                </div>
              </main>
            </section>
          </div>
          {/* ------------------------------------------------------------------ */}
          <div class="col-sm-6">
            <div className="registration-form">
              <h1 className="main-heading">Registration Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  {/* <label htmlFor="username">username</label><br></br> */}
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    placeholder="username"
                  />
                </div>
                <div>
                  {/* <label htmlFor="email">email</label><br></br> */}
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="email"
                  />
                </div>
                <div>
                  {/* <label htmlFor="phone">phone</label><br></br> */}
                  <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    placeholder="phone number"
                    onChange={handleInput}
                  />
                </div>
                <div>
                  {/* <label htmlFor="password">password</label><br></br> */}
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="password"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
    </>
  );
};

export default Register;
