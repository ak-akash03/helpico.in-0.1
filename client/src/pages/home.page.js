// // import { Analytics } from "../components/Analytics";
import frontIMG from "../accets/frontIMG.png";
import bottomIMG from "../accets/bottomIMG.png";
import Student from "../componants/Student";

function Home() {
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 mt-5 pt-5">
            <section className="section-hero">
              <div className="container ">
                <div className="hero-content">
                  <p>We are the World Best Writter</p>
                  <h1>Welcome to Helpico.in</h1>
                  <p>
                    Welcome to Helpico.in, your go-to destination for academic
                    support and real-world project assistance. Our website is
                    dedicated to aiding students in their assignment writing
                    journey while also offering exposure to practical,
                    real-world projects.
                  </p>
                  <div className="btn btn-group">
                    <a href="/contact">
                      <button className="btn">connect now</button>
                    </a>
                    <a href="#student">
                      <button className="btn secondary-btn">Fill Form</button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-6 text-center">
            <div className="hero-image">
              <img src={frontIMG} alt="coding together" width="80%" />
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* -------------------------------------------------------------------------------------- */}

      <div id="student" className="container">
        <Student />
      </div>

      {/* -------------------------------------------------------------------------------------- */}
      <hr></hr>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 ">
            <div className="hero-content mt-5 pt-5">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
                At Helpico.in, we understand the challenges students face when
                it comes to assignments, and we are here to make that journey
                smoother. Our platform connects students with skilled writers
                who can provide expert assistance in crafting well-researched
                and high-quality assignments.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="hero-image">
              <img src={bottomIMG} alt="coding together" width="80%" />
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Home;
