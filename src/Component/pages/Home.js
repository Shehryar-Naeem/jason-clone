import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [user,setUser]=useState([]);
  useEffect(()=>{
    loadUsers()
  },[])
  const loadUsers =async ()=>{
    const result = await axios.get("http://localhost:3003/users")
    setUser(result.data)
  }
  const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers()
  }
  return (
    <>
    <div className="container py-5">
      <table class="table border shadow">
        <thead class="thead-dark bg-dark text-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {
          user.map((currElem,index)=>{
            return (
              <>
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{currElem.name}</td>
                  <td>{currElem.email}</td>
                  <td>{currElem.password}</td>
                  <td>
                    <Link to={`/users/view/${currElem.id}`} className="btn btn-primary me-2">View</Link>
                    <Link to={`/users/edit/${currElem.id}`} className="btn btn-outline-primary me-2">Edit</Link>
                    <Link to="/" className="btn btn-danger" onClick={()=>deleteUser(currElem.id)}>Delete</Link>
                  </td>
                </tr>
              </>
            )
          })
        }
        </tbody>
      </table>
      </div>
    </>
  );
};
export default Home;
