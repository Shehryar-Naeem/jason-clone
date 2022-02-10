import axios  from "axios";
import React,{useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom"
const EditUser = () => {
  const [data,setData]=useState({
    name:"",
    lname:"",
    email:"",
    password:"",
  })
  let {id}=useParams()
const navigate=useNavigate();
  // let [fname,lname,email,password]=data;
  const onData=(e)=>{
    const {name,value}=e.target;
    setData((preValue)=>{
      return {
        ...preValue,
        [name]:value
      }
    })
  }
  const reDirect=async(e)=>{
    e.preventDefault()
    await axios.put(`http://localhost:3003/users/${id}`,data);
    navigate.push("/home")
  }
  
  const loadData=async ()=>{
    const result = await axios.get(`http://localhost:3003/users/${id}`)
    setData(result.data)
  }
  useEffect(()=>{
    loadData()
  },[])
  return (
    <>
      <div className="container py-5">
      <div className="text-center text-success ">Edit User</div>
        <form onSubmit={reDirect}>
          <div className="form-group">
            <label for="exampleInputfirstName1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputfirstName1"
              aria-describedby="emailHelp"
              placeholder="Enter first name"
              name="name"
              value={data.name}
              onChange={onData}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputLastName1">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName1"
              placeholder="Enter last name"
              name="lname"
              value={data.lname}
              onChange={onData}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="Email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={onData}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={onData}
            />
          </div>
          <button type="submit" className="btn btn-warning my-3">
            update user
          </button>
        </form>
      </div>
    </>
  );
}
export default EditUser;