import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
function AdminContacts() {
  const { AuthorizationToken } = useAuth();
  const [contactData, setContactData] = useState([]);
  const getAllContactsData = async () => {
    try {
      const responce = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await responce.json();
      console.log(data);
      setContactData(data);
    } catch (error) {
      console.log(error);
    }
  };


  const deleteContact = async (id) => {
    const responce = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
      method: "DELETE",
      headers:{
        Authorization : AuthorizationToken,
      }
    })

    if(responce.ok){
      getAllContactsData();
    }
  }

  useEffect(() => {
    getAllContactsData();
  }, []);

  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contact Data </h1>
        <div className="container admin-users">
          {contactData.map((Element, index) => {

            const {username, email, message, _id} = Element;
            
            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={()=> deleteContact(_id) }>Delete</button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
}

export default AdminContacts;
