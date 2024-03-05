import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginIMG from "../accets/login.png";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("login", response);
      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        console.log(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
        toast.success("login successful : ");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("Invalid Creadential : ");
      }
    } catch (error) {
      console.log("login ", error);
    }
  };

  return (
    <>

      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-sm-6">
            <section>
              <main>
                <div className="section-registration">
                  <div className="container">
                    <div className="">
                      <img
                        src={loginIMG}
                        alt="a nurse with a cute look"
                        width={"80%"}
                      />
                    </div>
                  </div>
                </div>
              </main>
            </section>
          </div>



          <div className="col-sm-6">
            <div className="section-registration">
              <div className="container">

                <div className="registration-form">
                  <h1 className="main-heading">Login Form</h1>
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                      <label htmlFor="email">email</label><br></br>
                      <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        placeholder="email"
                      />
                    </div>

                    <div>
                      <label htmlFor="password">password</label><br></br>
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
                      Login Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Login;


