import contactIMG from "../accets/support.png";
import { useAuth } from "../store/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const defaultContact = {
    username: "",
    email: "",
    message: "",
  }
  const [contact, setContact] = useState(defaultContact);


  const [userData, setUserData] = useState(true)
  const {user} = useAuth();

  if(userData && user){
    setContact({
      username: user.username,
      email : user.email,
      message : " "
    })
    setUserData(false)
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact",{
        method :"POST",
        headers :{
          "Content-Type" : "Application/json"
        },
        body:JSON.stringify(contact)
      })


      if(response.ok){
        setContact(defaultContact)
        const data = await response.json();
        console.log(data);
        toast("Message send successfully : ")
      }


    } catch (error) {
      console.log(error);
    }


    console.log(contact);
  };

  return (
    <>
      {/* ***************************************************************************************** */}


      <div className="contact-content container mt-3">
          <h1 className="main-heading">Contact Us</h1>
        </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-6">
            <div className="container">
              <div className="contact-img mt-4">
                <img
                  src={contactIMG}
                  width={"80%"}
                  alt="we are always ready to help"
                />
              </div>
            </div>
          </div>
          {/* // ----------------------------------------------------------------------------- */}
          <div className="col-sm-6">
            <section className="section-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label><br></br>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={contact.username}
                    onChange={handleInput}
                    placeholder="username"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">email</label><br></br>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={contact.email}
                    placeholder="email"
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">message</label><br></br>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    value={contact.message}
                    onChange={handleInput}
                    placeholder="enter the message"
                    required
                    cols="56"
                    rows="6"
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
<br></br>
<br></br>
<br></br>
<hr></hr>

      <section className="mb-3 mapsection">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            className="mapp"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
    </>
  );
};

export default Contact;
