import { React, useEffect, useState } from "react";
import { useAuth } from "../store/auth";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();
  const getAllUsersData = async () => {
    try {
      const responce = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await responce.json();
      console.log(data);
      setUsers(data);
      // console.log("Hello akash");
    } catch (error) {
      console.log(error);
    }
  };


  const deleteUser = async(id) =>{
    try {
        const responce = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await responce.json();
      console.log(`user AFTER DELETE ${data}`);

      if(responce.ok){
        getAllUsersData();
      }
    } catch (error) {
        console.log(error);
    }
  }


  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">Admin Users Datta</div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((Element, index) => {
                return (
                  <tr key={index}>
                    <td>{Element.username}</td>
                    <td>{Element.email}</td>
                    <td>{Element.phone}</td>
                    <td>Edit</td>
                    <td>
                        <button onClick={() => deleteUser(Element._id) }>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminUsers;
