import { NavLink } from "react-router-dom";
// import { Analytics } from "../components/Analytics";
import aboutIMG from "../accets/bottomIMG.png";
import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-6">
            <div className="hero-content mt-5">
              <p>Welcome, {user.username}</p>
              <h1>Why Choose Us? </h1>
              <p>
                Expert Writers: We have a team of experienced writers ready to
                tackle a wide range of subjects, ensuring that students receive
                top-notch assistance tailored to their academic needs.
              </p>
              <p>
                Real-World Projects: Helpico.in goes beyond traditional
                assignment help by offering real-world projects. This exposure
                allows students to apply theoretical knowledge to practical
                scenarios, enhancing their overall learning experience.
              </p>
              <p>
                User-Friendly Platform: Our website is designed with simplicity
                in mind. Students can easily navigate through the platform,
                submit assignments, and track progress effortlessly.
              </p>
              <p>
                Expert Assignment Writers: Our skilled writers are matched with
                assignments based on their expertise, ensuring a comprehensive
                and well-researched solution.
              </p>
              <p>
                Real-World Project Opportunities: In addition to assignment
                help, we provide students with the chance to engage in
                real-world projects, gaining valuable insights and practical
                experience.
              </p>
              <p>
                <h3> Your Academic Success is Our Priority:</h3>
                Helpico.in is committed to fostering academic success by
                providing reliable and quality support. We believe that by
                combining expert assignment writing assistance with real-world
                projects, we contribute to a holistic and enriching educational
                experience. Thank you for choosing Helpico.in as your academic
                companion. We look forward to supporting you on your educational
                journey!
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn disabled">
                  learn more
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="hero-image text-center">
              <img src={aboutIMG} alt="coding buddies " width="80%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
