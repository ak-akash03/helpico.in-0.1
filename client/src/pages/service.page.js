import React from "react";
import image from "../accets/ecom.png";
import { useAuth } from "../store/auth";

function Service() {
  const { services } = useAuth();
  console.log(services);

  return (
    <>
      

      {/* <div className="container ">
        {services.map((curElem, index) => {
         
         return(
          <div className="sub-div mainpart" key={index}>
            <div className="part01 text-center">
              <img src={image} alt="image" />
              <p className="down-x mt-4 btn btn-danger">download</p>
            </div>
            <div className="part02 pt-3">
              <p>
                <span className="text-b">SUB : {curElem.name}</span>
              </p>
              <p>
                <span className="text-b">DEAD : {curElem.deadline}</span>
              </p>
              <p>
                <span className="text-b">DEC : {curElem.message} </span>
              </p>
              <div className="text-center">
                <button className=" btn btn-primary">More ..</button>
              </div>
            </div>
          </div>
         )
        })}
      </div> */}
    </>
  );
}

export default Service;
