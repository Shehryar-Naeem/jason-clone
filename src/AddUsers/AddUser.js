import Axios  from "axios";
import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
const AddUser = () => {
  const [data,setData]=useState({
    name:"",
    lname:"",
    email:"",
    password:"",
  })
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
    await Axios.post("http://localhost:3003/users",data);
    navigate.push("/home")
  }
  return (
    <>
      <div className="container py-5">
      <div className="text-center text-success ">Add User</div>
        <form onSubmit={reDirect}>
          <div className="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter first name"
              name="name"
              value={data.name}
              onChange={onData}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter last name"
              name="lname"
              value={data.lname}
              onChange={onData}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input
              type="Email"
              className="form-control"
              id="exampleInputPassword1"
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
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default AddUser;
