import studentIMG from "../accets/info.png";
import { useState } from "react";
import { toast } from "react-toastify";

const Student = () => {
  const [file, setFile] = useState(null);
  // const [loading, setLoading] = useState(false)
  const defaultstudent = {
    name: "",
    email: "",
    address: "",
    message: "",
    deadline: "",
  };
  const [student, setstudent] = useState(defaultstudent);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setstudent({
      ...student,
      [name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/data/student",{
        method :"POST",
        headers :{
          "Content-Type" : "Application/json"
        },
        body:JSON.stringify(student)
      })

      console.log(student);
      console.log(response);
      // ----------------------------


      if(response.ok){
        setstudent(defaultstudent)
        const data = await response.json();
        console.log(data);
        toast("message send successfully : ")
      }

    } catch (error) {
      console.log("Error From Students : ");
    }




    console.log(student);
  };


  return (
    <>
      <div className="student-content container mt-3">
        <h1 className="main-heading mt-4">Fill Your Work</h1>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-6">
            <div className="container text-center">
              <div className="student-img mtt">
                <img
                  src={studentIMG}
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
                  <label htmlFor="username">Full Name</label>
                  <br></br>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={student.name}
                    onChange={handleInput}
                    placeholder="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={student.email}
                    placeholder="email"
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">College Name ( For Delevery )</label>
                  <br></br>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    autoComplete="off"
                    value={student.address}
                    placeholder="address"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">PDF & Image</label>
                  <br></br>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div>
                  <label htmlFor="message">Description</label>
                  <br></br>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="off"
                    value={student.message}
                    onChange={handleInput}
                    placeholder="description"
                    required
                    cols="56"
                    rows="6"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="">Deadline {student.deadline} Days</label>
                  <br></br>

                  <input
                    type="range"
                    name="deadline"
                    id="deadline"
                    autoComplete="off"
                    value={student.value}
                    onChange={handleInput}
                    min={3}
                    max={10}
                    required
                  />
                </div>

                <div>
                  <button type="submit" className="btn btn-primary">
                    Proccess
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default Student;
